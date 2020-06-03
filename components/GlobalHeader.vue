<template lang="pug">
  header.global-header
    .container
      p ぐろーばるへっだー

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
    position: fixed;
    top: 0;
    left: 0;
    z-index: $zindex-on;

    width: 100%;
    height: 3rem;
    background-color: red;
  }
</style>
