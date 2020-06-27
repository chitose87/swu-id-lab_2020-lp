<template lang="pug">
  footer.global-footer
    .container
      small ©情報デザイン研究室

      a.contact(href="https://docs.google.com/forms/d/e/1FAIpQLSd102iXYOMzaibEIxWWYuy2-Bz3k13xtT9YBHCz_7DMfjyTDQ/viewform?usp=sf_link" traget="_blank")
        | お問い合わせ

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

    .container {
      display: flex;
      justify-content: space-between;
    }

    .contact {
      color: $color-white;
      font-size: 80%;
    }
  }
</style>
