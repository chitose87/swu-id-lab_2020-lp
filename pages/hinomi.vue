<template>
  <div>
    <header>
      <div class="container">
        <h2 class="block">ヤバイホームページ屋さん</h2>
        <div class="hoge">
          <a href="#" class="hedder-link">お知らせ</a>
          <a href="#" class="hedder-link">企業情報</a>
          <a href="#" class="hedder-link">事業内容</a>
          <a href="#" class="hedder-link">採用情報</a>
          <a href="#" class="hedder-link">お問い合わせ</a>
        </div>
      </div>
    </header>

    <div class="img">
      <img src="https://placehold.jp/250x150.png" />
    </div>

    <section class="news-section">
      <div class="container">
        <div class="section">
          <h2>お知らせ</h2>
          <div class="info">
            <a href="#">2019/04/01 プレスリリース 新サービス発表会について</a>
            <br />
            <a href="#">2019/04/01 メディア掲載 〇〇新聞に掲載されました</a>
            <br />
            <a href="#">2019/04/01 採用情報 2020年度新卒採用を開始いたします</a>
          </div>
          <div class="information">
            <a href="#">もっとみる □</a>
          </div>
        </div>
      </div>
    </section>

    <section class="link-section">
      <div class="container">
        <div class="nav">
          <img src="https://placehold.jp/150x150.png" />
          <a href="#">エンジニア急募</a>
        </div>
        <div class="nav">
          <img src="https://placehold.jp/150x150.png" />
          <a href="#">
            ヤバイ会計ソフト
            <br />「YABEE」
          </a>
        </div>
        <div class="nav">
          <img src="https://placehold.jp/150x150.png" />
          <a href="#">
            広報ブログは
            <br />こちら
          </a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="hudder">
          <div class="img2">
            <img src="https://placehold.jp/150x150.png" />
            <img src="https://placehold.jp/150x150.png" />
          </div>
          <div class="info2">
            <a href="#" class="footer-link">お知らせ</a>
            <a href="#" class="footer-link">企業情報</a>
            <a href="#" class="footer-link">事業内容</a>
            <a href="#" class="footer-link">採用情報</a>
            <a href="#" class="footer-link">お問い合わせ</a>
          </div>
        </div>
        <small class="small">©︎2019 ヤバイホームページ屋さん</small>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component } from "~/node_modules/vue-property-decorator";
import { Vue } from "~/node_modules/nuxt-property-decorator";

@Component({
  components: {}
})
export default class TopPageComp extends Vue {}
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

  h2 {
    color: black;
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

  .hedder-link {
    color: blue;
    font-size: 1.1em;
    text-decoration-line: none;
    padding: 10px;
  }
}

.img {
  img {
    width: 100%;
    height: 400px;
  }
}

.news-section {
  padding-top: 30px;
  padding-bottom: 30px;

  .container {
    border-style: solid;
    border-color: gray;
  }
  .section {
    width: auto;
    height: auto;
    padding: 10px;
  }

  h2 {
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
}

.link-section {
  .container {
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
    color: rgb(53, 52, 52);
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
}

.footer {
  border-top: 1px solid gray;
  .hudder {
    display: flex;
    justify-content: space-between;
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
      font-size: 1.1em;
      padding-bottom: 10px;
      display: flex;
      justify-content: space-between;
      .footer-link {
        color: blue;
        text-decoration: none;
        padding: 10px;
      }
    }
  }

  .small {
    display: block;
    color: gray;
    padding-top: 10px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
