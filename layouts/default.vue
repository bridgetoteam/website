<template>
  <div>
    <Menu />
    <nuxt />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
export default {
  components: { Menu },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return { ...i18nSeo }
  },
}
</script>

<style lang="sass"></style>
