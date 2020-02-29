export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'swu-id-lab_2020-lp',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/common.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/Modules.ts',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ['@nuxt/typescript-build'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-tag-manager', {id: 'GTM-P69XCM6'}],
  ],
  styleResources: {
    scss: [
      '~/assets/style/_utils/_index.scss',
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", {legacy: true}],
        ["@babel/plugin-proposal-class-properties", {loose: true}]
      ]
    }
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  }
}
