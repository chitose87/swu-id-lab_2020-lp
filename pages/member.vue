<template lang="pug">
  div
    GlobalHeader
    main
      .bg
        .catch
          img.img(src="/imgs/lab-bg.jpg" alt="lab")
      .container
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
          {src: 'https://apis.google.com/js/api.js'},
        ]
      }
    }

    getPath(url: string) {
      // url.match(/\/d\/([^\/]+)/)[1]
      // console.log(url, url.match(/\/d\/([^\/]+)/))
      return `https://drive.google.com/uc?id=${url.match(/\/d\/([^\/]+)/)![1]}`;
    }

    created() {
      try {
        gapi.load('client:auth2', () => {
          gapi.client.init({
            apiKey: "AIzaSyAO4hoO627ZHxBqjz4Uet7M5kscJLe8j-M",
            clientId: "90996999377-5ipd5pojr42ahatuhefgcmc7ijs4rtph.apps.googleusercontent.com",
            discoveryDocs: [
              "https://sheets.googleapis.com/$discovery/rest?version=v4"
            ],
            scope: "https://www.googleapis.com/auth/spreadsheets.readonly"
          }).then(() => {
            gapi.client.sheets.spreadsheets.values.get({
              spreadsheetId: "1WQBhlnMZJO1OwpU_VkXz2_24Uj4Aex7O3gpOCKwaZzA",
              range: "profile",
              valueRenderOption: 'UNFORMATTED_VALUE',
              // dateTimeRenderOption: 'SERIAL_NUMBER',
              dateTimeRenderOption: 'FORMATTED_STRING',
            }).then((response) => {
              console.log(response.result);

              response.result.values!.shift();
              let array = <any[]>response.result.values;
              for (let i = array.length - 1; i > 0; i--) {
                let r = Math.floor(Math.random() * (i + 1));
                let tmp = array[i];
                array[i] = array[r];
                array[r] = tmp;
              }
              array.forEach((v) => {
                this.spreadSheetData.push(v);
              });
            }, (e: Error) => {
              console.log(e);
            });
          }, (error: any) => {
            console.log(error);
          });
        });
      } catch (e) {

      }
    }
  }
</script>

<style lang="scss">
  .bg{
    position: sticky;
    top: 0;
    height: 0;
    z-index: -1;
    .catch {
      .img {
        object-fit: cover;
        object-position: 70% 40%;
        width: 100%;
        height: 100%;
      }
    }
  }
.container{
  .head{
    text-align: center;
    p{
      color: white;
    }
    .title{
      font-size: 22px;
    }
  }
  .member {
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
}
</style>
