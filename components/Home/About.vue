<template>
  <section class="about">
    <div class="textbox" id="about">
      <div class="hasBg">
        <div class="bg"></div>

        <template v-if="locale === 'ja'">
          <!-- <h1>About</h1> -->
          <p>
            京都・左京区に位置するBridge
            Toは、建築・まちづくり・デザイン・アートなどに関わる実践者のための複合スペース
            &
            プラットフォームです。国内外のアーティストが滞在できるレジデンスや、シェアアトリエ、イベントスペース、建築・都市・まちづくり関係の蔵書やアイテムを公開する私設ライブラリーほか、文化芸術事業の企画運営・展覧会の企画やキュレーションなども行なっています。現在、「Bridge
            Studio」「Bridge Office」の2拠点を運営しています。

            <!-- 世界中からアーバニストやアーティストを受け入れ、国内の建築・都市・まちづくり・アート関係者や市民と交流し、コラボレーションを生み出すきっかけをつくるための場所です。 -->
          </p>
        </template>

        <template v-else>
          <!-- <h1>About</h1> -->
          <p>
            <b>"Bridge To Kyoto"</b> is a curatorial platform and cultural space
            for architecture and urbanism based in Kyoto, Japan. It is a private
            gallery and library that showcases a collection of publications and
            items in the fields of architecture and urbanism.
          </p>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from "~/assets/state";
const i18n = useI18n();
const locale = i18n.locale;
</script>

<style lang="scss" scoped>
// .section {
//   width: 100%;
//   overflow-x: hidden;
// }
.about {
  width: 100%;
  position: relative;
  height: 0;
  // height: 200px;
  padding: 0;
  z-index: 2;
}

.textbox {
  width: 800px;
  padding: 0;
  position: absolute;
  right: 0;

  .hasBg {
    margin-top: 6em;
    position: relative;
    font-size: 1.6em;
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
  }
}
</style>
