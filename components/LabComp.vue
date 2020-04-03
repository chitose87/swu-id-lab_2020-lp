<template lang="pug">
  div
    .main-visual
      img.logo(src="/imgs/logo.png" alt="logo")
      p.title
        | 環境デザイン研究室
      p.subtitle
        | Information Design Laborayory

    section.about
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

    section.section
      .bg
        .catch
          img.img(src="/imgs/mone.png" alt="mone")

      h3.box
        img.img(src="/imgs/Team.png" alt="Team")
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
      .group
        p.title Engineer
        .content
          p.subtitle
            | 主にWebサイトの設計やプログ
            br
            | ラミングを行います。
          img(src="https://placehold.jp/250x150.png")

    section.news-section
      .container
        p.discription
          | このコミュニティは枠にとらわれない自由な場です。
          br
          | 学生と変なおじさんでできた、
        p
          | ゆるいけど実際の現場と同じような進行方法で
          br
          | 進んでいく集まりです。
          br
          | コンセプトはありません。

    section.profile-section
      .container
        img(src="/imgs/Producer.png" alt="Producer")
        p.profile
          | 千歳 慎
          br
          | Interactive Designer
          br
          | 環境デザイン学科 非常勤講師
        p.submit
          a(href="#").button
            | 参加申し込み

</template>

<script lang="ts">
  import {Component} from "~/node_modules/vue-property-decorator";
  import {Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    components: {}
  })
  export default class LabComp extends Vue {
  }
</script>

<style lang="scss">
  .container {
  }

  .main-visual {
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
      padding-bottom: 2.5rem;
      margin-bottom: 0rem;
    }

    p {
      font-size: 14px;
      margin-bottom: 0rem;
    }
  }

  .section {
    margin-top: 5rem;
    max-width: 100%;
    padding-bottom: 4rem;

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
      padding: 1rem;
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

        img {
          width: 100px;
          height: 100px;
          margin-top: 1rem;
        }

        .subtitle {
          margin-top: 1rem;
          padding: 0px;
        }
      }
    }
  }

  .news-section {
    background-color: white;

    .container {
      padding-top: 5rem;
    }

    .discription {
      margin-bottom: 2rem;
    }

    p {
      margin: 0px;
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
      text-align: center;
      margin-top: 1rem;
      margin-bottom: 4.375rem;

      p {
        margin: auto;
        line-height: 1.5rem;
        font-size: 14px;
      }
    }

    .submit {
      padding-bottom: 4rem;

      a {
        color: white;
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
        text-decoration: none;

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
  }
</style>
