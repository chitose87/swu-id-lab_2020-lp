<template lang="pug">
  .lab
    section.main-visual
      img.logo(src="/imgs/logo.png" alt="logo")
      h1.title
        | 環境デザイン研究室
      p.subtitle
        | Information Design Laborayory

    section.about
      .container
        p
          | 昭和女子大学 情報デザイン研究室では主に、
          br
          | Webサイトの企画・作成を行います。
        p
          | 本業がWebクリエオターを中心に実際の現場と同じような進行とクリエイティビティを目指します。
        p
          | 第一線で活躍するプロのデザイナー、
          br
          | エンジニアを交えて「プロクオリティ」を前提とします。

    section.teams
      .bg
        .catch
          img.img(src="/imgs/mone.png" alt="mone")
      .head
        h3.title
          img(src="/imgs/Team.png" alt="Team")

      .body
        .group
          h4.title Director
          .content
            p
              | 主に企画・ミーティング運営、
              br
              | スケジュール管理、
              br
              | プロジェクト全体の進行・管理を行います。
            img(src="https://placehold.jp/250x150.png")
        .group
          h4.title Designer
          .content
            img(src="https://placehold.jp/250x150.png")
            p.subtitle
              | Webサイトのデザインや、ロゴの作成などを行います。
              br
              | Photoshopなどを用いてデザインを作成します。
        .group
          h4.title Engineer
          .content
            p.subtitle
              | 主にWebサイトの設計やプログラミングを行います。
            img(src="https://placehold.jp/250x150.png")

      .foot
        .container
          p
            | このコミュニティは枠にとらわれない自由な場です。
            br
            | 学生と変なおじさんでできた、
          p
            | ゆるいけど実際の現場と同じような進行方法で進んでいく集まりです。
            br
            | コンセプトはありません。

    section.producer
      .container
        h3.title
          img(src="/imgs/Producer.png" alt="Producer")
        p.profile
          | 千歳 慎
          br
          | Interactive Designer
          br
          | 環境デザイン学科 非常勤講師

        .submit
          a.button(href="#")
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
  .lab {
    /**
    */
    .main-visual {
      background-color: $color-blue;
      height: 100vh;
      display: flex;
      flex-direction: column;

      .logo {
        margin: auto;
        width: 25%;
        height: auto;
      }

      .title {
        font-size: 25px;
        font-weight: normal;
        text-align: center;
        line-height: 1.2;
        color: $color-white;
      }

      .subtitle {
        color: white;
        font-size: 14px;
        text-align: center;
        line-height: 1;
        margin-bottom: 0;
      }
    }

    /**

   */
    .about {
      .container {
      }

      p {
        font-size: 14px;
        margin-bottom: 2.5rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    /**

   */
    .teams {
      padding-top: 0;
      padding-bottom: 0;

      .bg {
        position: sticky;
        top: 0;
        height: 0;
        z-index: -1;

        .catch {
          width: 100vw;
          height: 100vh;

          .img {
            object-fit: cover;
            object-position: center center;
            width: 100%;
            height: 100%;
          }
        }
      }

      .head {
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0)
        );
        height: 5rem;

        .title {
          text-align: center;

          img {
            width: 164px;
            height: auto;
          }
        }
      }

      .body {
        padding-left: 1.5rem;
        padding-right: 1.5rem;

        .group {
          padding-top: 1rem;
          padding-right: 0.5rem;
          padding-left: 0.5rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
          background-color: $color-white;

          .title {
            font-size: 20px;
            text-align: center;
            margin-bottom: 1rem;
          }

          .content {
            display: flex;
            justify-content: space-between;

            img {
              width: 100px;
              height: 100px;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
              margin-bottom: 1rem;
            }

            p {
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
          }
        }
      }

      .foot {
        background-color: white;
        padding-top: 5rem;

        p {
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    /**
  
   */
    .producer {
      background-color: white;

      .title {
        margin-top: 0;
        text-align: center;
        margin-bottom: 2.5rem;

        img {
          width: 270px;
          height: 80px;
        }
      }

      .profile {
        text-align: center;
      }

      .submit {
        margin-top: 4rem;
        text-align: center;
      }
    }
  }
</style>
