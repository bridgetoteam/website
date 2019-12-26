export default {
  mode: 'spa',

  head: {
    titleTemplate(titleChunk) {
      return `Bridge To` + (titleChunk ? ' ' + titleChunk : '')
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `A creative residency for urbanists. Open for applications!`,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `A creative residency for urbanists. Open for applications!`,
      },
      { hid: `og:type`, property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Bridge To' },
      {
        hid: `og:image`,
        property: 'og:image',
        content: `https://www.brdg.to/assets/img/sitethumbnail.png`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: { color: '#fff' },

  css: ['~/assets/css/global'],

  plugins: ['~/plugins/lazyLoad'],

  buildModules: [],

  modules: ['@nuxtjs/axios', 'nuxt-i18n'],

  axios: {},

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        name: '日本語',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    vuex: {
      syncLocale: true,
    },
  },

  build: {
    extend(config, ctx) {},
  },
}
