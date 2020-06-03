<template lang="pug">
  footer.global-footer
    .container
      small ©昭和女子大学 情報デザイン研究室

</template>

<script lang="ts">
  import {Component} from "~/node_modules/vue-property-decorator";
  import {Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    components: {}
  })
  export default class GlobalFooter extends Vue {
  }
</script>

<style lang="scss">
  .global-footer {
    background-color: $color-black;
    color: $color-white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
</style>
