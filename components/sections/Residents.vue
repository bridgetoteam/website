<template>
  <PageSection
    class="section contentcolumn full"
    id="residents"
  >
    <template v-if="$i18n.locale === 'ja'">
      <h1>Residents</h1>

      <div class="row">
        <div>
          <h3>Current</h3>

          <div class="grid">
            <div
              class="resident"
              v-for="r in ($i18n.locale === 'ja' ? ja : en)
                .current"
            >
              <div
                class="img"
                v-lazy:background-image="
                  `/assets/img/residents/${r.id}.jpg`
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
              v-for="r in ($i18n.locale === 'ja' ? ja : en)
                .upcoming"
            >
              <div
                class="img"
                v-lazy:background-image="
                  `/assets/img/residents/${r.id}.jpg`
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
              v-for="r in ($i18n.locale === 'ja' ? ja : en)
                .past"
            >
              <div
                class="img"
                v-lazy:background-image="
                  `/assets/img/residents/${r.id}.jpg`
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

      <div class="row">
        <div>
          <h3>Upcoming</h3>

          <div class="grid">
            <div class="resident" v-for="r in en.upcoming">
              <div
                class="img"
                v-lazy:background-image="
                  `/assets/img/residents/${r.id}.jpg`
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
            <div class="resident" v-for="r in en.past">
              <div
                class="img"
                v-lazy:background-image="
                  `/assets/img/residents/${r.id}.jpg`
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

<script>
import PageSection from '~/components/PageSection.vue'

export default {
  components: {
    PageSection,
  },
  mounted() {
    console.log(this.en, this.ja)
  },
  data() {
    return {
      en: {
        current: [
          {
            id: 'misa',
            name: 'Misa Murata',
            description:
              'Phytotherapist / Botanical artist',
            url: 'https://verseau.me/',
          },
          {
            id: 'pierre',
            name: 'Pierre Verret',
            description:
              'Michelin-starred chef from Quebec.',
          },
        ],
        past: [
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
            id: 'taina',
            name: 'Tainá Guedes',
            description: `Berlin-based artist, food activist, book author and trained cook.`,
            url: 'https://entretempo-kitchen-gallery.com/',
          },
          {
            id: 'august',
            name: 'August Henry Moehrke',
            description: `Visual artist located in New York City.`,
            url: 'https://www.ahm-art.com/',
          },
          {
            id: 'cleo',
            name: 'Cléo Verstrepen',
            description: `Graduate in cultural studies preparing research community art spaces.`,
            url:
              'https://www.instagram.com/cleoverstrepen/?hl=en',
          },
          {
            id: 'rocky',
            name: 'Rocky Hudson',
            description: `Music maker, book maker, artist/writer.`,
            url: 'https://rockyfuckinghudson.com',
          },
          {
            id: 'erika',
            name: 'Erika Rodríguez',
            description: `Architect and scriptwriter researching appropiation of space. `,
          },
          {
            id: 'eliza',
            name: 'Eliza Soroga',
            description:
              'Site-Specific Performance Artist from Athens.',
            url: 'http://www.elizasoroga.com/',
          },
        ],
      },

      ja: {
        current: [
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
        ],
        past: [
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
            id: 'taina',
            name: 'Tainá Guedes',
            description: `ベルリン 拠点のアーティスト、フードアクティビスト、シェフ`,
            url: 'https://entretempo-kitchen-gallery.com/',
          },
          {
            id: 'august',
            name: 'August Henry Moehrke',
            description: `ニューヨーク拠点のビジュアルアーティスト`,
            url: 'https://www.ahm-art.com/',
          },
          {
            id: 'cleo',
            name: 'Cléo Verstrepen',
            description: `コミュニティ・アート・スペースのリサーチャー`,
            url:
              'https://www.instagram.com/cleoverstrepen/?hl=en',
          },
          {
            id: 'rocky',
            name: 'Rocky Hudson',
            description: `アーティスト、ミュージックメーカー`,
            url: 'https://rockyfuckinghudson.com',
          },
          {
            id: 'erika',
            name: 'Erika Rodríguez',
            description: `シネマティックな都市の言語を研究する建築家、劇作家`,
          },
          {
            id: 'eliza',
            name: 'Eliza Soroga',
            description: 'パフォーミングアーティスト',
            url: 'http://www.elizasoroga.com/',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
$bg: var(--accentl1);

.section {
  --side-pad: 5%;

  background: $bg;
  width: 100%;
  overflow-x: hidden;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
}
h1 {
  margin-left: var(--side-pad);
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
