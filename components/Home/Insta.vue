<template>
  <section class="" id="insta">
    <template v-if="locale === 'ja'"></template>

    <div class="grid">
      <div
        class="img"
        v-lazy:background-image="`/img/insta/insta17.jpg`"
        alt="Photo from the Bridge To Kyoto Instagram"
      ></div>
      <div
        class="img"
        v-lazy:background-image="`/img/insta/insta14.jpg`"
        alt="Photo from the Bridge To Kyoto Instagram"
      ></div>
      <div
        class="img"
        v-lazy:background-image="`/img/insta/insta16.jpg`"
        alt="Photo from the Bridge To Kyoto Instagram"
      ></div>
      <div
        class="img"
        v-lazy:background-image="`/img/insta/insta15.jpg`"
        alt="Photo from the Bridge To Kyoto Instagram"
      ></div>
      <a
        class="button"
        href="https://www.instagram.com/bridgetokyoto/"
        target="_blank"
      >
        <div>More Photos on Instagram →</div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale
</script>

<style lang="scss" scoped>
.section {
  width: 100%;
  overflow-x: hidden;
}
h2 {
  margin-top: 0;
}

.grid {
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr 1fr 230px;
  grid-auto-flow: dense;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;

    // & > *:nth-child(2) {
    //   display: none;
    // }

    a {
      grid-column: 1 / -1;
    }
  }
}

.img {
  width: 100%;
  padding-top: 100%;
  background-size: cover;
  background-position: center center;
}

.button {
  height: 100%;
  width: 230px;

  // div {
  //   background: var(--accent);

  //   &:hover,
  //   &:active {
  //     background: var(--accentl1);
  //   }
  // }

  @media (max-width: 768px) {
    width: 100%;

    div {
      padding: 15px 20px;
    }
  }
}
</style>
