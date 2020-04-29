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

  .title {
    img {
      width: auto;
    }

    @include mediaquery-not-sm {
      margin-bottom: 3rem;
      img {
        height: 80px;
      }
    }
    @include mediaquery-sm {
      margin-bottom: 1.5rem;
      img {
        height: 50px;
      }
    }
  }

  .button {
    display: inline-flex;
    color: $color-white;
    background-color: $color-blue;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    @include mediaquery-not-sm {
      width: 20rem;
      height: 3.5rem;
      border-radius: 1rem;
      font-size: 20px;
    }
    @include mediaquery-sm {
      width: 220px;
      height: 44px;
      border-radius: 0.5rem;
    }
  }

  footer {
    background-color: $color-black;
    color: $color-white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
</style>
