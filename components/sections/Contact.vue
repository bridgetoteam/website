<template>
  <PageSection class="section" id="contact">
    <div class="contentcolumn">
      <h1>Contact Us</h1>
      <template v-if="$i18n.locale === 'ja'">
        <p>
          ご質問やご相談は、お気軽に
          <a href="mailto:bridgetoresidency@gmail.com">bridgetoresidency@gmail.com</a>まで。
        </p>
        <p>
          We are here:
          <br />28-3 Jōdoji BanbachōSakyō-ku, Kyoto, 606-8412
          <br />〒606-8412 京都市左京区浄土寺馬場町28-3
        </p>
      </template>
      <template v-else>
        <p>
          Still have questions? Don't hesitate to
          <a
            href="mailto:bridgetoresidency@gmail.com"
          >send us a message!</a>
        </p>
        <p>
          We are located at:
          <br />28-3 Jōdoji Banbachō Sakyō-ku, Kyoto, 606-8412
          <br />〒606-8412 京都市左京区浄土寺馬場町28-3
        </p>
      </template>
      <iframe
        width="600"
        height="450"
        frameborder="0"
        style="border:0"
        src="https://www.google.com/maps/embed/v1/place?q=606-8412%20%E4%BA%AC%E9%83%BD%E5%B8%82%E5%B7%A6%E4%BA%AC%E5%8C%BA%E6%B5%84%E5%9C%9F%E5%AF%BA%E9%A6%AC%E5%A0%B4%E7%94%BA28-3&key=AIzaSyCVAqaIBwiwcQ_aSqAErZphJGU7seFHnP4"
        allowfullscreen
      ></iframe>
    </div>
  </PageSection>
</template>

<script>
import PageSection from '~/components/PageSection.vue'

export default {
  components: {
    PageSection,
  },
}
</script>

<style lang="scss" scoped>
.section {
  background: #333;
  color: white;
  padding-bottom: 30vh;
}

p {
  margin-bottom: 1.2em;
}

pre {
}
iframe {
  max-width: 100%;
}
</style>
