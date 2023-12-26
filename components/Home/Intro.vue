<template>
  <PageSection class="section" id="top">
    <div class="introtext">
      <template v-if="locale === 'ja'">
        <h4>
          <span>Bridge Studio / Bridge To</span>
        </h4>
        <h2 class="ja">
          <span
            >Bridge
            Toは、建築・まちづくり・デザイン・アートなどに関わる実践者のための複合スペース
            & プラットフォームです。</span
          >
        </h2>
      </template>
      <template v-else>
        <h1><span>A place for urbanists.</span></h1>
        <h4><span>Bridge Studio / Bridge To</span></h4>
        <h2>
          <span
            >Bridge To is an urban library and event space
            for cities.</span
          >
        </h2>
      </template>
    </div>
    <img
      v-if="!state.mobile.value"
      class="downarrow"
      src="/img/down_arrow.svg"
      @click="scrollDown"
    />
  </PageSection>
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
.section {
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
    min-height: 650px;
  }
}
.introtext {
  width: 580px;
  position: absolute;
  top: 300px;
  left: 5vw;

  @media (max-width: 768px) {
    width: 90vw;
    top: auto;
    bottom: 15px;
  }

  span {
    padding: calc(max(4px, 0.05em)) 20px
      calc(max(3px, 0.05em)) 20px;
    box-decoration-break: clone;
    background: var(--base);
  }
}

.ja {
  line-height: 1.5;
}

.bgillustration {
  width: 100vw;
  // margin-left: 13vw;
  // margin-top: 3vh;

  @media (max-width: 768px) {
    width: 180vw;
    max-width: 10000%;
    margin-left: -55vw;
    margin-top: -4vh;
    // todo bigger line weight!!!
  }
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
