<template lang="pug">
  .dp
    section.main-section
      .container
        .headline
          h2.title
            img(src="../static/imgs/DP.png")

          p.sub-title
            | 第28回 秋桜祭
            br
            | Web Site Project.

        p.lead
          | 本年度DPでは2020年度 秋桜祭の
          br
          | Webサイト制作を行います。
        p
          | 企画からデザイン、コンテンツ制作、広報まで
          br
          | 学生を中心に計画・実施します.

        .visual
          img(src="https://placehold.jp/150x150.png")

        .message
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
      img(src="../static/imgs/dp-insert.png")

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
    background-color: $color-red;
    color: $color-white;

    .main-section {
      text-align: center;

      .headline {
        .title {

        }

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

    .insert {
      img {
        width: 100%;
        height: auto;
      }
    }

    .info {
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
