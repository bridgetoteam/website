<template>
  <PageSection class="section" id="top">
    <div class="introtext">
      <template v-if="locale === 'ja'">
        <h1></h1>
        <h2 class="ja">
          Bridge
          Toは、建築・まちづくり・デザイン・アートなどに関わる実践者のための複合スペース
          & プラットフォームです。
        </h2>
      </template>
      <template v-else>
        <h1>A place for urbanists.</h1>
        <h2>Bridge To Kyoto is an urban library and event space for cities.</h2>
      </template>
    </div>
    <img
      class="bgillustration"
      src="/assets/img/2024/20231202_kyoto_258_4000.jpg"
    />
    <img
      v-if="!state.mobile.value"
      class="downarrow"
      src="~/assets/img/down_arrow.svg"
      @click="scrollDown"
    />
  </PageSection>
</template>

<script setup lang="ts">
import * as state from "~/assets/state";
const i18n = useI18n();
const locale = i18n.locale;

function scrollDown() {
  document.getElementById("about")?.scrollIntoView(true);
}
</script>

<style lang="scss" scoped>
.section {
  min-height: 115vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  background: white;

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
  transition: all 0.2s;
  background: rgba(white, 0.2);

  &:hover {
    background: rgba(white, 0.5);
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
}
</style>
