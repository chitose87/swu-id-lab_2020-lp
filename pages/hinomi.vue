<template>
  <div>
    <header>
      <div class="container">
        <h1 class="block">ヤバイホームページ屋さん</h1>
        <div class="hoge">
          <a href="#" class="hedderlink">お知らせ</a>
          <a href="#" class="hedderlink">企業情報</a>
          <a href="#" class="hedderlink">事業内容</a>
          <a href="#" class="hedderlink">採用情報</a>
          <a href="#" class="hedderlink">お問い合わせ</a>
        </div>
      </div>
    </header>

    <div class="img">
      <img src="https://placehold.jp/250x150.png"/>
    </div>

    <div class="container">
      <div class="container1">
        <div class="section">
          <h1 class="title">お知らせ</h1>
          <div class="info">
            <a href="#">2019/04/01 プレスリリース 新サービス発表会について</a>
            <br/>
            <a href="#">2019/04/01 メディア掲載 〇〇新聞に掲載されました</a>
            <br/>
            <a href="#">2019/04/01 採用情報 2020年度新卒採用を開始いたします</a>
          </div>
          <div class="information">
            <a href="#">もっとみる □</a>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="container">
        <div class="container2">
          <div class="nav">
            <img src="https://placehold.jp/150x150.png"/>
            <a href="#">エンジニア急募</a>
          </div>
          <div class="nav">
            <img src="https://placehold.jp/150x150.png"/>
            <a href="#">
              ヤバイ会計ソフト
              <br/>「YABEE」
            </a>
          </div>
          <div class="nav">
            <img src="https://placehold.jp/150x150.png"/>
            <a href="#">
              広報ブログは
              <br/>こちら
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="container3">
        <div class="hudder">
          <div class="img2">
            <img src="https://placehold.jp/150x150.png"/>
            <img src="https://placehold.jp/150x150.png"/>
          </div>
          <div class="info2">
            <a href="#" class="hedderlink">お知らせ</a>
            <a href="#" class="hedderlink">企業情報</a>
            <a href="#" class="hedderlink">事業内容</a>
            <a href="#" class="hedderlink">採用情報</a>
            <a href="#" class="hedderlink">お問い合わせ</a>
          </div>
        </div>
        <small class="small">©︎2019 ヤバイホームページ屋さん</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component} from "~/node_modules/vue-property-decorator";
  import {Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    components: {}
  })
  export default class TopPageComp extends Vue {
  }
</script>

<style lang="scss">
  .container {
    padding-top: 15pt;
    padding-bottom: 15pt;
    margin-left: auto;
    margin-right: auto;
  }

  header {
    .container {
      display: flex;
      justify-content: space-between;
    }

    h1 {
      color: black;
      font-size: 16px;
    }

    .block {
      display: flex;
      justify-content: start;
    }

    .hoge {
      /*padding-left: 610px;*/
      display: flex;
      justify-content: space-between;
    }

    .hedderlink {
      color: blue;
      font-size: 11px;
      text-decoration-line: none;
    }
  }

  .img {
    img {
      width: 100%;
      height: auto;
    }
  }

  .container1 {
    padding-top: 30px;
    padding-bottom: 30px;
    border-style: solid;
    border-color: grey;
  }

  .section {
    width: auto;
    height: auto;
    padding: 10px;
  }

  .title {
    text-align: center;
  }

  .info {
    text-decoration: none;
    font-size: 1.1em;
    padding-top: 30px;
    padding-left: 30px;
    line-height: 3;
    letter-spacing: 0.1em;

    a {
      color: blue;
      text-decoration: none;
    }
  }

  .information {
    text-align: right;

    a {
      color: blue;
      text-decoration: none;
    }
  }

  .container2 {
    display: flex;
    justify-content: space-between;
  }

  .nav {
    position: relative;
  }

  .nav a {
    white-space: nowrap;
    text-decoration: none;
    position: absolute;
    color: black;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 2em;
  }

  .nav img {
    width: 320px;
    height: 150px;
  }

  .container3 {
    border-top: 1px solid gray;
  }

  .hudder {
    display: flex;
  }

  .img2 {
    display: flex;
    width: 50px;
    height: 50px;
    padding-right: 10px;

    img {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 10px;
      width: 100%;
      height: 100%;
    }
  }

  .info2 {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 690px;
    display: flex;
    justify-content: space-between;
  }

  .hedderlink {
    color: blue;
    text-decoration: none;
  }

  .small {
    color: gray;
    padding-top: 10px;
    padding-left: 400px;
    padding-right: 400px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
