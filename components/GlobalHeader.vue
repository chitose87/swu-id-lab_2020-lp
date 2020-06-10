<template lang="pug">
  header.global-header
    .container
      img.logo(src="/imgs/logo.svg" alt="logo")
      p About
      p PROJECTS
      p JoinUs.
      p DP
      p |Members

</template>

<script lang="ts">
import { Component } from "~/node_modules/vue-property-decorator";
import { Vue } from "~/node_modules/nuxt-property-decorator";

@Component({
  components: {}
})
export default class GlobalHeader extends Vue {}
</script>

<style lang="scss">
.global-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: $zindex-on;

  width: 100%;
  height: 3rem;
  background-color: white;
  .container {
    height: 48px;
    display: flex;
    padding-left: 8px;
    padding-right: 0px;
    p {
      margin: 7px;
      padding-top: 3px;
      color: #707070;
    }
    img {
      width: 37px;
      height: auto;
      padding-right: 5px;
    }
  }
}
</style>
