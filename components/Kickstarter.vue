<template>
  <a
    href="https://www.kickstarter.com/projects/2041013782/renovating-a-historical-kyoto-building-as-an-art-center"
    target="_blank"
    class="ks button"
  >
    <div
      class="invert gapsmall"
      style="background-image: url('/img/ksBg.jpg')"
    >
      <template v-if="locale !== 'ja'"
        >Back this project on</template
      >

      <span
        ><img
          src="/img/social/kickstarter.png"
          alt="Kickstarter"
      /></span>
      <template v-if="locale === 'ja'"
        >でクラウドファンディング中</template
      >
    </div>
  </a>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale
</script>

<style lang="scss" scoped>
.ks {
  text-decoration: none;
  height: 120px;
  line-height: 1;

  div {
    background-size: cover;
    background-blend-mode: overlay;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  img {
    height: 1.1em;
  }
}
</style>
