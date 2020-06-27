<template lang="pug">
<!--
  section.dp#dp
    .container
      h3.title
        img(src="/imgs/title-dp.svg")
        p
          | DP生参加募集
      .main
        p
          | 2020年度DP枠でも募集してます。
          br
          | 主に、2020PROJECT FESについての活動を予定しています。
        p
          | ※DP単位取得には2021年4月までに、15回以上のMTG出席が必要です。

        p
          | 毎週 下記日程で進行中。どちらも自由参加。（現在はオンラインで開催しています。）
          br
          | 水曜日14:40～　定例MTG
          br
          | 土曜日15:00～　作業日

        p
          | 担当教授
          br
          | 環境デザイン　藤澤忠盛
        //.avatar
          img(src="/imgs/img.png" alt="img")
        p
          | 連絡先:千歳 慎
          br
          | Mail:chitose87@gmail.com
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
    background-color: #d84d4d;

    color: $color-white;

    .title {
      text-align: center;

      img {
        filter: invert(1);
      }

      p {
        font-size: 20px;
        @include font-weight-normal;
      }
    }

    .main {
      p {
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
      }

      .avatar {
        text-align: center;
      }
    }

    .submit {
      text-align: center;
    }
  }
</style>
