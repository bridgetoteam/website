<template>
  <section class="about">
    <div class="textbox" id="about">
      <div class="hasBg">
        <div class="bg"></div>

        <template v-if="locale === 'ja'">
          <!-- <h1>About</h1> -->
          <p>
            京都・左京区に位置するBridge
            Toは、世界中からアーバニストやアーティストを受け入れ、国内の建築・都市・まちづくり・アート関係者や市民と交流し、コラボレーションが生まれるきっかけをつくる場所です。国内外のアーティストが1〜6ヶ月の中長期で滞在できるレジデンスや、シェアアトリエ、イベントスペース、建築・都市・まちづくり関係の蔵書やアイテムを公開する私設ライブラリーほか、文化芸術事業の企画運営・展覧会の企画やキュレーションなども行なっています。
          </p>
        </template>

        <template v-else>
          <!-- <h1>About</h1> -->
          <p>
            <b>"Bridge To Kyoto"</b> is a curatorial
            platform and cultural space for architecture and
            urbanism based in Kyoto, Japan. It is a private
            gallery and library that showcases a collection
            of publications and items in the fields of
            architecture and urbanism.
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
    margin-top: 5em;
    position: relative;
    font-size: 1.5em;
    padding: 2em 3em;
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

    @media (max-width: 768px) {
      margin-top: -6em;
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
