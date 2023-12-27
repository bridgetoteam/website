<template>
  <div class="logo flexcenter">
    <img src="/img/logos/bridgeTo.svg" />
  </div>
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
.logo {
  padding: 1em 2em;
  background: var(--base-l);

  img {
    width: 10em;
  }
  // transition: all 0.2s ease-out;

  // &:hover {
  //   background: var(--primary);
  // }
}
</style>
