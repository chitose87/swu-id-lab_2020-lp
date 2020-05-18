<template lang="pug">
  div.tochi
    header
      // ヘッダーはここから（後でつくるとよい）

    main
      // ここから
      section.main-visual
        img.logo(src="/imgs/logo2.png" alt="logo")
      section.about
        .main
          .img
            img.question(src="/imgs/Question.png" alt="question")
            p
              | SWU ID Labについて
          .container
            p.title
              | Showa Women's University
              br
              | Information Design
              br
              | Labotatory
            p
              | 昭和女子大学情報デザイン研究室のこと。
              br
              | 主に、Webサイトの作成を行います。
            p
              | このコミュニティは枠にとらわれない
              br
              | 自由な場です。学生と変なおじさんでできた、
              br
              | ゆるいけど実際の現場と同じような進行方向で
              br
              | 進んでいく集まりです。
              br
              | コンセプトはありません。
            p
              | 将来的には、プロジェクトとして
              br
              | 外部のクライアントからの
              br
              | 受注も行うつもりです。
      section.activities
        .main
          .img
            img.pc(src="/imgs/activities.png" alt="pc")
            p
              | 活動について
          .container
            .about
              p.title
                | Labとしての活動
              p
                | 本業がWebクリエイターを中心に
                br
                | 実際の現場と同じような進行と
                br
                | クリエイティビティを目指します。
                br
                | 第一線で活躍するプロのデザイナー、
                br
                | エンジニアを支えて
                br
                |「プロクオリティ」を前提とします。
              p
                | プロジェクトの進行方法としては、
                br
                | 主に3つのチームに分かれて進めていきます。
          .box
            .unit.Direction(v-bind:active="isDirection")
              .unit__panel(v-on:click="directionClick()")
                p.unit__name
                  | Direction
                img(src="/imgs/yajirusi.png" alt="yajirusi")
              .unit__detail
                p.
                  主に企画・ミーティング運営、<br>
                  スケジュール管理、<br>
                  プロジェクト全体の<br>
                  進行・管理を行います。


            .Designer
              p.unit__name
                | Designer
              img(src="/imgs/yajirusi.png" alt="yajirusi")
            .Programming
              p.unit__name
                | programming
              img(src="/imgs/yajirusi.png" alt="yajirusi")
            .Chief
              p.unit__name
                | Chief
              img(src="/imgs/yajirusi.png" alt="yajirusi")

          .container
            p.sibtitle
              | DPとしての活動
            .feature
              img.festival(src="/imgs/background.png" alt="festival")
            p
              | 今回のDPではSWU ID Labの一環として
              br
              | 2020年度秋桜祭のWebサイトを作成します。
              br
              | 企画からデザイン、コンテンツ制作、
              br
              | 広報までを学生を主体に計画・実施します。
      section.term
        .main
          .img
            img.term(src="/imgs/term.png" alt="term")
            p
              | 期間について
        .secondary
          p
            | Labとして、1つの目安として
            br
            | 千歳がクビになるまで運営する予定でいます。
            br
            | クビになってもLabが存続できるような体制を
            br
            | これからやっていく中で整えていきます。
          p
            | DPとしては、4月〜秋桜祭のレポートを
            br
            | アップするまでを一区切りと考えています。
          p
            | 初回ミーティングは、
            br
            | ○月○日14時より行います。
      section.apply
        .img
          img.apply(src="/imgs/apply.png" alt="apply")
        p.link
          | https://aaaaaaa.com
        .form
          button
            | 応募する
        .img
          img.contact(src="/imgs/contact.png" alt="contact")
        p
          | chitose87@gmail.com

    footer
      // フッターはここから（後でつくるとよい）

</template>

<script lang="ts">
import { Component } from "~/node_modules/vue-property-decorator";
import { Vue } from "~/node_modules/nuxt-property-decorator";

@Component({
  components: {}
})
export default class TochioriPageComp extends Vue {
  isDirection: boolean = false;

  directionClick() {
    console.log("directionClick");
    this.isDirection = !this.isDirection;
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1p&family=Noto+Sans+JP:wght@400;700&display=swap");

.tochi {
  font-family: "M PLUS 1p", sans-serif;

  .font-noto {
    font-family: "Noto Sans JP", sans-serif;
  }
}

.main-visual {
  background-color: #deacac;
  text-align: center;
  .logo {
    padding-top: 16rem;
    padding-bottom: 18rem;
    width: 4rem;
    height: auto;
  }
}

.about {
  .main {
    padding-top: 127px;
    padding-bottom: 127px;
    .img {
      text-align: center;
      .question {
        width: 6rem;
        height: auto;
        margin: auto;
      }
      p {
        font-size: 15pt;
        font-family: "Noto Sans JP", sans-serif;
        font-weight: bold;
        color: #be5b5b;
        margin: 15px;
      }
    }
    .container {
      .title {
        font-size: 20px;
        font-family: "Noto Sans JP", sans-serif;
        font-weight: bold;
        line-height: 1;
        margin-top: 127px;
        margin-bottom: 60px;
      }
      p {
        margin-top: 60px;
      }
    }
  }
}

.activities {
  // margin-left: 30px;
  background-image: url("/imgs/katudou.png");
  p {
    color: #ffffff;
  }
  .title {
    font-family: "Noto Sans JP", sans-serif;
    font-weight: bold;
    font-size: 27pt;
  }
  .main {
    padding-top: 127px;
    padding-bottom: 127px;
    .img {
      text-align: center;
      .pc {
        width: 100px;
        height: auto;
      }
      p {
        font-family: "Noto Sans JP", sans-serif;
        margin: 15px;
        font-size: 15pt;
        font-weight: bold;
      }
    }
    .container {
      margin-left: 0px;
      padding: 0px;
    }
    .about {
      margin-top: 127px;
      margin-bottom: 127px;
      p {
        margin-top: 60px;
      }
    }
    .box {
      padding-right: 7%;
      .unit__name {
        font-size: 20pt;
        font-weight: bold;
        padding: 0px;
        margin: 0px;
      }
      img {
        margin-top: 0px;
        margin-bottom: 0px;
        padding: 0px;
        width: auto;
        height: 15px;
        margin-right: 20px;
      }
      .Direction {
        // display: flex;
        // justify-content: space-between;
        // padding-top: 150px;
        // padding-bottom: 166px;
        // padding-left: 75px;
        // margin-right: 25px;
        background-color: #7b56a2;
        .unit__panel {
          background-color: #6a4d88;
        }
      }
      .Designer {
        display: flex;
        justify-content: space-between;
        padding-top: 150px;
        padding-bottom: 166px;
        padding-left: 75px;
        margin-right: 25px;
        background-color: #e2c75b;
      }
      .Programming {
        display: flex;
        justify-content: space-between;
        padding-top: 150px;
        padding-bottom: 166px;
        padding-left: 75px;
        margin-right: 25px;
        background-color: #3a7883;
      }
      .Chief {
        display: flex;
        justify-content: space-between;
        padding-top: 150px;
        padding-bottom: 166px;
        padding-left: 75px;
        margin-right: 25px;
        background-color: #a35252;
      }
      //add chitose
      .unit {
        position: relative;
        height: 351px;

        &__panel,
        &__detail {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
        &__panel {
          justify-content: space-between;
          background-color: red;
          z-index: 1;
          padding-left: 75px;

          transition: all 0.4s ease-in-out 0s;
          img {
            transition: all 0.4s ease-in-out 0s;
          }
        }
        &__detail {
          padding-left: 70px;
        }
        //from event
        &[active="true"] {
          .unit__panel {
            transform: translateX(-90%);
            img {
              transform: rotate(180deg);
              margin-right: 10px;
            }
          }
        }
      }
    }
    .sibtitle {
      font-family: "Noto Sans JP", sans-serif;
      font-weight: bold;
      font-size: 20pt;
      padding-top: 127px;
    }
    .feature {
      text-align: center;
      img {
        text-align: center;
        height: 298px;
        padding-top: 60px;
        padding-bottom: 60px;
      }
    }
  }
}

.term {
  margin-left: 30px;
  .main {
    padding-top: 127px;
    padding-bottom: 127px;
    .img {
      text-align: center;
      img {
        margin-left: 0px;
      }
    }
    p {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 15pt;
      color: #be5b5b;
      margin: 15px;
    }
  }
  .secondary {
    padding-top: 127px;
    padding-bottom: 127px;
    p:not(:last-child) {
      padding-bottom: 60px;
      margin-bottom: 0px;
    }
  }
}

.apply {
  padding-top: 127px;
  padding-bottom: 127px;
  background-color: #deacac;
  .img {
    text-align: center;
    img {
      padding: 0px;
    }
  }
  .link {
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: center;
    font-size: 15px;
    color: white;
  }
  .form {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 20px;
    text-align: center;
    padding-bottom: 127px;
  }
  p {
    text-align: center;
    padding-top: 31px;
  }
}
</style>
