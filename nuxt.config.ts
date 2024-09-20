export default defineNuxtConfig({
  telemetry: false,
  ssr: false,

  app: {
    head: {
      title: `Bridge To`,

      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          property: 'og:title',
          hid: `og:title`,
          content: 'Bridge To',
        },
        {
          property: 'og:description',
          hid: `og:description`,
          content:
            'A historical studio, gallery, and event space for critical making in Kyoto, Japan',
        },
        {
          hid: `og:type`,
          property: 'og:type',
          content: 'website',
        },
        {
          hid: `og:site_name`,
          property: 'og:site_name',
          content: 'Bridge To',
        },
        {
          hid: `og:image`,
          property: 'og:image',
          content: `https://www.brdg.to/img/2024/20231202_kyoto_258_4000.jpg`,
        },
        {
          property: 'twitter:title',
          hid: `twitter:title`,
          content: 'Bridge To',
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: `https://www.brdg.to/`,
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },

  css: ['~/assets/css/global.scss'],

  modules: ['@nuxtjs/i18n'],

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
  },
})
