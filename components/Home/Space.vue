<template>
  <section class="v2" id="space">
    <div class="light"></div>
    <div
      v-lazy:background-image="
        '/img/2024/20231202_kyoto_238_4000.jpg'
      "
      class="interstitial shadow"
      style="min-height: 30em"
    ></div>

    <div class="contentcolumn">
      <h1>Our Spaces</h1>

      <div class="leftright">
        <div class="sticky">
          <!-- <div class="overlayTitle">
            <img src="/img/logos/bridgeStudio.svg" />
          </div> -->

          <BridgeStudioInteractive
            class="desktop"
            :activeItem="activeItem"
          />
        </div>
        <div class="text">
          <div
            ref="$intro"
            label="intro"
            class="textsection"
            :class="{
              active: activeItem === 'intro',
            }"
          >
            <BridgeStudioInteractive
              class="mobile marbot"
              activeItem="intro"
            />
            <template v-if="locale === 'ja'">
              <p>
                元々は小児科病院として使われていた、1934年（昭和9年）築の「Bridge
                Studio」。23年間の空き家期間を経て、2024年2月に新しい活動をスタートします。元診察室や待合室、居住空間だった場所も含め、1階・2階で合計8部屋。外観は洋館でありつつも、和の内装との組み合わせがユニークな建物です。アーティスト・イン・レジデンスやシェアアトリエ、作業スペース、イベントスペースなどとして広くコミュニティを巻き込みながら、建物保存のための改修を行っています。
              </p>
            </template>
            <template v-else>
              <p>
                Originally used as a pediatric hospital,
                <b>Bridge Studio</b> was left vacant for 23
                years. In February 2024, it is reborn as our
                largest and newest location. There are a
                total of eight rooms in use across two
                floors, including a former examination room,
                waiting room, and living space. The building
                itself has a unique architectural blend of
                half Western and half Japanese; it is being
                carefully renovated to preserve its
                character and history.
              </p>
            </template>
          </div>

          <div
            ref="$residence"
            label="residence"
            class="textsection"
            :class="{
              active: activeItem === 'residence',
            }"
          >
            <BridgeStudioInteractive
              class="mobile"
              style="margin-bottom: -12em"
              activeItem="residence"
            />
            <h2>Residence</h2>
            <template v-if="locale === 'ja'">
              <p>
                Bridge
                Studioでは、京都で滞在制作を行いたいアーティストやデザイナー、リサーチャー、文筆家などを積極的に受け入れています。1ヶ月からの中長期滞在が基本です。詳しくは、下記のAPPLY項目をご参照ください。
              </p>
            </template>
            <template v-else>
              <p>
                Bridge Studio welcomes artists, designers,
                researchers, and writers who wish to stay
                and work in Kyoto. We host residents for
                medium-to-long-term stays of at least one
                month. For details, please refer to the
                Apply section below.
              </p>
            </template>
          </div>

          <div
            ref="$studio"
            label="studio"
            class="textsection"
            :class="{
              active: activeItem === 'studio',
            }"
          >
            <BridgeStudioInteractive
              class="mobile"
              style="margin-bottom: -8em"
              activeItem="studio"
            />
            <h2>Shared Studio</h2>
            <template v-if="locale === 'ja'">
              洋館部分の2階は、オープンなシェアアトリエになっています。随時入居アーティストを募集しています。詳しくは、下記のAPPLY項目をご参照ください。
            </template>

            <template v-else>
              <p>
                The second floor of the Western-style part
                of the building is an open shared studio. We
                are always looking for artists to use the
                space! For details, please refer to the
                Apply section below.
              </p>
            </template>
          </div>

          <div
            ref="$gallery"
            label="gallery"
            class="textsection"
            :class="{
              active: activeItem === 'gallery',
            }"
          >
            <BridgeStudioInteractive
              class="mobile"
              style="margin-bottom: -4em"
              activeItem="gallery"
            />
            <h2>Gallery & Event Space</h2>
            <template v-if="locale === 'ja'">
              <p>
                1階のコモンスペースは、ギャラリーやイベントスペースとして使用できます。フェロー会員の方々には、コワーキングスペースとしてもご使用頂けます。
              </p>
              <p>
                イベント内容と日時は
                <a
                  href="https://www.facebook.com/bridgetokyoto/"
                  target="_blank"
                  >Facebook</a
                >か
                <a
                  href="https://www.instagram.com/bridgetokyoto/"
                  target="_blank"
                  >Instagram</a
                >からご確認ください。
              </p>
            </template>
            <template v-else>
              <p>
                The common space on the first floor can be
                used as a gallery or event space. Fellowship
                members can also use it as a coworking
                space. Follow us on
                <a
                  href="https://www.facebook.com/bridgetokyoto/"
                  target="_blank"
                  >Facebook</a
                >
                or
                <a
                  href="https://www.instagram.com/bridgetokyoto/"
                  target="_blank"
                  >Instagram</a
                >
                for dates/info about our events.
              </p>
            </template>
          </div>

          <div
            ref="$coworking"
            label="coworking"
            class="textsection"
            :class="{
              active: activeItem === 'coworking',
            }"
          >
            <BridgeStudioInteractive
              class="mobile"
              activeItem="coworking"
            />
            <h2>Clinic</h2>
            <template v-if="locale === 'ja'">
              <p>
                小児科としてこの建物が使われていた時代の古い書籍や薬瓶などのヴィンテージアイテムが残った部屋です。イベントや古物のフリーマーケットなどを定期的に開催しています。
              </p>
            </template>
            <template v-else>
              <p>
                This space retains vintage items such as old
                books and medicine bottles from the days
                when this building was used as a
                pediatrician's clinic. Events and flea
                markets for antique items are held here
                regularly.
              </p>
            </template>
          </div>
        </div>
      </div>

      <div class="spacer martopbig padtopbig desktop"></div>

      <div class="relative padtopbig padbotbig">
        <!-- <div class="overlayTitle">
          <img src="/img/logos/bridgeToKyoto.svg" />
        </div> -->

        <div class="leftright padbotbig marbotbig">
          <img
            ref="$bridgeToKyoto"
            label="bridgeToKyoto"
            src="/img/bridgeToWhite.svg"
            class="screen"
            :class="{
              active: activeItem === 'bridgeToKyoto',
            }"
          />
          <div class="text martopbig">
            <div
              class="textsection marnone"
              :class="{
                active: activeItem === 'bridgeToKyoto',
              }"
            >
              <template v-if="locale === 'ja'">
                <p>
                  戦後に建てられた一軒家「Bridge
                  To」。目の前には川が走り、このエリアで唯一という個人用の橋がかかっています。2019年に改装・補強をし、アーバニストのクリエイティブレジデンスおよびコミュニティスペースとしてオープンしました。現在はチームの事務所兼住居として使用しながら、イベント・ギャラリー・ワークショップなど多目的に活用しています。
                </p>
                <p></p>
              </template>
              <template v-else>
                <p>
                  <b>Bridge To</b> is our base of
                  operations, housed in a post-war building
                  near Bridge Studio. Since its renovation
                  in 2019 it has functioned as a creative
                  residency and community space for
                  urbanists. It is primarily an office and
                  residence for the team, but it also
                  functions as a home for events, galleries,
                  workshops, and other multi-purpose
                  activities.
                </p>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="padbig desktop"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

const activeItem = ref('intro')
const observer = ref<IntersectionObserver | null>(null)
const instersectionThreshold = ref(0.1)

const $residence = ref<HTMLElement | null>(null),
  $studio = ref<HTMLElement | null>(null),
  $gallery = ref<HTMLElement | null>(null),
  $coworking = ref<HTMLElement | null>(null),
  $bridgeToKyoto = ref<HTMLElement | null>(null),
  $intro = ref<HTMLElement | null>(null)

onMounted(() => {
  let toObserve = [
    $intro.value,
    $residence.value,
    $studio.value,
    $gallery.value,
    $coworking.value,
    $bridgeToKyoto.value,
  ].filter((el) => el !== null) as HTMLElement[]
  console.log(toObserve)
  observer.value = new IntersectionObserver(
    intersectEvent,
    {
      threshold: instersectionThreshold.value,
      rootMargin: '-30% 0px -30% 0px',
    },
  )
  toObserve.forEach((el) => {
    observer.value?.observe(el)
  })
})

onBeforeUnmount(() => {
  observer.value?.disconnect()
  observer.value = null
})

function intersectEvent(entries, observer) {
  entries.forEach((entry) => {
    console.log(
      entry.target.getAttribute('label'),
      entry.intersectionRatio,
      entry,
    )
    if (
      entry.intersectionRatio > instersectionThreshold.value
    )
      activeItem.value = entry.target.getAttribute('label')
  })
}
</script>

<style lang="scss" scoped>
.section {
  @media (max-width: 900px) {
    overflow-x: hidden;
  }
}

.overlayTitle {
  display: inline-block;
  position: absolute;
  top: 2em;
  left: -5em;
  z-index: 3;

  img {
    background: var(--base-d);
    padding: 1em 2em;
    width: 12em;
  }
}

img,
svg {
  width: 100%;
  transform: scale(1.5);
  transform-origin: top right;

  &.flip {
    transform: scale(-1.5, 1.5);
    transform-origin: top center;
  }

  transition: opacity 0.2s;
  &:not(.active) {
    opacity: 0.2;
  }

  @media (max-width: 900px) {
    transform: none;
    max-width: 700px;
  }
}

.desktop {
  @media (max-width: 900px) {
    display: none;
  }
}
.mobile {
  display: none;
  @media (max-width: 900px) {
    display: inherit;
  }
}

.leftright {
  width: 100%;
  display: flex;
  position: relative;
  & > * {
    width: 45%;
  }
  gap: 0 10%;

  @media (max-width: 900px) {
    display: block;

    & > * {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

.sticky {
  align-self: flex-start;
  position: sticky;
  top: 15vh;
  z-index: 3;
  padding-bottom: 10em;

  @media (max-width: 900px) {
    position: relative;
    top: 0;
    padding-bottom: 0;
  }
}

h1 {
  padding-top: 30px;
  margin-bottom: 1em;
  position: relative;
  z-index: 4;

  @media (max-width: 900px) {
    // margin-bottom: -1.6em;
  }
}

h2,
p {
  position: relative;
  z-index: 2;
}

p {
  margin-bottom: 1.2em;
}

.textsection {
  margin: 10em 0 20em 0;
  transition: all 0.2s;

  &:not(.active) {
    opacity: 0.2;
  }

  @media (max-width: 900px) {
    margin: 0 0 5em 0;
  }
}

.contentcolumn {
  padding-bottom: 0;
}
</style>
