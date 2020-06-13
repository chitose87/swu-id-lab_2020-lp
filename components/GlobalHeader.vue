<template lang="pug">
  header.global-header
    .global-header__body.container-fluid
      img.logo(src="/imgs/logo_only.png" alt="logo")
      a.link-item(href="/#about") About
      a.link-item(href="/#project") Projects
      a.link-item(href="/#joinus") JoinUs.
      a.link-item(href="/#dp") DP
      span.link-item |
      a.link-item(href="/member/") Members

</template>

<script lang="ts">
  import {Component} from "~/node_modules/vue-property-decorator";
  import {Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    components: {}
  })
  export default class GlobalHeader extends Vue {
  }
</script>

<style lang="scss">
  .global-header {
    /*position: fixed;*/
    position: sticky;
    top: 0;
    left: 0;
    z-index: $zindex-on;

    width: 100%;
    height: 3rem;
    background-color: white;

    box-shadow: $shadow-text-black;

    &__body {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        margin-right: auto;
      }

      .link-item {
        margin-left: 0.75rem;
        color: #707070;
        text-decoration: none;
        font-size: 15px;
      }

      img {
        margin: 7px;
        width: 26px;
        height: 23px;
        padding-right: 5px;
      }
    }
  }
</style>
