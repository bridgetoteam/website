export default {
  mode: 'spa',

  head: {
    title: `==Bridge==To==`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: { color: '#fff' },

  plugins: [],

  buildModules: [],

  modules: ['@nuxtjs/axios', 'nuxt-i18n'],

  axios: {},

  i18n: {
    locales: ['en', 'ja'],
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
