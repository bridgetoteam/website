<template>
  <section class="v3" id="footer">
    <div class="small textcenter padbig">
      Photo credits: Tomohiro Yamatsuki, Murakami Daisuke,
      and Kou Shirayone
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale
</script>

<style lang="scss" scoped>
section {
  padding-bottom: 10vh;
  padding-top: 0;
}
</style>
