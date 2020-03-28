<template lang="pug">
  div
    LabComp
    DpComp

    footer
      small ©昭和女子大学 情報デザイン研究室


</template>

<script lang="ts">
import { Component } from "~/node_modules/vue-property-decorator";
import { Vue } from "~/node_modules/nuxt-property-decorator";
import LabComp from "~/components/LabComp.vue";
import DpComp from "~/components/DpComp.vue";

@Component({
  components: { DpComp, LabComp }
})
export default class TopPageComp extends Vue {}
</script>

<style lang="scss">
/*.container {*/
/*}*/

/*.img {*/
/*  width: 345px;*/
/*  text-align: center;*/
/*  img {*/
/*    width: 100%;*/
/*  }*/
/*}*/

/*header {*/
/*  .header {*/
/*    border-style: solid;*/
/*    border-color: darkblue;*/
/*    border-width: thin;*/
/*  }*/
/*  .logo {*/
/*    text-align: center;*/
/*    padding-top: 50px;*/
/*    img {*/
/*      width: 55px;*/
/*      height: 55px;*/
/*    }*/
/*  }*/
/*  .title {*/
/*    padding: 10px;*/
/*    text-align: center;*/
/*  }*/
/*  .corner {*/
/*    text-align: right;*/
/*    color: gray;*/
/*    font-weight: 100;*/
/*    font-size: 0.5em;*/
/*    padding-right: 5px;*/
/*  }*/
/*}*/

/*nav {*/
/*  .container {*/
/*    margin-top: 50px;*/
/*  }*/
/*  h2 {*/
/*    font-weight: 100;*/
/*  }*/
/*  .img {*/
/*    padding-top: 20px;*/
/*    padding-bottom: 10px;*/
/*  }*/
/*  .discription {*/
/*    padding-bottom: 30px;*/
/*  }*/
/*  .detail {*/
/*    padding-top: 20px;*/
/*    padding-bottom: 20px;*/
/*  }*/
/*}*/

/*section {*/
/*  h1 {*/
/*    font-weight: 100;*/
/*  }*/
/*  h2 {*/
/*    font-weight: 100;*/
/*    padding-top: 30px;*/
/*    padding-bottom: 10px;*/
/*  }*/
/*  .detail {*/
/*    padding-top: 20px;*/
/*  }*/
/*  .img {*/
/*    padding-top: 20px;*/
/*    padding-bottom: 20px;*/
/*  }*/
/*  .caption {*/
/*    padding-top: 40px;*/
/*    padding-bottom: 20px;*/
/*  }*/
/*  .column {*/
/*    padding-top: 10px;*/
/*    padding-bottom: 10px;*/
/*  }*/
/*}*/

/*aside {*/
/*  .profile {*/
/*    display: flex;*/
/*    justify-content: space-between;*/
/*    .icon {*/
/*      width: 100px;*/
/*      height: 100px;*/
/*      img {*/
/*        width: 100%;*/
/*        height: 100%;*/
/*      }*/
/*    }*/
/*    .explanation {*/
/*      text-align: right;*/
/*      padding-right: 40px;*/
/*      h3 {*/
/*        font-weight: 100;*/
/*        padding-bottom: 5px;*/
/*      }*/
/*    }*/
/*  }*/
/*  .comment {*/
/*    width: 345px;*/
/*    background-color: lightgray;*/
/*    border: solid gray thin;*/
/*    margin-top: 20px;*/
/*    padding: 2px;*/
/*    h4 {*/
/*      font-weight: 100;*/
/*      padding-bottom: 5px;*/
/*    }*/
/*    .caption {*/
/*      padding-top: 20px;*/
/*      padding-bottom: 5px;*/
/*    }*/
/*  }*/
/*  h2 {*/
/*    padding-top: 20px;*/
/*    padding-bottom: 5px;*/
/*  }*/
/*  .caption {*/
/*    padding-top: 20px;*/
/*    padding-bottom: 20px;*/
/*  }*/
/*}*/

/*footer {*/
/*  .adress {*/
/*    padding-top: 60px;*/
/*    padding-bottom: 20px;*/
/*    text-align: center;*/
/*  }*/
/*  .form {*/
/*    text-align: center;*/
/*  }*/
/*  .button {*/
/*    margin: 20px;*/
/*    text-align: center;*/
/*  }*/
/*}*/
</style>
