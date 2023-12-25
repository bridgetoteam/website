<template>
  <PageSection
    class="section contentcolumn full"
    id="residents"
  >
    <div
      v-lazy:background-image="
        '/img/2024/20231202_kyoto_184_4000.jpg'
      "
      class="interstitial"
    >
      <div class="overlay"></div>
    </div>

    <template v-if="locale === 'ja'">
      <h1>Residents</h1>

      <p>2024年3月〜随時レジデンスの受付をしています</p>

      <div class="row">
        <div
          v-if="(locale === 'ja' ? ja : en).current?.length"
        >
          <h3>Current</h3>

          <div class="grid">
            <div
              class="resident"
              v-for="r in (locale === 'ja' ? ja : en)
                .current"
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
                {{ r.description }}
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
              v-for="r in (locale === 'ja' ? ja : en)
                .upcoming"
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
                {{ r.description }}
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
              v-for="r in (locale === 'ja' ? ja : en).past"
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
                {{ r.description }}
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
    </template>

    <template v-else>
      <h1>Residents</h1>

      <p>
        We're not currently accepting new residents, but
        these are the people who have stayed or organized
        events and workshops here!
      </p>

      <div class="row">
        <div
          v-if="(locale === 'ja' ? ja : en).current?.length"
        >
          <h3>Current</h3>

          <div class="grid">
            <div
              class="resident"
              v-for="r in en.current"
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
                {{ r.description }}
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
              v-for="r in en.upcoming"
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
                {{ r.description }}
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
              v-for="r in en.past"
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
                {{ r.description }}
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
    </template>
  </PageSection>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

interface ResidentHomepageData {
  id: string
  name: string
  description: string
  url?: string
}
interface ResidentHomepage {
  current: ResidentHomepageData[]
  past: ResidentHomepageData[]
  upcoming: ResidentHomepageData[]
}
const en: ResidentHomepage = {
  current: [],
  past: [
    {
      id: 'momoko',
      name: 'Momoko Watanabe',
      description: `Dance & body expression.`,
    },
    {
      id: 'waldo',
      name: 'Waldo De Keersmaecker',
      description: `Architect.`,
    },
    {
      id: 'anneleen',
      name: 'Anneleen Bertels',
      description: `Textile designer.`,
    },
    {
      id: 'lemos',
      name: 'Lemos + Lehmann',
      description:
        'Perception, contemplation, and emotion.',
      url: 'https://www.lemosandlehmann.com',
    },
    {
      id: 'august',
      name: 'August Henry Moehrke',
      description: `Visual artist located in New York City.`,
      url: 'https://www.ahm-art.com/',
    },
    {
      id: 'eliza',
      name: 'Eliza Soroga',
      description:
        'Site-Specific Performance Artist from Athens.',
      url: 'http://www.elizasoroga.com/',
    },
    {
      id: 'juliette',
      name: 'Juliette Pénélope Pépin',
      description: 'Artist',
      url: 'https://juliettepenelope.com/',
    },
    {
      id: 'taina',
      name: 'Tainá Guedes',
      description: `Berlin-based artist, food activist, book author and trained cook.`,
      url: 'https://entretempo-kitchen-gallery.com/',
    },
    {
      id: 'harry',
      name: 'Harry Lee',
      description: 'Tea / Ceramic / Landscape artist',
    },
    {
      id: 'misa',
      name: 'Misa Murata',
      description: 'Phytotherapist / Botanical artist',
      url: 'https://verseau.me/',
    },
    {
      id: 'pierre',
      name: 'Pierre Verret',
      description: 'Michelin-starred chef from Quebec.',
    },
    {
      id: 'uenosono',
      name: 'Uenosono Masato',
      description: 'Architect and project director.',
    },
    {
      id: 'kanako',
      name: 'Kanako Shintaku',
      description: 'Visual and sculptural artist.',
      url: 'https://www.shintakukanako.com/',
    },
    {
      id: 'eva',
      name: 'Eva Ešnerová',
      description: `Urban strategic planner and researcher from Prague, Czechia.`,
      url: 'https://camp.ofcn.cz/en/index.html',
    },
  ],
  upcoming: [
    {
      id: 'severin',
      name: 'Studio B Severin',
      description:
        'Berlin-based design studio exploring culture and society.',
      url: 'https://studiobseverin.com/',
    },
    {
      id: 'cleo',
      name: 'Cléo Verstrepen',
      description: `Graduate in cultural studies preparing research community art spaces.`,
      url: 'https://www.instagram.com/cleoverstrepen/?hl=en',
    },
  ],
}

const ja: ResidentHomepage = {
  current: [],
  past: [
    {
      id: 'august',
      name: 'August Henry Moehrke',
      description: `ニューヨーク拠点のビジュアルアーティスト`,
      url: 'https://www.ahm-art.com/',
    },
    {
      id: 'lemos',
      name: 'Lemos + Lehmann',
      description: 'アーティスト・デュオ',
      url: 'https://www.lemosandlehmann.com',
    },
    {
      id: 'momoko',
      name: 'Momoko Watanabe',
      description: `ダンス、身体表現。`,
    },
    {
      id: 'waldo',
      name: 'Waldo De Keersmaecker',
      description: `建築家。`,
    },
    {
      id: 'anneleen',
      name: 'Anneleen Bertels',
      description: `テキスタイルデザイナー。`,
    },

    {
      id: 'eliza',
      name: 'Eliza Soroga',
      description: 'パフォーミングアーティスト',
      url: 'http://www.elizasoroga.com/',
    },
    {
      id: 'juliette',
      name: 'Juliette Pénélope Pépin',
      description: 'アーティスト',
      url: 'https://juliettepenelope.com/',
    },
    {
      id: 'taina',
      name: 'Tainá Guedes',
      description: `ベルリン 拠点のアーティスト、フードアクティビスト、シェフ`,
      url: 'https://entretempo-kitchen-gallery.com/',
    },
    {
      id: 'harry',
      name: 'Harry Lee',
      description:
        '茶人 / 陶芸家 / ランドスケープアーティスト',
    },
    {
      id: 'misa',
      name: 'Misa Murata',
      description: '植物療法士／植物表現家',
      url: 'https://verseau.me/',
    },
    {
      id: 'pierre',
      name: 'Pierre Verret',
      description: `ケベック出身のミシュランシェフ`,
    },
    {
      id: 'uenosono',
      name: 'Uenosono Masato',
      description: `建築家・プロジェクトディレクター`,
    },
    {
      id: 'kanako',
      name: 'Kanako Shintaku',
      description: `身体表現を行うアーティスト`,
      url: 'https://www.shintakukanako.com/',
    },

    {
      id: 'eva',
      name: 'Eva Ešnerová',
      description: `チェコ出身の都市戦略プランナー`,
      url: 'https://camp.ofcn.cz/en/index.html',
    },
  ],
  upcoming: [
    {
      id: 'severin',
      name: 'Studio B Severin',
      description: `ベルリン拠点のデザインスタジオ`,
      url: 'https://studiobseverin.com/',
    },

    {
      id: 'cleo',
      name: 'Cléo Verstrepen',
      description: `コミュニティ・アート・スペースのリサーチャー`,
      url: 'https://www.instagram.com/cleoverstrepen/?hl=en',
    },
  ],
}
</script>

<style lang="scss" scoped>
.section {
  --bg: var(--accentl1);
  --side-pad: 5%;

  background: white;
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
