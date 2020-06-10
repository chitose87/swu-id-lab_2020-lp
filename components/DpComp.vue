<template lang="pug">
  section.dp
    .container
      h3.title
        img(src="/imgs/title-dp.svg")
        p
          | DP生参加募集
      .main
        p
          | 2020年度DP枠でも募集してます。
          br
          | 主に、2020PROJECT FESについての活動を
          br
          | 予定しています。
        p
          | ※DP単位取得には2021年4月までに、
          br
          | 15回以上のMTG出席が必要です。
        p
          | 担当教授
          br
          | 環境デザイン　藤澤忠盛
        .avatar
          img(src="/imgs/img.png" alt="img")
        p
          | 連絡先
          br
          | Mail:chitose87@gmail.com
      .submit
        a.button(href="#",target="_blank")
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
