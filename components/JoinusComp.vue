<template lang="pug">
  .joinus
    .container
      img(src="/imgs/Join us..png" alt="joinus")
      p
        | 自分の好きなことを活かせそう...という人と一緒に
        br
        | Labの場を作っていきたいです。
      p
        | 写真が好きならカメラマンに。
        br
        | 文章を書くのが好きならライターに。
        br
        | デザインを考えるのが好きならデザイナーに。
      p
        | 好きなことをプロクオリティに仕上げるのは
        br
        | 簡単なことではありません。
        br
        | 誰かにやらされている感覚、単位のための参加
        br
        | では長続きしません。
      p
        | 主体性を持って参加し、私たちと一緒に
        br
        | ID Labをより良いコミュニティにしていける人を
        br
        | 募集します。
    .submit
        a.button(href="#",target="_blank")
          | メンバー紹介ページ

</template>

<script lang="ts">
import { Component } from "~/node_modules/vue-property-decorator";
import { Vue } from "~/node_modules/nuxt-property-decorator";

@Component({
  components: {}
})
export default class JoinusComp extends Vue {}
</script>

<style lang="scss">
.joinus {
  padding-top: 5rem;
  padding-bottom: 5rem;
  img {
    margin-bottom: 2.5rem;
  }
  p {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .submit {
    text-align: center;
  }
}
</style>
