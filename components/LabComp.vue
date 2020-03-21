<template lang="pug">
  .lab
    img(src="/imgs/logo.png" alt="alt")

</template>

<script lang="ts">
import { Component } from "~/node_modules/vue-property-decorator";
import { Vue } from "~/node_modules/nuxt-property-decorator";

@Component({
  components: {}
})
export default class LabComp extends Vue {}
</script>

<style lang="scss">
.lab {
}
</style>
