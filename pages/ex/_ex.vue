<template>
  <Exhibition class="exholder" v-bind="data" />
</template>

<script>
import Exhibition from '~/components/exhibition/Exhibition'

export default {
  layout: 'exhibition',
  async asyncData({ route }) {
    const exhibitionSlug = route.path.substring(route.path.lastIndexOf('/') + 1)
    const pathBase = '/exhibitions/'
    const data = await fetch(
      `${pathBase}${exhibitionSlug}/data.json`,
    ).then(res => res.json())
    return { data: { ...data, slug: exhibitionSlug, pathBase } }
  },
  head() {
    return {
      title: 'Kyoto',
      meta: [
        { property: 'og:title', hid: `og:title`, content: 'Bridge To Kyoto' },
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
    }
  },
  components: { Exhibition },
}
</script>

<style lang="scss">
.exholder {
  width: 100%;
  height: 100%;

  p {
    margin-bottom: 1.5em;
  }
}
</style>
