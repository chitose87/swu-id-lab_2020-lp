<template lang="pug">
  div
    LabComp
    DpComp

    footer
      .container
        small ©昭和女子大学 情報デザイン研究室

</template>

<script lang="ts">
  import {Component} from "~/node_modules/vue-property-decorator";
  import {Vue} from "~/node_modules/nuxt-property-decorator";
  import LabComp from "~/components/LabComp.vue";
  import DpComp from "~/components/DpComp.vue";

  @Component({
    components: {DpComp, LabComp}
  })
  export default class TopPageComp extends Vue {
  }
</script>

<style lang="scss">
  section {
    @include mediaquery-not-sm {
      padding-top: 7rem;
      padding-bottom: 7rem;
    }
    @include mediaquery-sm {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }

  .button {
    display: inline-flex;
    width: 220px;
    height: 44px;
    color: $color-white;
    background-color: $color-blue;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  footer {
    background-color: $color-black;
    color: $color-white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
</style>
