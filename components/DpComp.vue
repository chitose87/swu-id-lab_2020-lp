<template lang="pug">
  .dp
    .container

      section.dp-main-section
        .dp-main-title
          img(src="../static/imgs/DP.png")

        p.dp-main-header
          | 第28回 秋桜祭
          br
          | Web Site Project.

        p.dp-main-text
          | 本年度DPでは2020年度 秋桜祭の
          br
          | Webサイト制作を行います。
        p
          | 企画からデザイン、コンテンツ制作、広報まで
          br
          | 学生を中心に計画・実施します.

        .dp-main-visual
          img(src="https://placehold.jp/150x150.png")

      section.dp-sub-section
        p.dp-sub-text
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

      section.dp-insert-section
        .dp-insert-visual
          img(src="../static/imgs/dp-insert.png")

      section.dp-date-section
        p.dp-date-title
          | 日程・期間

        p.dp-date-text
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
  export default class DpComp extends Vue {
  }
</script>

<style lang="scss">
  .dp {
    background-color: #d84d4d;

    .container {
      section {
        margin: 1rem 0;
      }

      .dp-main-section {
        text-align: center;

        .dp-main-header {
          font-size: 24px;
        }

        .dp-main-visual {
          text-align: center;

          img {
            object-fit: cover;
            width: 100%;
            height: 10rem;
          }
        }
      }

      .dp-insert-section {
        margin: 2.5rem 0;

        .dp-insert-visual {
          width: 100vw;
          position: relative;
          left: 50%;
          transform: translateX(-50%);

          img {
            margin: 0 auto;
            object-fit: cover;
            width: 100%;
          }
        }
      }

      .dp-date-section {
        .dp-date-title {
          font-size: 24px;
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
    }
  }

  @media screen and (min-width: 769px) {
  }
</style>
