<template>
  <section id="top">
    <div class="introtext">
      <div class="flex">
        <!-- <div class="flexcolumn">
          <div class="logo flexcenter">
            <img src="/img/logos/bridgeTo.svg" />
          </div>
          <div class="minilogos flex">
            <img src="/img/logos/bridgeStudio.svg" />
            <img src="/img/logos/bridgeToKyoto.svg" />
          </div>
        </div> -->
        <div class="rightbox flexverticalcenter">
          <div class="bridgeLogo">
            <img
              src="/img/logos/bridgeToKyotoBridgeOnly.svg"
            />
          </div>
          <div class="bg"></div>
          <h1>
            <span
              >A multifunctional space for critical
              makers.</span
            >
          </h1>
        </div>
      </div>
    </div>
    <img
      v-if="!state.mobile.value"
      class="downarrow"
      src="/img/down_arrow.svg"
      @click="scrollDown"
    />
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

function scrollDown() {
  document.getElementById('about')?.scrollIntoView(true)
}
</script>

<style lang="scss" scoped>
section {
  color: var(--base-l2);
  min-height: 115vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  background-image: url('/img/2024/20231202_kyoto_258_4000.jpg');
  background-size: cover;
  background-position: center center;
  background-blend-mode: normal;
  animation: fadeIn 1s ease-out;

  @media (max-width: 768px) {
    min-height: 80vh;
  }
}
.introtext {
  // width: 580px;
  position: absolute;
  top: 35vh;
  left: 5vw;

  @media (max-width: 768px) {
    top: 25vh;
    margin-right: 1em;

    h1 {
      font-size: 2em;
    }
  }

  img {
    display: block;
    width: 100%;
  }

  .logo {
    width: 24em;
    padding: 4em 5em 3em 5em;
    background: var(--base-d);
  }

  .minilogos {
    width: 24em;
    padding: 2em 3em;
    gap: 3em;
    background: var(--base-d2);
  }

  // span {
  //   padding: calc(max(4px, 0.05em)) 20px
  //     calc(max(3px, 0.05em)) 20px;
  //   box-decoration-break: clone;
  //   background: var(--base);
  // }

  .rightbox {
    max-width: 700px;
    padding: 2em 2em 1em 2em;
    position: relative;
    // box-shadow: inset 0 0 0 6px var(--base-l2);

    .bridgeLogo {
      position: absolute;
      bottom: 100%;
      left: 0;
      background: var(--base-d3);
      padding: 2em 2em;

      img {
        width: 10em;
      }
    }

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--base-d2);
      opacity: 0.7;
      z-index: -1;
    }
  }
}

.ja {
  line-height: 1.5;
}

.downarrow {
  position: absolute;
  top: 80vh;
  left: 85vw;
  transition: all 0.2s ease-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
}

@keyframes fadeIn {
  0% {
    filter: brightness(0);
  }
  100% {
    filter: brightness(1);
  }
}
</style>
