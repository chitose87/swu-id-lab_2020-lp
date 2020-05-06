<template lang="pug">
  div.tochi
    header
      // ヘッダーはここから（後でつくるとよい）

    main
      // ここから
      section.section-name
        .container
          p hogehoge

    footer
      // フッターはここから（後でつくるとよい）

</template>

<script lang="ts">
  import {Component} from "~/node_modules/vue-property-decorator";
  import {Vue} from "~/node_modules/nuxt-property-decorator";

  @Component({
    components: {}
  })
  export default class TochioriPageComp extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p&family=Noto+Sans+JP:wght@400;700&display=swap');

  .tochi {
    font-family: 'M PLUS 1p', sans-serif;

    .font-noto {
      font-family: 'Noto Sans JP', sans-serif;
    }
  }

  .section-name {
  }
</style>
