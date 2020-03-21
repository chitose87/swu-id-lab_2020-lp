<template lang="pug">
  div
    .mainvisual
      img.logo(src="/imgs/logo.png" alt="logo")
      p.title
        | 環境デザイン研究室
      p.subtitle
        | Information Design Laborayory

    nav
      .container
        p.discription
          | 昭和女子大学 情報デザイン研究室では主に、
          br
          | Webサイトの企画・作成を行います。
        p.discription
          | 本業がWebクリエオターを中心に実際の現場と同じよ
          br
          | うな進行とクリエイティビティを目指します。
        p.discription
          | 第一線で活躍するプロのデザイナー、
          br
          | エンジニアを交えて「プロクオリティ」を前提としま
          br
          | す。

    section.section
      img.img(src="/imgs/Team.png" alt="team")
      div.group
        p.title Director
        div.content
          p.subtitle 
           | 主に企画・ミーティング運営、
           br
           | スケジュール管理、
           br
           | プロジェクト全体の進行・管理
           br
           | を行います。
          img(src="https://placehold.jp/250x150.png")
      div.group
        p.title Designer
        div.content
          img(src="https://placehold.jp/250x150.png")
          p.subtitle
            | Webサイトのデザインや、ロゴ
            br
            | の作成などを行います。
            br
            | Photoshopなどを用いてデザイ
            br
            | ンを作成します。
          //img(src="https://placehold.jp/250x150.png")  
      div.group
        p.title Engineer
        div.content
          p.subtitle 
            | 主にWebサイトの設計やプログ
            br
            | ラミングを行います。
          img(src="https://placehold.jp/250x150.png")
    
    section.news-section
      .container
        p.discription
         | このコミュニティは枠にとらわれない自由な場です。
         br
         | 学生と変なおじさんでできた、
        p
         | ゆるいけど実際の現場と同じような進行方法で
         br
         | 進んでいく集まりです。
         br
         | コンセプトはありません。
      
    aside
      img(src="/imgs/Producer.png" alt="producer")
      div.profile
        p
          | 千歳 慎
          br
          | Interactive Designer
          br
          | 環境デザイン学科 非常勤講師
        img(src="https://placehold.jp/20x20.png")
      .button 参加申し込み  

</template>

<script lang="ts">
import { Component } from "~/node_modules/vue-property-decorator";
import { Vue } from "~/node_modules/nuxt-property-decorator";

@Component({
  components: {}
})
export default class LabComp extends Vue {}
</script>

<style lang="scss">
.container {
  margin-right: 1rem;
  margin-left: 1rem;
}

.mainvisual {
  background-color: #34b3db;
  max-width: 100%;
  height: 100vh;
  .logo {
    display: block;
    margin: auto;
    padding-top: 15rem;
    padding-bottom: 12rem;
  }
  .title {
    color: white;
    font-size: 25px;
    text-align: center;
    margin-bottom: 0rem;
  }
  .subtitle {
    color: white;
    font-size: 14px;
    text-align: center;
    padding-bottom: 5rem;
    margin-bottom: 0rem;
  }
}

nav {
  .container {
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
  .discription {
    font-size: 14px;
    padding-bottom: 0.05rem;
    margin-bottom: 0rem;
  }
}

.section {
  background-color: #51ff68;
  max-width: 100%;
  height: 790px;
  .img {
    width: 160px;
    height: auto;
    display: block;
    margin: auto;
  }
  .group {
    width: 337px;
    height: 181px;
    margin: 1rem;
    background-color: white;
    .title {
      font-size: 20px;
      margin-bottom: 0rem;
      text-align: center;
    }
    .content {
      display: flex;
      justify-content: space-between;
      margin: 1rem;
      img {
        width: 100px;
        height: 100px;
      }
      .subtitle {
        padding: none;
        margin-bottom: 0rem;
      }
    }
  }
}

.news-section {
  .discription {
    margin-top: 5rem;
    padding-bottom: 1rem;
  }
}

aside {
  margin-left: 1rem;
  margin-right: 1rem;
  img {
    display: block;
    margin: auto;
    width: 280px;
    height: auto;
    margin-top: 5rem;
    margin-bottom: 2.5rem;
  }
  .profile {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
    p {
      line-height: 1.5rem;
      font-size: 14px;
    }
    img {
      margin: 1rem;
      width: 100px;
      height: 65px;
    }
  }
  .button {
    margin-top: 2.5rem;
    margin-bottom: 5rem;
    text-align: center;
  }
}
</style>