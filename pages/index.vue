<template lang="pug">
  div
    GlobalHeader
    main
      LabComp
      ProjectsComp
      JoinusComp
      DpComp
      AnotherComp

    GlobalFooter

</template>

<script lang="ts">
import { Component } from "~/node_modules/vue-property-decorator";
import { Vue } from "~/node_modules/nuxt-property-decorator";
import LabComp from "~/components/LabComp.vue";
import DpComp from "~/components/DpComp.vue";
import GlobalHeader from "~/components/GlobalHeader.vue";
import GlobalFooter from "~/components/GlobalFooter.vue";
import ProjectsComp from "~/components/ProjectsComp.vue";
import JoinusComp from "~/components/JoinusComp.vue";
import AnotherComp from "~/components/AnotherComp.vue";

@Component({
  components: {
    AnotherComp,
    JoinusComp,
    ProjectsComp,
    GlobalFooter,
    GlobalHeader,
    DpComp,
    LabComp
  }
})
export default class TopPageComp extends Vue {}
</script>

<style lang="scss">
</style>
