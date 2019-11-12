<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return { ...i18nSeo }
  },
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Bitter&display=swap')

html
  font-family: 'Bitter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased

*,
*:before,
*:after
  box-sizing: border-box
  margin: 0
</style>
