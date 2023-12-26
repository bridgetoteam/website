<template>
  <svg
    viewBox="0 0 1944 972"
    preserveAspectRatio="xMinYMin"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  ></svg>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

const { collapse } = defineProps({
  collapse: {
    default: false,
  },
})
</script>

<style lang="scss" scoped>
svg {
  background: var(--base-d2);
  transition: all 0.2s ease-out;

  // &:hover {
  //   background: var(--primary);
  // }
}
</style>
