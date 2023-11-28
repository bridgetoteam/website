<template>
  <section>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale
</script>

<style lang="scss" scoped>
section {
  position: relative;
}
</style>
