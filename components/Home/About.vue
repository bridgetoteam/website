<template>
  <section class="about">
    <div class="textbox" id="about">
      <div class="hasBg">
        <div class="bg"></div>

        <template v-if="locale === 'ja'">
          <p>
            京都・左京区に位置するBridge
            Toは、建築・まちづくり・デザイン・アートなどに関わる実践者のための複合スペース
            &
            プラットフォームです。国内外のアーティストが滞在できるレジデンスや、シェアアトリエ、イベントスペース、建築・都市・まちづくり関係の蔵書やアイテムを公開する私設ライブラリーほか、文化芸術事業の企画運営・展覧会の企画やキュレーションなども行なっています。現在、「Bridge
            Studio」「Bridge
            Office」の2拠点を運営しています。
          </p>
        </template>

        <template v-else>
          <p>
            Located in Sakyo-ku, Kyoto, Bridge To is a space
            for practitioners involved in architecture,
            urban development, design, art, and beyond. We
            offer residencies for artists from Japan and
            abroad, a shared atelier, an event space, and a
            private library of books and items related to
            architecture, urban planning, and city planning.
            We also plan, manage, and host cultural and
            artistic projects, organize and curate
            exhibitions, and more. Our two active locations
            are
            <b>Bridge Studio</b> and <b>Bridge Office</b>.
          </p>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  position: relative;
  height: 0;
  // height: 200px;
  padding: 0;
  z-index: 2;

  @media (max-width: 768px) {
    height: auto;
  }
}

.textbox {
  width: 800px;
  max-width: 90%;
  padding: 0;
  position: absolute;
  right: 0;

  .hasBg {
    margin-top: 10vh;
    position: relative;
    font-size: 1.5em;
    padding: 5vh 3em;
    // background: var(--base-d2);
    color: var(--base-l);

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--base-d2);
      opacity: 0.9;
      z-index: -1;
    }

    @media (max-height: 900px) {
      font-size: 1.3em;
    }

    @media (max-width: 768px) {
      margin-top: 0;
      font-size: 1.1em;
      padding: 3em 15%;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    position: relative;
  }
}
</style>
