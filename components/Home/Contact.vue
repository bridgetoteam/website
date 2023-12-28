<template>
  <section class="v5" id="contact">
    <div class="light"></div>
    <div
      v-lazy:background-image="'/img/2023/2.jpg'"
      class="interstitial"
    ></div>

    <div class="contentcolumn martopbig padbotbig">
      <div class="p flexcolumn gapbig flexcenter">
        <a
          class="button"
          href="mailto:bridgetoresidency@gmail.com"
          target="_blank"
        >
          <div
            class="primary invert padleftbig padrightbig"
          >
            Contact Us
          </div>
        </a>

        <Social style="transform: scale(1.5); --gap: 1em" />
      </div>
      <div>
        <h3>Bridge Studio</h3>
        <blockquote>
          69 Jodoji Higashidacho, Sakyo Ward, Kyoto,
          606-8411, Japan
          <br />〒606-8411 京都市左京区浄土寺東田町69
        </blockquote>
        <iframe
          width="600"
          height="450"
          frameborder="0"
          style="border: 0"
          src="https://www.google.com/maps/embed/v1/place?q=2QGV%2H3%20Kyoto&key=AIzaSyCHF6DdpDLIG-1Ak4p0XyIK2Bc6DbVmgLY"
          allowfullscreen
        ></iframe>

        <h3>Bridge Office</h3>
        <blockquote>
          28-3 Jōdoji Banbachō, Sakyō-ku, Kyoto, 606-8412
          <br />〒606-8412 京都市左京区浄土寺馬場町28-3
        </blockquote>
        <iframe
          width="600"
          height="450"
          frameborder="0"
          style="border: 0"
          src="https://www.google.com/maps/embed/v1/place?q=2QGV%23H%20Kyoto&key=AIzaSyCHF6DdpDLIG-1Ak4p0XyIK2Bc6DbVmgLY"
          allowfullscreen
        ></iframe>
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
.section {
  padding-bottom: 30vh;
  padding-top: 0;
}

h1 {
  margin-bottom: 0.8em;
}

.p {
  display: block;
  margin-bottom: 6em;

  & > *:first-child {
    margin-bottom: 5px;
  }
}

.button {
  max-width: 500px;
}

.sub {
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.4;
}

blockquote {
  display: inline-block;
  margin: 5px 0 10px 0;
  padding: 20px 30px;
  background: rgba(black, 0.05);
  border: 1px solid rgba(black, 0.1);
}

iframe {
  width: 100%;
}
</style>
