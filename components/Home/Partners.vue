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
          <div class="overlayText flexcolumn flexcenter">
            <h2 class="name">
              {{
                locale === 'ja'
                  ? r.nameJa || r.name
                  : r.name
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
              <!-- <span class="website" v-if="r.url">
                <a :href="r.url" target="_blank">Website</a>
              </span> -->
            </div>
          </div>
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
    description:
      'A research initiative of critical making and anthropology, especially focusing on energy and a sustainable future.',
    descriptionJa:
      '人類学者・森田敦郎氏が率いるクリティカル・メイキングの研究ラボラトリーと共に、エネルギーや持続可能な未来を考えるための連携拠点としてBridge Toを活用頂いています。',
  },
  {
    id: 'forest',
    name: 'Forest of Craft',
    nameJa: '工藝の森',
    url: 'https://www.forest-of-craft.jp',
    description:
      'An initiative to promote craft and forestry in Keihoku, a norther part of Kyoto, as well as an fabrication lab. We collaborate with them in case artsits want to focus on woodworking and need a studio with power tools.',
    descriptionJa:
      '京都・京北を拠点に林業や工芸に取り組むイニシアチブであり、ものづくりの拠点であるファブリケーション・ラボも併設。ものづくり協力や資材の調達で連携しています。',
  },
  {
    id: 'haioku',
    name: 'Haioku Residency',
    url: 'https://haioku-air.studio.site/',
    description:
      'An artist in residency and architecture collective focusing on abandoned buildings based in Kobe. They offer carpentry workshops and on-site apprenticeships in construction sites, and we send artists to their studios.',
    descriptionJa:
      '廃墟を専門とする建築集団・西村組による神戸のアーティスト・イン・レジデンス。半人前大工講座や現場実習を行っており、アーティストのエクスチェンジや共同企画などを複数行なっています。',
  },
  {
    id: 'space',
    name: 'Space Department',
    url: 'https://www.spacedepartment-nara.com/',
    description:
      'An artist in residency focusing on architecture in Nara, Japan. We organize joint residencies, exhibitions as well as tours to visit creative spots across Kansai region.',
    descriptionJa:
      '建築部門に特化した奈良のアーティスト・イン・レジデンス。関西圏での共同レジデンスや展覧会連携などを行っています。',
  },
  {
    id: 'surf',
    name: 'Hyper Wave x Surfy Space',
    nameJa: '超級浪 x 浪花',
    url: 'https://www.hyperwavemit.com/',
    description:
      'An artist-run space and residency in Taiwan. We encourage artists exchange between Japan and Taiwan and share opportunities.',
    descriptionJa:
      'アーティストが運営する台湾のアートスペース＆レジデンス。日本と台湾のアーティストの交流やエクスチェンジを促進するプログラムを連携して行っています。',
  },
  {
    id: 'resartis',
    name: 'Res Artis',
    nameJa: 'Res Artis',
    url: 'https://resartis.org/',
    description:
      'An artist-run space and residency in Taiwan. We encourage artists exchange between Japan and Taiwan and share opportunities.',
    descriptionJa:
      'アーティストが運営する台湾のアートスペース＆レジデンス。日本と台湾のアーティストの交流やエクスチェンジを促進するプログラムを連携して行っています。',
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

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    padding-bottom: 2em;
  }

  div {
    width: 100%;
  }

  @media (min-width: 769px) {
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
        filter: brightness(0.3);
      }
      .overlayText {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}

.img {
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-size: cover;
  background-position: center center;
  margin-bottom: 1em;
  transition: all 0.15s ease;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
}

a {
  color: inherit;
}

.overlayText {
  color: var(--base-l2);
  transition: all 0.15s ease;
  position: absolute;
  height: 100%;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.6);
  padding: 1em;

  @media (max-width: 768px) {
    color: var(--base);
    opacity: 1;
    transform: scale(1);
    top: 0;
    left: 0;
    position: relative;
  }
}
</style>
