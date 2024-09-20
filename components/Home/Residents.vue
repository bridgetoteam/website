<template>
  <section class="v5" id="residents">
    <div
      v-lazy:background-image="
        '/img/2024/20231202_kyoto_220_4000.jpg'
      "
      class="interstitial shadow"
    ></div>

    <div class="contentcolumn full">
      <h1>Residents</h1>

      <!-- <p>
        <template v-if="locale === 'ja'">
          2024年3月より随時アーティストインレジデンスの応募受付中
        </template>
        <template v-else>
          Now accepting applications; space available from
          March 2024.
        </template>
      </p> -->

      <div class="row">
        <!--   <div v-if="residents.current?.length">
          <h3>Current</h3>

          <div class="grid">
            <div
              class="resident"
              v-for="r in residents.current"
              :key="r.id + r.name + locale"
            >
              <div
                class="img"
                v-lazy:background-image="
                  `/img/people/${r.id}.jpg`
                "
                :alt="`Photo of ${r.name}`"
              ></div>
              <h2 class="name">{{ r.name }}</h2>
              <div class="description">
                {{
                  locale === 'ja'
                    ? r.descriptionJa
                    : r.description
                }}
                <span class="website" v-if="r.url">
                  <a :href="r.url" target="_blank"
                    >Website</a
                  >
                </span>
              </div>
            </div>
          </div>
        </div> -->

        <div class="marright">
          <h3>Upcoming</h3>

          <div class="flex">
            <HomeResident
              v-for="r in residents.upcoming || []"
              :key="r.id + r.name + locale"
              :r="r"
            />
          </div>
        </div>

        <div>
          <h3>Past</h3>

          <div class="flex">
            <HomeResident
              v-for="r in residents.past || []"
              :key="r.id + r.name + locale"
              :r="r"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

import { residents } from '~/assets/people'
</script>

<style lang="scss" scoped>
.contentcolumn {
  --side-pad: 5%;

  width: 100%;
  overflow-x: hidden;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-top: 0;
}
h1 {
  margin-top: 130px;
  margin-left: var(--side-pad);
}
h3 {
  opacity: 0.5;
  margin-bottom: 0.5em;
}

.row {
  padding: 0 var(--side-pad);
  display: flex;
  width: 100%;
  overflow-x: auto;
  padding-bottom: calc(min(var(--side-pad) * 2, 6em));
}
</style>
