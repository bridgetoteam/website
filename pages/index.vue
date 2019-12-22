<template>
  <main>
    <Intro />
    <About />
  </main>
</template>

<script>
import Intro from '~/components/sections/Intro.vue'
import About from '~/components/sections/About.vue'

export default {
  head() {
    return {
      title: 'Kyoto',
      meta: [
        { property: 'og:title', content: 'Bridge To Kyoto' },
        {
          hid: `og:url`,
          property: 'og:url',
          content: `https://www.brdg.to/`,
        },
      ],
    }
  },
  components: {
    Intro,
    About,
  },
}
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
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
