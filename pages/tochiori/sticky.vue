<template lang="pug">
  div
    .area.areaA
      .sticky
        h3 .areaA .sticky
    .area.areaB
      .sticky
        h3 .areaB .sticky
      .area.areaB1
        .sticky
          h3 .areaB .areaB1 .sticky
      .area.areaB2
        .sticky
          h3 .areaB .areaB2 .sticky

    .area.areaC
      .sticky
        h3 .areaC .sticky


</template>

<script lang="ts">
  import {Component} from "~/node_modules/vue-property-decorator";
  import {Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    components: {}
  })
  export default class Hoge extends Vue {
  }
</script>

<style lang="scss">
  .area {
    min-height: 80vh;
    padding-left: 10%;
    padding-right: 10%;
  }

  .sticky {
    position: sticky;
    top: 0;

    // 見た目
    height: 20vh;
    color: $color-white;
    border: 2px solid $color-white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // 見た目
  .areaA {
    background-color: $color-red;
  }

  .areaB {
    background-color: $color-green;

    .areaB1 {
      background-color: rgba($color-black, 0.1);
      .sticky{
        height: 10vh;
      }
    }

    .areaB2 {
      .sticky{
        height: 10vh;
      }
    }
  }

  .areaC {
    background-color: $color-blue;
    min-height: 120vh;
  }

</style>
