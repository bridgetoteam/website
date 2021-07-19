import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fb5f71f4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _347cff1c = () => interopDefault(import('../pages/ex/_ex.vue' /* webpackChunkName: "pages/ex/_ex" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ja/",
    component: _fb5f71f4,
    name: "index___ja"
  }, {
    path: "/ja/ex/:ex?",
    component: _347cff1c,
    name: "ex-ex___ja"
  }, {
    path: "/ex/:ex?",
    component: _347cff1c,
    name: "ex-ex___en"
  }, {
    path: "/",
    component: _fb5f71f4,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
