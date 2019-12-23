<template>
  <PageSection class="section" id="contact">
    <div class="contentcolumn">
      <h1>Contact Us</h1>
      <p>
        Still have questions? Don't hesitate to
        <a
          href="mailto:bridgetoresidency@gmail.com"
        >send us a message!</a>
      </p>
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
  background: #222;
  color: white;
  padding-bottom: 30vh;
}
</style>
