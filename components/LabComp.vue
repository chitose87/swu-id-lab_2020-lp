<template lang="pug">
  div
    .mainvisual
      img.logo(src="/imgs/logo.png" alt="logo")
      p.title
        | 環境デザイン研究室
      p.subtitle
        | Information Design Laborayory

    section.about
      //nav はナビゲーション用　メニューとか
      .container
        p.discription
          | 昭和女子大学 情報デザイン研究室では主に、
          br
          | Webサイトの企画・作成を行います。
        p.discription
          | 本業がWebクリエオターを中心に実際の現場と同じような進行とクリエイティビティを目指します。
        p
          | 第一線で活躍するプロのデザイナー、
          br
          | エンジニアを交えて「プロクオリティ」を前提とします。

    //クラス名を内容にあったものに変更
    section.section
      .bg
        .catch
          img.img(src="/imgs/mone.png" alt="mone")

      // 見出しなので
      h3.box
        img.img(src="/imgs/Team.png" alt="team")
      .group
        p.title Director
        .content
          p.subtitle
            | 主に企画・ミーティング運営、
            br
            | スケジュール管理、
            br
            | プロジェクト全体の進行・管理
            br
            | を行います。
          img(src="https://placehold.jp/250x150.png")
      .group
        p.title Designer
        .content
          img(src="https://placehold.jp/250x150.png")
          p.subtitle
            | Webサイトのデザインや、ロゴ
            br
            | の作成などを行います。
            br
            | Photoshopなどを用いてデザイ
            br
            | ンを作成します。
            //img(src="https://placehold.jp/250x150.png")  
      .group
        p.title Engineer
        .content
          p.subtitle
            | 主にWebサイトの設計やプログ
            br
            | ラミングを行います。
          img(src="https://placehold.jp/250x150.png")

    //クラス名を内容にあったものに変更
    section.news-section
      .container
        p.discription
          | このコミュニティは枠にとらわれない自由な場です。
          br
          | 学生と変なおじさんでできた、
          | ゆるいけど実際の現場と同じような進行方法で
          | 進んでいく集まりです。
          br
          | コンセプトはありません。

    //クラス名を内容にあったものに変更
    section.profile-section
      //asideは、ページのコンテンツと関係ないようなブロックにつかう
      .container
        img(src="/imgs/Producer.png" alt="producer")
        .profile
          p
            | 千歳 慎
            br
            | Interactive Designer
            br
            | 環境デザイン学科 非常勤講師
        p
          a(href="#").button
            | 参加申し込み

</template>

<script lang="ts">
import { Component } from "~/node_modules/vue-property-decorator";
import { Vue } from "~/node_modules/nuxt-property-decorator";

@Component({
  components: {}
})
export default class LabComp extends Vue {}
</script>

<style lang="scss">
.container {
}

.mainvisual {
  background-color: #34b3db;
  max-width: 100%;
  height: 100vh;

  .logo {
    display: block;
    margin: auto;
    padding-top: 15rem;
    padding-bottom: 12rem;
  }

  .title {
    color: white;
    font-size: 25px;
    text-align: center;
    margin-bottom: 0rem;
  }

  .subtitle {
    color: white;
    font-size: 14px;
    text-align: center;
    padding-bottom: 5rem;
    margin-bottom: 0rem;
  }
}

.about {
  .container {
    margin-top: 5rem;
    margin-bottom: 0rem;
  }

  .discription {
    font-size: 14px;
    padding-bottom: 0.05rem;
    margin-bottom: 0rem;
  }

  p {
    margin-bottom: 0rem;
  }
}

.section {
  margin-top: 5rem;
  max-width: 100%;
  height: 790px;

  .bg {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 0;
    z-index: -1;

    .catch {
      padding: 0px;
      width: 100vw;
      height: 100vh;

      .img {
        padding: 0px;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
      }
    }
  }

  .box {
    background: -moz-linear-gradient(top, #000, transparent);
    background: -webkit-linear-gradient(top, #000, transparent);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0)
    );

    .img {
      width: 160px;
      height: auto;
      display: block;
      margin: auto;
    }
  }

  .group {
    height: 181px;
    margin: 1rem;
    background-color: white;

    .title {
      font-size: 20px;
      margin-bottom: 0rem;
      text-align: center;
    }

    .content {
      display: flex;
      justify-content: space-between;
      margin: 1rem;

      img {
        width: 100px;
        height: 100px;
      }

      .subtitle {
        padding: none;
        margin-bottom: 0rem;
      }
    }
  }
}

.news-section {
  background-color: white;

  .discription {
    margin-top: 5rem;
    padding-bottom: 1rem;
  }
}

.profile-section {
  background-color: white;

  img {
    display: block;
    margin: auto;
    width: 280px;
    height: auto;
    padding-top: 5rem;
    margin-bottom: 2.5rem;
  }

  .profile {
    margin-top: 1rem;
    margin-bottom: 2.5rem;

    p {
      margin: auto;
      line-height: 1.5rem;
      font-size: 14px;
    }
  }

  .button {
    width: 220px;
    height: 44px;
    background-color: #34b3db;
    border-radius: 10px;
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    p {
      color: white;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
  }
}
</style>
