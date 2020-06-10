<template lang="pug">
  section.projects
    .container
      h3.title
        img(src="/imgs/title-project.svg" alt="PROJECTS")

      .project.fes
        .head
          img(src="/imgs/SWUPROJECTFES.png" alt="fes")

        .main
          p
            | SWU PROJECTS FESとは
            br
            | 昭和女子大学生が行うプロジェクトをアピールし、
            br
            | ついでに表彰もしちゃおう！というWebサイトです。
          p
            | この企画の目的は、
            br
            | "発表の場を提供すること"
          p
            | 全ての昭和女子大学生を対象とし、
            br
            | 小さなことでも熱中して取り組んでいる人、
            br
            | 何かに一生懸命取り組んでいる人、
            br
            | 大学内だけでしか共有されていないプロジェクト、
            br
            | 知られてないけど、とっても魅力的なプロジェクトなど
            br
            | 様々な活動を応援します。
          p
            | 学生が主体となって能動的に活動しているものなら、
            br
            | どんなプロジェクトでも参加可能のお祭りです！
          .insert
            img(src="/imgs/festival.png" alt="festival")
          p
            | 私たち学生が発表する機会といえば
            br
            | 大学内での中間発表や、合同講評会、
            br
            | 卒業制作優秀者など、限られた場だけです。
          p
            | SWU PROJECT FESには
            br
            | 大人から見て優秀かどうか、
            br
            | 授業の課題にあっているかどうか、
            br
            | そんな"誰か"からの基準は関係ありません。
        .footer
          a.button(href="#",target="_blank")
            | PROJECT FESサイト
          p
            | Coming Soon

      .project.next
        img(src="/imgs/next.png" alt="next")


</template>

<script lang="ts">
  import {Component} from "~/node_modules/vue-property-decorator";
  import {Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    components: {}
  })
  export default class ProjectsComp extends Vue {
  }
</script>

<style lang="scss">
  .projects {
    background-color: #d84d4d;
    color: white;

    .container {
      /*padding-top: 5rem;*/
      /*padding-bottom: 5rem;*/
      /*padding-left: 0px;*/
      /*padding-right: 0px;*/
    }

    .title {
      text-align: center;
      /*padding-bottom: 1.5rem;*/

      img {
        filter: invert(1);
      }
    }

    .project{
      border-top: 1.5px solid $color-white;
      margin-top: 2rem;
      padding-top: 2rem;
    }

    .fes {
      text-align: center;

      .main {

        p {
          margin-top: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .insert {
          margin-top: 2.5rem;
          margin-bottom: 2.5rem;
          margin-left: -30px;
          margin-right: -30px;
        }
      }

      .footer {
        text-align: center;
      }
    }

    .next {
      text-align: center;
      /*padding: 3rem;*/
      /*background-color: #bef5d4;*/
    }
  }
</style>
