<template>
  <section class="" id="faq">
    <div class="light v2"></div>

    <div
      v-lazy:background-image="'/img/2024/20231202_kyoto_244_4000.jpg'"
      class="interstitial"
    ></div>

    <!-- <div
      class="interstitialbg"
      v-lazy:background-image="'/img/2023/6.jpg'"
    ></div> -->

    <div class="contentcolumn">
      <h1>FAQ</h1>
      <div class="columns">
        <h2 v-if="locale === 'ja'">誰が運営しているの？</h2>
        <h2 v-else>Who is behind this?</h2>
        <p>
          <template v-if="locale === 'ja'">
            都市、建築、まちづくりの分野でクリエイティブディレクションやリサーチの仕事を行うアーバン・デザイナーの杉田真理子と、デザイナー・ディベロッパーのジャスパー・スティーベンソンを主体とした合同会社TCUにて運営をしています。
          </template>
          <template v-else>
            Bridge To is run by TCU (Traveling Circus of Urbanism), a team led
            by urban designer Mariko Sugita, who works in creative direction and
            research in the fields of cities, architecture, and community
            development, and designer/developer Jasper Stephenson.
          </template>
        </p>

        <h2 v-if="locale === 'ja'">誰が使用できるの？</h2>
        <h2 v-else>Who can use the space?</h2>
        <p>
          <template v-if="locale === 'ja'">
            アート、デザイン、工芸分野を中心に、バックグラウンドに関わらずどなたでもご使用いただけます。応募内容によって、面談・ビデオ面接をさせて頂く場合もございます。ワークショップやイベントの開催希望の方も、お気軽にお問い合わせください。</template
          >
          <template v-else>
            Anyone who is interested in cities, architecture, urbanism, or art.
            For residency applicants, we will conduct face-to-face or video
            interviews. If you would like to hold a workshop or event, please
            feel free to contact us directly.</template
          >
        </p>

        <h2 v-if="locale === 'ja'">どんなエリアなの？</h2>
        <h2 v-else>What's in the neighborhood?</h2>
        <p>
          <template v-if="locale === 'ja'"
            >銀閣寺と哲学の道から、徒歩5分ほどの場所にあります。京都大学も近く、カフェやレストランなどが徒歩圏内に数多くあるほか、クリエイティブな本屋や隠れ家的なアートスペースも点在するエリアです。</template
          >
          <template v-else>
            We're only a 5 minute walk away from the Silver Temple (Ginkakuji)
            &amp; the Philosopher's Path (one of the most popular icons of
            Kyoto), and 25 minutes by bus from the city center. Kyoto University
            is very close by, as well. On top of that, there are many small
            independent art galleries, book stores, and craft shops nearby. One
            of our favorites is
            <a href="http://hohohoza.com/" target="_blank">Hohohoza</a>!
          </template>
        </p>

        <h2 v-if="locale === 'ja'">
          建物の保存活動はどのようなプロセスで行われているの？
        </h2>
        <h2 v-else>What's involved in the renovation of Bridge Studio?</h2>
        <p>
          <template v-if="locale === 'ja'">
            自分たちで改修費を工面し、まずはキッチンやお風呂場、トイレなどの水回り工事を優先的に行ったのち、痛み始めている外壁の工事を行っています。元々使われていたレンガやタイル、瓦屋根などの素材を再利用し、歴史的な趣をそのまま残しながら、現代の生活にもフィットする形で時間をかけて改修を行います。改修費へのカンパ、ドネーションを常に受け付けております。
          </template>
          <template v-else>
            After raising funds for renovation, we will prioritize a redo of the
            aging plumbing and electrical systems. Then, we will work on the
            exterior walls, which were starting to show signs of wear. By
            reusing original materials such as bricks, tiles, and ceramic roof
            tiles, we will take the time to renovate the building to fit modern
            life while preserving its historic charm. We are always accepting
            donations toward renovation costs.
          </template>
        </p>
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
.section {
  padding-bottom: 10vh;
  overflow: hidden;
  width: 100%;
  position: relative;
  padding-top: 0;

  @media (max-width: 768px) {
    padding-bottom: 5vh;
  }
}

.interstitialbg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 40%;
  background-size: cover;
  background-position: center center;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: overlay;
  opacity: 0.2;

  @media (max-width: 768px) {
    top: 30%;
    left: 20%;
    width: 80%;
    height: 25%;
    // opacity: 0.3;
  }
}

.contentcolumn {
  position: relative;
  z-index: 2;
}

h1 {
  padding-top: 30px;
}

.columns {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
}

h2 {
  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 40px;
  }
}
h3 {
  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 20px;
  }
}

p {
  margin: 1em 0;
}
</style>
