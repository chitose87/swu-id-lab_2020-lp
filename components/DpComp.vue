<template lang="pug">
  .dp
    //↓　.containerに置き換えてください
    .dp-inner
      //↓　bodyは不要かも
      .dp-body

        section.dp-main-section
          //↑がsection級　↓はsectionではないです（sectionは入れ子になりません）
          section
            .dp-main-title
              img(src="../static/imgs/DP.png")

          section
            p.dp-main-header
              | 第28回 秋桜祭
              br
              | Web Site Project.

          section
            p.dp-main-text
              | 本年度DPでは2020年度 秋桜祭の
              br
              | Webサイト制作を行います。
              br
              br
              | 企画からデザイン、コンテンツ制作、広報まで
              br
              | 学生を中心に計画・実施します.

          section
            .dp-main-visual
              img(src="https://placehold.jp/150x150.png")

        .dp-sub-section
          //↑がsection級　↓はsectionではないです（sectionは入れ子になりません）
          section
            p.dp-sub-text
              | 自分の好きなことが活かせそう…!」という人と
              br
              | Labの場を作り上げていきたいです。
              br
              | 例えば、写真を撮るのが好きなら
              br
              | Webサイトの素材撮影に活かせます。
              // 段落はpで、連続brは基本的にNGです
              //br
              //br
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

        .dp-insert-visual-body
          //命名としては逆です、visualがあって、中身のbody
          .dp-insert-visual
            img(src="../static/imgs/dp-insert.png")

        .dp-date-section
          //↑がsection級　↓はsectionではないです（sectionは入れ子になりません）
          section
            p.dp-date-title
              | 日程・期間

          section
            p.dp-date-text
              | 4月～秋桜祭のレポートをアップするまで
              br
              br
              | 初回ミーティングは、
              br
              | 4/25 14:00
              br
              | 6号館2階 2L02教室で行います。
              br
              br
              | 連絡先
              br
              | Mail：chitose87@gmail.com

          .dp-button
            | 参加申し込み

</template>

<script lang="ts">
import { Component } from "~/node_modules/vue-property-decorator";
import { Vue } from "~/node_modules/nuxt-property-decorator";

@Component({
  components: {}
})
export default class DpComp extends Vue {}
</script>

<style lang="scss">
.dp {
  background-color: #d84d4d;
  .dp-inner {
    margin: 0 10vw;
    .dp-body {
      margin: 5rem 0;
      color: white;
      section {
        margin: 1rem 0;
      }
      .dp-main-section {
        text-align: center;
        .dp-main-header {
          font-size: 24px;
        }
      }
      .dp-sub-section {
      }
      .dp-insert-visual-body {
        width: 100%;
        margin: 0 -500%;
        padding: 0 500%;
        // padding: 2.5rem 0;
        // width: 100vw;
        // height: 100%;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        .dp-insert-visual {
          object-fit: cover;
          // flex-shrink: 0;
        }
      }
      .dp-date-section {
        .dp-date-title {
          font-size: 24px;
        }
      }
    }
    .dp-footer {
      color: white;
      background-color: black;
    }
  }
}

@media screen and (min-width: 769px) {
}
</style>
