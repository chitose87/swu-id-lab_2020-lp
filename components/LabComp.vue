<template lang="pug">
  .lab
    section.main-visual
      img.logo(src="/imgs/logo.svg" alt="logo")
      h1.title
        img(src="/imgs/logo-jp.svg" alt="情報デザイン研究室/Information Design Laborayory")

    section.about#about
      .container
        p
          | 情報デザイン研究室では主に、
          br
          | Webサイトの企画・作成を行います。
        p
          | 本業がWebクリエイターの千歳を中心に
          br
          | 実際の現場と同じような進行と
          br
          | クリエイティビティを目指します。
        p
          | 第一線で活躍するプロのデザイナー、
          br
          | エンジニアを交えて「プロクオリティ」を
          br
          | 前提とします。
        p
          | ID Labではこのように実践的な活動を通じて
          br
          | 企画からプログラミングまで
          br
          | Web制作のあれこれを学ぶことができます。

    section.teams
      .bg
        .catch
          img.img(src="/imgs/lab-bg.jpg" alt="lab")
      .head
        .title
          img(src="/imgs/title-unit.svg" alt="Unit")

      .body
        .container
          .group.director
            h4.title Director
            .content
              .img
                img(src="/imgs/unit-director.svg")
              p
                | 主に企画・ミーティング運営、
                br
                | スケジュール管理、
                br
                | プロジェクト全体の進行・管理を行います。
          .group.designer
            h4.title Designer
            .content
              .img
                img(src="/imgs/unit-designer.svg")
              p
                | Webサイトのデザインや、ロゴの作成などを行います。
          .group.engineer
            h4.title Engineer
            .content
              .img
                img(src="/imgs/unit-engineer.svg")
              p
                | 主にWebサイトの設計や
                br
                | プログラミングを行います。
          .submit
            a.button(href="/member/",target="_blank")
              | メンバー紹介ページ

    section.community
      .container
        .layout
          .producer
            h3.title
              img(src="/imgs/title-producer.svg" alt="Producer")
            p.profile
              | 千歳 慎
              br
              | Interactive Designer

          .message
            p
              | このコミュニティは枠に囚われない自由な場です。
            p
              | ゆるいけど、実際の現場と同じような進行方法で
              br
              | 進んでいく学生とおじさんの集まりです。
              br
              | 明確なコンセプトはありません。

        .submit
          a.button(href="https://docs.google.com/forms/d/e/1FAIpQLSeVB47nTDmPtdwR8UghT7qzX2V8DleFCO7tdqYp-5n_4j_nqA/viewform?usp=sf_link",target="_blank")
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

      @include mediaquery-not-sm {
        justify-content: center;
        align-items: center;
        padding-bottom: 0;
      }

      .logo {
        height: auto;
        @include mediaquery-not-sm {
          width: 10%;
        }
        @include mediaquery-sm {
          margin: auto;
          width: 25%;
        }
      }

      .title {
        text-align: center;

        img {
          filter: invert(1);
        }

        @include mediaquery-not-sm {
          margin-top: 3rem;
        }
      }

      .subtitle {
        color: white;
        /*font-size: 14px;*/
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
        //font-size: 14px;
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
          .img {
            object-fit: cover;
            object-position: 70% 40%;
            width: 100%;
            height: 100%;
          }
        }

        @include mediaquery-not-sm {
          .catch {
            width: 100%;
            height: 750px;
          }
        }
        @include mediaquery-sm {
          .catch {
            width: 100vw;
            height: 100vh;
          }
        }
      }

      .head {
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0)
        );
        @include mediaquery-not-sm {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
        @include mediaquery-sm {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }

        .title {
          text-align: center;
          margin-bottom: 0;

          img {
            filter: invert(1);
            width: 120px;
            height: auto;
          }
        }
      }

      .body {
        @include mediaquery-not-sm {
          padding-top: 1rem;
          padding-bottom: 7rem;
        }
        @include mediaquery-sm {
          padding-bottom: 5rem;
        }

        .container {
          @include mediaquery-not-sm {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          @include mediaquery-sm {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .submit {
            width: 100%;
            text-align: center;
            margin-top: 3rem;
          }
        }

        .group {
          background-color: $color-white;
          box-shadow: $shadow;
          border-radius: 16px;
          @include mediaquery-not-sm {
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: calc((100% - 3rem) / 3);
            padding-top: 1rem;
            padding-right: 1rem;
            padding-left: 1rem;
          }
          @include mediaquery-sm {
            padding-top: 1rem;
            padding-right: 0.5rem;
            padding-left: 0.5rem;
            margin-top: 1.5rem;
          }

          .title {
            font-size: 20px;
            text-align: center;
            margin-bottom: 1rem;
            @include mediaquery-not-sm {
              margin-top: 1rem;
            }
          }

          .content {
            @include mediaquery-not-sm {
            }
            @include mediaquery-sm {
              display: flex;
              justify-content: space-between;
            }

            .img {
              @include mediaquery-not-sm {
                text-align: center;
                margin-bottom: 1.5rem;
                img {
                  width: 75%;
                  height: auto;
                }
              }
              @include mediaquery-sm {
                margin-top: -50px;
                margin-left: 0.5rem;
                margin-right: 0.5rem;
                display: flex;
                align-items: center;
                min-height: 150px;
                img {
                  width: 100px;
                  height: 100px;
                }
              }
            }

            p {
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
          }

          @include mediaquery-sm {
            &.director,
            &.engineer {
              .content {
                flex-direction: row-reverse;
              }
            }
          }
        }
      }
    }

    /**

     */
    .community {
      background-color: white;

      .container {
        .layout {
          display: flex;
          @include mediaquery-not-sm {
            justify-content: center;
            align-items: flex-start;
          }
          @include mediaquery-sm {
            flex-direction: column-reverse;
          }
        }

        .producer {
          @include mediaquery-sm {
            margin-top: 2.5rem;
          }
          @include mediaquery-not-sm {
            flex: 1;
          }

          .title {
            margin-top: 0;
            text-align: center;
          }

          .profile {
            text-align: center;
          }
        }

        .message {
          @include mediaquery-not-sm {
            flex: 1;
            border-left: 1px solid $color-border;
            margin-left: 2rem;
            padding-top: 1rem;
            padding-left: 2rem;
          }
        }

        .submit {
          margin-top: 4rem;
          text-align: center;
        }
      }
    }
  }
</style>
