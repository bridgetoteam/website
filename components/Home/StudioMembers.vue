<template>
  <section class="v2" id="studioMembers">
    <div class="contentcolumn full">
      <h1>Studio Members</h1>

      <div class="row">
        <div>
          <h3>Current</h3>

          <div class="grid">
            <div
              class="resident"
              v-for="r in studioMembers.current || []"
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
        </div>

        <div>
          <h3>Past</h3>

          <div class="grid">
            <div
              class="resident"
              v-for="r in studioMembers.past"
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

import { studioMembers } from '~/assets/people'
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
}
h1,
p {
  margin-left: var(--side-pad);
}
p {
  max-width: 550px;
}
h2 {
  margin-top: 0;
  margin-bottom: 0.3em;
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

.grid {
  display: flex;
}

.resident {
  width: 250px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  word-break: break-word;

  div {
    width: 100%;
  }
}

.img {
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  background-size: cover;
  background-position: center center;
  margin-bottom: 1em;
}

a {
  color: inherit;
}
</style>
