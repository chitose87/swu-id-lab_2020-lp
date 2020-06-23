<template lang="pug">
  div
    GlobalHeader
    main
      .bg
        .catch
          img.img(src="/imgs/bg.png" alt="lab")
      .body
        .head
            img(src="/imgs/Members.png" alt="Members")
        p.title
          | メンバー紹介
        p.summary
          | 基本的に、ゆるく、やりたいことを
          br
          | やっている人たちです。
          br
          | それぞれの個性溢れる紹介を
          br
          | ご覧ください。

        //created()の一連の処理でspreadSheetDataに行データが入ってくる
        //v-forは行の数だけ.memberを繰り返し作ってくれる「文法」 https://jp.vuejs.org/v2/guide/list.html
          //＊itemsに一行分のデータが入ってて参照できる
            //items[0]　１列目
            //items[1]　２列目
      .container
        .member(v-for="items in spreadSheetData")
          p.member__item.name
            span(v-html="items[0]")
          p.member__item.nick-name
            span ニックネーム：
            span(v-html="items[1]")
          p.member__item.group
            span(v-html="items[2]")
          p.member__item.unit
            span Unit：
            span(v-html="items[3]")
          p.member__item.like
            span 好きなモノ：
            span(v-html="items[4]")
          p.member__item.bad
            span 嫌いなモノ：
            span(v-html="items[5]")
          p.member__item.will
            span やりたいこと：
            span(v-html="items[6]")
          //v-ifは「値があったら」という意味で、式がfalseになったら表示されない
          p.member__item.face(v-if="items[7]")
            img(:src="getPath(items[7])")

    GlobalFooter
</template>

<script lang="ts">
  import {Component} from "~/node_modules/vue-property-decorator";
  import {Vue} from "~/node_modules/nuxt-property-decorator";
  import GlobalHeader from "~/components/GlobalHeader.vue";
  import GlobalFooter from "~/components/GlobalFooter.vue";

  @Component({
    components: {
      GlobalFooter,
      GlobalHeader,
    }
  })
  export default class MemberPageComp extends Vue {

    spreadSheetData: string[][] = [];

    head() {
      return {
        // title: 'My Site',
        script: [
          //googleのAPI(Application Programming Interface)が使えるツールを読み込み
          {src: 'https://apis.google.com/js/api.js'},
        ]
      }
    }

    getPath(url: string) {
      //driveのURLから、画像のIDだけを抽出してハメてる（正規表現ってテクニック）
      return `https://drive.google.com/uc?id=${url.match(/\/d\/([^\/]+)/)![1]}`;
    }

    created() {
      try {
        //gapiは、Google apiの略。この中にスプレッドシートと連携するためのものが入ってる

        //認証ツールをloadする
        gapi.load('client:auth2', () => {
          //google cloud platformで登録したユーザー鍵を使って初期化
          gapi.client.init({
            apiKey: "AIzaSyAO4hoO627ZHxBqjz4Uet7M5kscJLe8j-M",
            clientId: "90996999377-5ipd5pojr42ahatuhefgcmc7ijs4rtph.apps.googleusercontent.com",
            discoveryDocs: [
              "https://sheets.googleapis.com/$discovery/rest?version=v4"
            ],
            scope: "https://www.googleapis.com/auth/spreadsheets.readonly"
          }).then(() => {
            //鍵が通ったらココが実行される

            //gapiのclient関連のシート機能のスプレッドシートの値をgetする関数を実行
            //https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
            gapi.client.sheets.spreadsheets.values.get({
              //対象のスプレッドシートのID
              spreadsheetId: "1WQBhlnMZJO1OwpU_VkXz2_24Uj4Aex7O3gpOCKwaZzA",
              //対象範囲（profile!A1:Z1とかだとセルの範囲がとれる）
              range: "profile",
              //下記は、日付とかをどういう形式にするかっていう設定
              valueRenderOption: 'UNFORMATTED_VALUE',
              dateTimeRenderOption: 'FORMATTED_STRING',
            }).then((response) => {
              //通信が成功したらここ
              console.log(response.result);


              //ここからgetできたデータをイジったり、使いやすくしてる

              //シートの中の”行たち”が入ってる部分をarrayに代入（response.result.valuesだと長くて使いにくいから）
              let array = <any[]>response.result.values;
              //最初の行は見出しだから削除
              array.shift();

              //arrayの中をシャッフル（下記サイトのを参考にした）
              //https://qiita.com/komaji504/items/62a0f8ea43053e90555a#fisheryates%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0%E3%82%92%E7%94%A8%E3%81%84%E3%82%8B%E6%96%B9%E6%B3%95
              for (let i = array.length - 1; i > 0; i--) {
                let r = Math.floor(Math.random() * (i + 1));
                let tmp = array[i];
                array[i] = array[r];
                array[r] = tmp;
              }

              //シャッフルしたarrayをspreadSheetDataの入れ物に移す
              //普通だったら、this.spreadSheetData=array;でいいんだけど諸事情により。。(参照渡しの都合)
              array.forEach((v) => {
                this.spreadSheetData.push(v);
              });

              //以上、あとは、vue.jsがよしなに表示してくれる。
            }, (e: Error) => {
              //なぜかエラーがでたらここ
              console.log(e);
            });
          }, (error: any) => {
            //鍵が通らなかったり、なんか問題あったらここ
            console.log(error);
          });
        });
      } catch (e) {

      }
    }
  }
</script>

<style lang="scss">
.bg {
  position: sticky;
  top: 0;
  height: 0;
  z-index: -1;
    .catch {
      .img {
        position: relative;
        right: 450px;
        width: auto;
        height: 740px;
      }
    }
}
.body{
  text-align: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0)
  );
  p{
    color: white;
  }
  .title{
    padding-bottom: 2.5rem;
    font-size: 22px;
  }
  .summary{
    padding-bottom: 10rem;
  }
}
  .member {
    background-color: white;
    border: 1px solid $color-border;
    padding: 1rem;
    margin-bottom: 3rem;

    &__item {
      margin-bottom: 0;
    }

    .face {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
