<template lang="pug">
  .dp
    section.main-section
      .container
        .headline
          h2.title
            img(src="~/assets/imgs/title-dp.svg")

          p.sub-title
            | 第28回 秋桜祭
            |
            br.isSp
            | Web Site Project.
        .lead
          p
            | 本年度のDPでは2020年度 秋桜祭の
            br.isSp
            | Webサイト制作を行います。
            br
            | 企画からデザイン、コンテンツ制作、広報まで
            br.isSp
            | 学生を中心に計画・実施します.

    section.contents
      .bg
        .catch
          img.img(src="~/assets/imgs/dp-bg.jpg" alt="dp")
      .head
        .container
          h3.title
            img(src="~/assets/imgs/title-contents.svg" alt="Team")

          p.lead
            | 現時点では、学生を中心に
            | 主に3つのコンテンツを計画しています。

      .body
        .container
          .group.web
            h4.title Web Site
            .media
              h5.title Media
              .content
                p
                  | 事前PRや記事の更新など
                  br
                  | 大学外部・内部へ向けた
                  br
                  | 広報活動主に企画・ミーティング運営、

            .tools
              h5.title Tools
              .content
                p
                  | マップやタイムスケジュールなど
                  br
                  | 当日の参加者向けの機能計画。

          .group.cafe
            h4.title Cafe
            .content
              p
                | 秋桜祭当日のCafeの運営、展示の運営。

    section.joinus
      .container
        h2.title
          img(src="~/assets/imgs/title-joinus.svg")
        p
          | 自分の好きなことが活かせそう…!」という人と
          br
          | Labの場を作り上げていきたいです。
          br
          | 例えば、写真を撮るのが好きなら
          br
          | Webサイトの素材撮影に活かせます。
        p
          | モデルになりたいなら、素材の被写体に。
          br
          | 文章を書くのが好きなら、ライターに。
        p
          | ただ、自分のやりたいことをプロクオリティまで
          br
          | 持っていくことは簡単ではありません。
          br
          | 単位だけを目的としてだったり、
          br
          | 誰かに「やらされている」感覚で参加すると
          br
          | きつい部分も出てきてしまうかもしれません。
        p
          | Labをうまく進めていくために
          br
          | 主体性を持ったマインドで参加してもらえれば、
          br
          | よりいいコミュニティになると思います。

    .insert
      .container
        img(src="~/assets/imgs/dp-insert.jpg")

    section.info
      .container
        h3.title
          | 日程・期間

        .text
          p
            | 4月～秋桜祭のレポートをアップするまで
          p
            | 初回ミーティングは、
            br
            | 4/25 14:00
            br
            | 6号館2階 2L02教室で行います。
          p
            | 連絡先
            br
            | Mail：chitose87@gmail.com

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
  export default class DpComp extends Vue {
  }
</script>

<style lang="scss">
  .dp {
    .title {
      img {
        filter: invert(1);
      }
    }

    .main-section {
      background-color: $color-red;
      color: $color-white;
      text-align: center;

      .headline {

        .sub-title {
          font-size: 24px;
        }
      }

      .visual {
        margin-bottom: 1rem;

        img {
          width: 100%;
          height: auto;
        }
      }

      .message {

      }
    }

    .contents {
      padding-top: 0;
      padding-bottom: 0;

      .bg {
        position: sticky;
        top: 0;
        z-index: -1;
        height: 0;

        .catch {
          .img {
            object-fit: cover;
            object-position: 30% 82%;
            width: 100%;
            height: 100%;
          }
        }

        @include mediaquery-not-sm {
          .catch {
            width: 100%;
            height: 600px;
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
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.3) 70%,
            rgba(0, 0, 0, 0) 100%
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
        }

        .lead {
          color: $color-white;
          text-align: center;
          margin-top: 1.5rem;
          margin-bottom: 0;
          text-shadow: $shadow-text-black;
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
          }
          @include mediaquery-sm {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        .web {
          display: flex;
          flex-wrap: wrap;
          @include mediaquery-not-sm {
            flex: 2;
            margin-right: 1rem;
          }

          .title {
            width: 100%;
          }

          .media, .tools {
            flex: 1 0 50%;
            margin-bottom: 1rem;

            .title {
              margin-top: 0;
            }
          }

          .media {
            border-right: 1px solid $color-border;
            padding-right: 1rem;
          }

          .tools {
            padding-left: 1rem;
          }
        }

        .cafe {
          @include mediaquery-not-sm {
            flex: 1;
            margin-left: 1rem;
          }
        }

        .group {
          background-color: $color-white;
          box-shadow: $shadow;
          border-radius: 16px;

          @include mediaquery-not-sm {
            /*flex-grow: 0;*/
            /*flex-shrink: 0;*/
            /*flex-basis: calc((100% - 3rem) / 3);*/
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
        }
      }
    }

    /**

     */
    .joinus {
      background-color: $color-red;
      color: $color-white;
    }

    .insert {
      background-color: $color-red;
      @include mediaquery-sm {
        .container{
          padding: 0;
        }
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    .info {
      background-color: $color-red;
      color: $color-white;

      .title {
        font-size: 24px;
      }

      .submit {
        margin-top: 2.5rem;
        text-align: center;
      }
    }
  }

  @media screen and (min-width: 769px) {
  }
</style>
