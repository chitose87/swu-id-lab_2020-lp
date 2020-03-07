<template>
  <div>
    <div>
      <h1>ヤバイホームページ屋さん</h1>
    </div>
    <div class="main-visual">
      <img src="https://placehold.jp/150x150.png" />
    </div>
    <div>
      <h2>お知らせ</h2>

      <ul class="list-info">
        <li>
          <div class="body">
            <p>
              <a href="#" class="news">2019/04/01 プレスリリース 新サービス発表会について</a>
            </p>
          </div>
        </li>
        <li>
          <div class="body">
            <p>
              <a href="#" class="news">2019/04/01 メディア掲載 〇〇新聞に掲載されました</a>
            </p>
          </div>
        </li>
        <li>
          <div class="body">
            <p>
              <a href="#" class="news">2019/04/01 採用情報 2020年度新卒採用を開始いたします</a>
            </p>
          </div>
        </li>
      </ul>

      <p>
        <a href="#" class="info-more">もっと見る</a>
      </p>
    </div>

    <div>
      <ul class="list-link">
        <li class="body">
          <div class="inner">
            <p class="linkp1">
              <a href="#" class="link1">
                エンジニア
                <br />急募
              </a>
            </p>
          </div>
        </li>
        <li class="body">
          <div class="inner">
            <p class="linkp2">
              <a href="#" class="link2">
                ヤバイ会計ソフト
                <br />「YABEEE」
              </a>
            </p>
          </div>
        </li>
        <li class="body">
          <div class="inner">
            <p class="linkp3">
              <a href="#" class="link3">
                広報ブログは
                <br />こちら
              </a>
            </p>
          </div>
        </li>
      </ul>
    </div>
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
.list-link {
  display: flex;
  background-size: cover;
  .body {
    display: flex;
    flex-basis: 15rem;
    height: 10rem;
    margin: 1rem 1rem;

    .inner {
      width: 100%;
      p {
        display: flex;
        text-align: center;
        justify-content: space-around;
        flex-direction: column;
        height: 100%;
        margin-bottom: 0;
        a {
          font-size: 1.3rem;
          line-height: 2rem;
        }
      }
    }

    .linkp1 {
      background-image: url("https://placehold.jp/150x150.png");
    }
    .linkp2 {
      background-image: url("https://placehold.jp/150x150.png");
    }
    .linkp3 {
      background-image: url("https://placehold.jp/150x150.png");
    }
  }
}
.content {
  main {
  }

  article {
  }
}
</style>
