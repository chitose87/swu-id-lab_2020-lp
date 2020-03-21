<template>
  <div>
    <header class="header">
      <div class="container">
        <h2>ヤバイホームページ屋さん</h2>
        <div class="hl">
          <a href="#" class="header-link">お知らせ</a>
          <a href="#" class="header-link">企業情報</a>
          <a href="#" class="header-link">事業内容</a>
          <a href="#" class="header-link">採用情報</a>
          <a href="#" class="header-link">お問い合わせ</a>
        </div>
      </div>
    </header>

    <div class="img">
      <img src="https://placehold.jp/250x150.png" />
    </div>

    <section class="news-section">
      <div class="container">
        <h2>お知らせ</h2>
        <div class="inforamation">
          <a href="#">2019/04/01 プレスリリース 新サービス発表会について</a>
          <br />
          <a href="#">2019/04/01 メディア掲載 〇〇新聞に掲載されました</a>
          <br />
          <a href="#">2019/04/01 採用情報 2020年度新卒採用を開始いたします</a>
          <br />
        </div>
        <div class="info">
          <a href="#">もっとみる□</a>
        </div>
      </div>
    </section>

    <section class="link-section">
      <div class="container">
        <div class="nav">
          <img src="https://placehold.jp/250x150.png" />
          <a href="#">
            エンジニア
            <br />急募
          </a>
        </div>
        <div class="nav">
          <img src="https://placehold.jp/250x150.png" />
          <a href="#">
            ヤバイ会計ソフト
            <br />「YABEE」
          </a>
        </div>
        <div class="nav">
          <img src="https://placehold.jp/250x150.png" />
          <a href="#">
            広報ブログは
            <br />こちら
          </a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <div class="image">
          <img src="https://placehold.jp/250x150.png" />
          <img src="https://placehold.jp/250x150.png" />
        </div>
        <a href="#">お知らせ</a>
        <a href="#">企業情報</a>
        <a href="#">事業内容</a>
        <a href="#">採用情報</a>
        <a href="#">お問い合わせ</a>
        <small>©2019ヤバイホームページ屋さん</small>
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
  margin-left: auto;
  margin-right: auto;
}

header {
  .container {
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }
  .hl {
    .header-link {
      color: blue;
      justify-content: space-between;
      text-decoration-line: none;
      padding: 10px;
    }
  }
}

.img {
  img {
    width: 100%;
    height: 400px;
  }
}

.news-section {
  margin-top: 20px;
  margin-bottom: 20px;
  .container {
    padding-top: 30px;
    padding-bottom: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: solid gray thin;

    h2 {
      text-align: center;
    }
    .inforamation {
      padding-top: 20px;
      a {
        color: blue;
        text-decoration-line: none;
      }
    }
    .info {
      text-align: right;
      padding-top: 20px;
      a {
        color: blue;
        text-decoration-line: none;
      }
    }
  }
}

.link-section {
  .container {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-top: 40px;
    margin-bottom: 40px;
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
  display: flex;
  justify-content: space-between;
  .container {
  }
}
</style>