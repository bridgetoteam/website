<template>
  <div>
    <nav class="flexbetween z4">
      <div></div>
      <!-- <Logo class="logo" :collapse="true" /> -->
      <div class="pad">
        <LangPicker />
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

const head: Parameters<typeof useHead>[0] = {
  meta: [
    {
      hid: `content-language`,
      'http-equiv': 'content-language',
      content: locale.value === 'ja' ? 'ja-JP' : 'en-US',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content:
        locale.value === 'ja'
          ? 'アーバニスト, アーティス, 都市, 建築, 京都'
          : 'urbanism, library, japan, urbanist, exhibition, kyoto',
    },
    {
      hid: 'description',
      name: 'description',
      content: `An urban library and event space for cities.`,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `An urban library and event space for cities.`,
    },
  ],
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-112989318-2',
    },
  ],
}
useHead(head)

// window resize watcher
onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
  updateWindowWidth()
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
function updateWindowWidth() {
  state.winSize.value = [
    window.innerWidth,
    window.innerHeight,
  ]
}

// // scroll watcher
// onMounted(() => {
//   window.addEventListener('scroll', updateScroll)
//   updateScroll()
// })
// onBeforeUnmount(() => {
//   window.removeEventListener('scroll', updateScroll)
// })
// function updateScroll() {
//   state.windowScroll.value = window.scrollY
// }

// // mouse watcher
// onMounted(() => {
//   window.addEventListener('mousemove', updateMouse)
//   updateMouse()
// })
// onBeforeUnmount(() => {
//   window.removeEventListener('mousemove', updateMouse)
// })
// function updateMouse(e?: MouseEvent) {
//   if (e) {
//     state.mousePos.value = [e.clientX, e.clientY]
//   } else {
//     state.mousePos.value = [0, 0]
//   }
// }

onMounted(() => {
  if (state.dev.value) return
  // @ts-ignore
  window.dataLayer = window.dataLayer || []
  function gtag() {
    // @ts-ignore
    dataLayer.push(arguments)
  }
  // @ts-ignore
  gtag('js', new Date())
  // @ts-ignore
  gtag('config', 'UA-112989318-2')
})
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0em;
  width: 100%;

  .logo {
    width: 200px;
  }
}
</style>
