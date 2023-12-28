<template>
  <section class="v5" id="residents">
    <div
      v-lazy:background-image="
        '/img/2024/20231202_kyoto_184_4000.jpg'
      "
      class="interstitial shadow"
    ></div>

    <div class="contentcolumn full">
      <h1>Residents</h1>

      <p>
        <template v-if="locale === 'ja'">
          2024年3月より随時アーティストインレジデンスの応募受付中
        </template>
        <template v-else>
          Now accepting applications; space available from
          March 2024.
        </template>
      </p>

      <div class="row">
        <div v-if="people.current?.length">
          <h3>Current</h3>

          <div class="grid">
            <div
              class="resident"
              v-for="r in people.current"
              :key="r.id + r.name + locale"
            >
              <div
                class="img"
                v-lazy:background-image="
                  `/img/residents/${r.id}.jpg`
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
          <h3>Upcoming</h3>

          <div class="grid">
            <div
              class="resident"
              v-for="r in people.upcoming"
              :key="r.id + r.name + locale"
            >
              <div
                class="img"
                v-lazy:background-image="
                  `/img/residents/${r.id}.jpg`
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
              v-for="r in people.past"
              :key="r.id + r.name + locale"
            >
              <div
                class="img"
                v-lazy:background-image="
                  `/img/residents/${r.id}.jpg`
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

interface ResidentHomepageData {
  id: string
  name: string
  description: string
  descriptionJa: string
  url?: string
}
interface ResidentHomepage {
  current: ResidentHomepageData[]
  past: ResidentHomepageData[]
  upcoming: ResidentHomepageData[]
}
const people: ResidentHomepage = {
  current: [],
  past: [
    {
      id: 'momoko',
      name: 'Momoko Watanabe',
      description: `Dance & body expression.`,
      descriptionJa: `ダンス、身体表現。`,
    },
    {
      id: 'waldo',
      name: 'Waldo De Keersmaecker',
      description: `Architect.`,
      descriptionJa: `建築家。`,
    },
    {
      id: 'anneleen',
      name: 'Anneleen Bertels',
      description: `Textile designer.`,
      descriptionJa: `テキスタイルデザイナー。`,
    },
    {
      id: 'lemos',
      name: 'Lemos + Lehmann',
      description:
        'Perception, contemplation, and emotion.',
      descriptionJa: 'アーティスト・デュオ',
      url: 'https://www.lemosandlehmann.com',
    },
    {
      id: 'august',
      name: 'August Henry Moehrke',
      description: `Visual artist located in New York City.`,
      descriptionJa: `ニューヨーク拠点のビジュアルアーティスト`,
      url: 'https://www.ahm-art.com/',
    },
    {
      id: 'eliza',
      name: 'Eliza Soroga',
      description:
        'Site-Specific Performance Artist from Athens.',
      descriptionJa: 'パフォーミングアーティスト',
      url: 'http://www.elizasoroga.com/',
    },
    {
      id: 'juliette',
      name: 'Juliette Pénélope Pépin',
      description: 'Artist',
      descriptionJa: 'アーティスト',
      url: 'https://juliettepenelope.com/',
    },
    {
      id: 'taina',
      name: 'Tainá Guedes',
      descriptionJa: `ベルリン 拠点のアーティスト、フードアクティビスト、シェフ`,
      description: `Berlin-based artist, food activist, book author and trained cook.`,
      url: 'https://entretempo-kitchen-gallery.com/',
    },
    {
      id: 'harry',
      name: 'Harry Lee',
      description: 'Tea / Ceramic / Landscape artist',
      descriptionJa:
        '茶人 / 陶芸家 / ランドスケープアーティスト',
    },
    {
      id: 'misa',
      name: 'Misa Murata',
      description: 'Phytotherapist / Botanical artist',
      descriptionJa: '植物療法士／植物表現家',
      url: 'https://verseau.me/',
    },
    {
      id: 'pierre',
      name: 'Pierre Verret',
      description: 'Michelin-starred chef from Quebec.',
      descriptionJa: `ケベック出身のミシュランシェフ`,
    },
    {
      id: 'uenosono',
      name: 'Uenosono Masato',
      description: 'Architect and project director.',
      descriptionJa: `建築家・プロジェクトディレクター`,
    },
    {
      id: 'kanako',
      name: 'Kanako Shintaku',
      description: 'Visual and sculptural artist.',
      descriptionJa: `身体表現を行うアーティスト`,
      url: 'https://www.shintakukanako.com/',
    },
    {
      id: 'eva',
      name: 'Eva Ešnerová',
      description: `Urban strategic planner and researcher from Prague, Czechia.`,
      descriptionJa: `チェコ出身の都市戦略プランナー`,
      url: 'https://camp.ofcn.cz/en/index.html',
    },
  ],
  upcoming: [
    {
      id: 'severin',
      name: 'Studio B Severin',
      description:
        'Berlin-based design studio exploring culture and society.',
      descriptionJa: `ベルリン拠点のデザインスタジオ`,
      url: 'https://studiobseverin.com/',
    },
    {
      id: 'cleo',
      name: 'Cléo Verstrepen',
      description: `Graduate in cultural studies preparing research community art spaces.`,
      descriptionJa: `コミュニティ・アート・スペースのリサーチャー`,
      url: 'https://www.instagram.com/cleoverstrepen/?hl=en',
    },
  ],
}
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
