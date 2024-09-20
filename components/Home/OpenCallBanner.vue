<template>
  <section
    class="v6"
    id="openCall"
    v-if="state.openCall.value"
  >
    <div class="light v3"></div>

    <div class="box">
      <div class="columns">
        <div class="flexcolumn flexcenter flexgrow">
          <h1>OPEN</h1>
          <h1>CALL</h1>
        </div>

        <div class="flexcenter flexgrow text">
          <div>
            <h2 class="marbottiny">
              We are currently accepting applications for
              residencies for the coming year!
            </h2>
            <div>
              Our current research themes are:
              <ul>
                <li>Community engagement</li>
                <li>Alternative urbanism</li>
                <li>Critical making</li>
                <li>
                  Space design, architecture, carpentry
                </li>
                <li>Cross-cultural research</li>
              </ul>
            </div>
            <div class="martopsmall highlight">
              Additionally, we're looking for videographers
              and carpenters who might want to help us on
              projects for the space in exchange for a
              reduced rate!
            </div>
          </div>
        </div>

        <div class="flexcenter flexgrow">
          <a class="button big" href="#apply">
            <div class="dark">Learn More</div>
          </a>
        </div>
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
#openCall {
  width: 100%;
  padding: 2em;

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  .box {
    padding: 3em;
    border: 2px solid var(--base-d);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1em;

    .box {
      padding: 10vw;
    }
  }
}

.columns {
  display: flex;
  gap: 2em;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2em;
  }
}

.text {
  font-size: 1.1em;
  max-width: 680px;
}
</style>
