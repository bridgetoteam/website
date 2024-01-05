<template>
  <section class="v4" id="partners">
    <div class="light v3"></div>
    <!-- <div
      v-lazy:background-image="
        '/img/2024/20231202_kyoto_184_4000.jpg'
      "
      class="interstitial shadow"
    ></div> -->

    <div class="contentcolumn full">
      <h1>Partners</h1>

      <div class="grid martop" @mouseleave="hovered = null">
        <a
          target="_blank"
          :href="r.url"
          class="partner"
          :class="{
            hovered: hovered === r.id,
            somethingIsHovered: hovered,
          }"
          v-for="r in shuffledPartners"
          :key="r.id + r.name + locale"
          @mouseover="hovered = r.id"
        >
          <div
            class="img"
            v-lazy:background-image="
              `/img/partners/${r.id}.jpg`
            "
            :alt="`Photo of ${r.name}`"
          ></div>
          <!-- <h2 class="name">
            {{
              locale === 'ja' ? r.nameJa || r.name : r.name
            }}
          </h2>
          <div
            class="description"
            v-if="r.description || r.descriptionJa"
          >
            {{
              locale === 'ja'
                ? r.descriptionJa || r.description
                : r.description || r.descriptionJa
            }}
            <span class="website" v-if="r.url">
              <a :href="r.url" target="_blank">Website</a>
            </span>
          </div> -->
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

const hovered = ref<string | null>(null)

interface PartnerHomepageData {
  id: string
  name: string
  nameJa?: string
  description?: string
  descriptionJa?: string
  url: string
}
const partners: PartnerHomepageData[] = [
  {
    id: 'ethno',
    name: 'Ethnography Lab, Osaka',
    nameJa: '大阪大学・人類学研究室',
    url: 'http://ethnography.hus.osaka-u.ac.jp',
  },
  {
    id: 'forest',
    name: 'Forest of Craft',
    nameJa: '工藝の森',
    url: 'https://www.forest-of-craft.jp',
  },
  {
    id: 'haioku',
    name: 'Haioku Residency',
    url: 'https://haioku-air.studio.site/',
  },
  {
    id: 'space',
    name: 'Space Department',
    url: 'https://www.spacedepartment-nara.com/',
  },
  {
    id: 'surf',
    name: 'Hyper Wave x Surfy Space',
    nameJa: '超級浪 x 浪花',
    url: 'https://www.hyperwavemit.com/',
  },
]

const shuffledPartners = partners.sort(
  () => Math.random() - 0.5,
)
</script>

<style lang="scss" scoped>
.contentcolumn {
  --side-pad: 5%;
  padding-left: var(--side-pad);
  padding-right: var(--side-pad);

  width: 100%;
  overflow-x: hidden;
  // padding-left: 0;
  // padding-right: 0;
  // padding-bottom: 0;
  // padding-top: 0;
}
h2 {
  margin-top: 0;
  margin-bottom: 0.3em;
}
h3 {
  opacity: 0.5;
  margin-bottom: 0.5em;
}

.grid {
  padding: 2em 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.light {
  z-index: 3;
}
.partner {
  position: relative;
  text-decoration: none;
  width: 350px;
  max-width: 100%;
  margin: -2em -1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  word-break: break-word;

  div {
    width: 100%;
  }

  transition: filter 0.15s ease;
  &.somethingIsHovered {
    filter: grayscale(1);
    .img {
      transform: scale(0.6);
    }
  }
  &.hovered {
    filter: none !important;

    z-index: 2;
    .img {
      transform: scale(1.1);
    }
    text-decoration: underline;
  }
}

.img {
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-size: cover;
  background-position: center center;
  margin-bottom: 1em;
  transition: transform 0.15s ease;
}

a {
  color: inherit;
}
</style>
