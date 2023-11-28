import { defineNuxtPlugin } from '#app'
import VueLazyload from 'vue-lazyload'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 1.3,
    // error: 'dist/error.png',
    // loading: '/assets/loading.svg',
    attempt: 1,
    // silent: false,
  })
})
