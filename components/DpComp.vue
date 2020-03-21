<template lang="pug">
  .dp
    p DPについて
</template>

<script lang="ts">
  import {Component} from "~/node_modules/vue-property-decorator";
  import {Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    components: {}
  })
  export default class DpComp extends Vue {
  }
</script>

<style lang="scss">
  .dp {

  }
</style>
