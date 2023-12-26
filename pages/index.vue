<template>
  <main>
    <HomeIntro />
    <HomeAbout />
    <HomeSpace />
    <HomeInsta />
    <HomeApply />
    <HomeResidents />
    <HomeFAQ />
    <HomeMailingList />
    <!-- <HomeTCU /> -->
    <HomeContact />
  </main>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

useHead({
  title: 'Kyoto',
  meta: [
    {
      property: 'og:title',
      hid: `og:title`,
      content: 'Bridge To Kyoto',
    },
    {
      property: 'twitter:title',
      hid: `twitter:title`,
      content: 'Bridge To Kyoto',
    },
    {
      hid: `og:url`,
      property: 'og:url',
      content: `https://www.brdg.to/`,
    },
    {
      hid: `og:site_name`,
      property: 'og:site_name',
      content: 'Bridge To Kyoto',
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn-images.mailchimp.com/embedcode/classic-071822.css',
    },
  ],
  script: [
    {
      src: 'https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js',
      type: 'text/javascript',
    },
  ],
})
</script>

<style lang="scss" scoped>
main {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: var(--accent);
}

.intro {
  width: 580px;
  position: absolute;
  top: 350px;
  left: 5vw;
}

.headline {
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 15px;
}

.subhead {
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1.2;
}

.bgillustration {
  width: 85vw;
  margin-left: 13vw;
  margin-top: 15vh;
}
</style>
