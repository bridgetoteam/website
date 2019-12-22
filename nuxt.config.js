export default {
  mode: 'spa',

  head: {
    title: `Bridge To`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        // todo
        hid: 'description',
        name: 'description',
        content: ``,
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
      messages: {
        en: {
          welcome: 'Welcome',
        },
        ja: {
          welcome: 'ようこそ',
        },
      },
    },
    vuex: {
      syncLocale: true,
    },
  },

  build: {
    extend(config, ctx) {},
  },
}
