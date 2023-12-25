<template>
  <PageSection class="section" id="space">
    <div
      v-lazy:background-image="'/assets/img/2024/20231202_kyoto_238_4000.jpg'"
      class="interstitial"
    >
      <div class="overlay"></div>
    </div>

    <div class="contentcolumn">
      <h1>Our Spaces</h1>

      <div class="leftright">
        <div class="sticky">
          <div class="overlayTitle smallcaps">Bridge Studio</div>
          <img
            src="/assets/img/bridgeStudio.svg"
            style="mix-blend-mode: multiply; padding-bottom: 300px"
          />
        </div>
        <div class="text">
          <div
            ref="intro"
            label="intro"
            class="textsection"
            :class="{
              active: true,
            }"
          >
            <template v-if="locale === 'ja'">
              <p>
                元々小児科病院として使われていた、1932年（昭和7年）築の「Bridge
                Studio」。23年間の空き家期間を経て、2024年1月に新しい活動をスタートします。洋館と数寄屋造りという2つの顔を持ち合わす特徴的な建物で、残置物の掃除やリノベーションをボランティアの方々の協力も頂きながら行い、建造物保存に取り組んでいます。元診察室や待合室、居住空間だった場所も含め、1階・2階で合計8部屋。アーティスト・イン・レジデンス、コワーキングスペース、シェアアトリエ、レンタルスペースなどとして広くコミュニティを巻き込みながら、改修費用の工面を行なっています。
              </p>
              <p></p>
            </template>
            <template v-else>
              <p>
                Bridge To Kyoto is based in an old, postwar, Kyoto-style home
                with a stream flowing in front and a bridge (yes, the name isn't
                only metaphorical!) crossing over it to enter. After a
                renovation in 2019, it has found new life as a creative
                residence and community space. Though small, it functions fully
                as a residence as well as an event, gallery, and workshop space.
              </p>
              <p>
                Having remodeled a large portion of the space by hand, we
                welcome all those with a DIY spirit. On top of that, we use
                renewable energy, try to limit plastic and one-time-use products
                as much as possible, and do our best to keep our establishment
                zero-waste. We're working to continue to shift the conversation
                around how valuable Japan's old and vacant houses are, and how
                possible it is renovate them using materials that are good for
                the environment.
              </p>
            </template>
          </div>

          <div
            ref="residence"
            label="residence"
            class="textsection"
            :class="{
              active: true,
            }"
          >
            <h2>Residence</h2>
            <template v-if="locale === 'ja'">
              <p>
                Bridge
                Studioでは、京都で滞在制作を行いたいアーティストやデザイナー、リサーチャー、文筆家などを積極的に受け入れています。数週間〜3ヶ月程度の中長期滞在が基本です。詳しくは、下記のAPPLY項目をご参照ください。
              </p>
            </template>
            <template v-else>
              <p>
                We currently don't have a room open for residency (we live
                here!) but while we're abroad we rent the whole house to
                creative-minded people who are also interested in hosting pop-up
                exhibitions &amp; events in our space during their stay. We're
                also planning to expand to more spaces in the same neighborhood
                in Kyoto, so message us if you're looking for a residency!
              </p>
            </template>
          </div>

          <div
            ref="workshop"
            label="workshop"
            class="textsection"
            :class="{
              active: true,
            }"
          >
            <h2>Shared Studio</h2>
            <template v-if="locale === 'ja'">
              洋館部分の2階は、オープンなシェア工房になっています。随時入居アーティストを募集しています。詳しくは、下記のAPPLY項目をご参照ください。
            </template>

            <template v-else>
              <p>
                The library is regularly open to the public, showcasing our
                collection of publications and items in the fields of
                architecture and urbanism with the intention of creating a hub
                for open research and dialogue.
              </p>
            </template>

            <h2>Gallery & Event Space</h2>
            <template v-if="locale === 'ja'">
              <p>
                1階のコモンスペースは、ギャラリーやイベントスペースとして使用できます。
              </p>
              <!-- <p>
                ◉ライブラリー利用方法<br />最大収容人数：10名程度<br />利用可能日時:
                毎週土曜日（変動あり）<br />利用時間：11:00～17:00<br />利用料金：無料（3月のみ）<br />設備：WIFI・冷暖房・トイレ<br />お申し込み方法：InstagramかfacebookにてDM
              </p> -->
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
                Our tatami-floored living &amp; dining spaces double as
                community space for events of all kinds, such as exhibitions of
                your work, meetups to engage and collaborate with local
                urbanists, and more. There are also regularly scheduled
                city-related workshops and events held in the community space,
                outside of what the residents themselves organize. Follow our
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
                for more information about our events!
              </p>
              <p>The space has a capacity of about 10–15 people.</p>
            </template>
          </div>

          <div
            ref="bridge"
            label="bridge"
            class="textsection"
            :class="{
              active: true,
            }"
          >
            <h2>Coworking Space</h2>
            <template v-if="locale === 'ja'">
              <p>
                会員の皆様には、コワーキングスペースとしての使用が可能です。
              </p>
            </template>
            <template v-else>
              <p>
                There's a stream running in front of our space, and we have the
                area's only private bridge. There's also a small garden, and
                anyone interested in urban gardening is welcome to participate
                in its upkeep and expansion.
              </p>
            </template>
          </div>
        </div>
      </div>

      <div class="spacer martopbig padtopbig"></div>

      <div class="relative padtopbig padbotbig">
        <div class="fullBg"></div>

        <div class="overlayTitle smallcaps">Bridge To Kyoto</div>

        <div class="leftright padbotbig">
          <img
            src="/assets/img/bridgeTo.svg"
            class="flip"
            style="mix-blend-mode: multiply"
          />
          <div class="text">
            <div
              ref="intro"
              label="intro"
              class="textsection marnone"
              :class="{
                active: true,
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
                  Bridge To Kyoto is based in an old, postwar, Kyoto-style home
                  with a stream flowing in front and a bridge (yes, the name
                  isn't only metaphorical!) crossing over it to enter. After a
                  renovation in 2019, it has found new life as a creative
                  residence and community space. Though small, it functions
                  fully as a residence as well as an event, gallery, and
                  workshop space.
                </p>
                <p>
                  Having remodeled a large portion of the space by hand, we
                  welcome all those with a DIY spirit. On top of that, we use
                  renewable energy, try to limit plastic and one-time-use
                  products as much as possible, and do our best to keep our
                  establishment zero-waste. We're working to continue to shift
                  the conversation around how valuable Japan's old and vacant
                  houses are, and how possible it is renovate them using
                  materials that are good for the environment.
                </p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import * as state from "~/assets/state";
const i18n = useI18n();
const locale = i18n.locale;

// data() {
//   return {
//     observer: null,
//     activeItem: 'intro',
//   }
// },
// computed: {
//   instersectionThreshold() {
//     return true ? 0.1 : 0.9
//   },
// },
// mounted() {
//   let toObserve = [
//     $refs.intro,
//     $refs.residence,
//     $refs.workshop,
//     $refs.bridge,
//   ]
//   observer = new IntersectionObserver(
//     intersectEvent,
//     {
//       threshold: instersectionThreshold,
//     },
//   )
//   toObserve.forEach((el) => observer.observe(el))
// },
// beforeDestroy() {
//   observer.disconnect()
//   observer = null
// },
// methods: {
//   intersectEvent(entries, observer) {
//     entries.forEach((entry) => {
//       // console.log(entry.intersectionRatio, entry.target)
//       if (
//         !true &&
//         entry.intersectionRatio >
//           instersectionThreshold
//       )
//         activeItem =
//           entry.target.getAttribute('label')
//     })
//   },
// },
</script>

<style lang="scss" scoped>
.section {
  --bg: #a2ffc4;
  background: var(--bg);

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
}

.overlayTitle {
  font-size: 2em;
  display: inline-block;
  background: var(--text);
  color: white;
  padding: 0.4em 0.4em 0.3em 0.4em;
  line-height: 1;
  position: absolute;
  top: 15%;
  left: -5em;

  mix-blend-mode: multiply;
}

img {
  transform: scale(1.5);
  transform-origin: top right;

  &.flip {
    transform: scale(-1.5, 1.5);
    transform-origin: top center;
  }
}

.leftright {
  width: 100%;
  display: flex;
  align-items: flex-start;
  position: relative;
  justify-content: space-between;

  & > * {
    width: 45%;
  }

  @media (max-width: 768px) {
    display: block;

    & > * {
      width: 100%;
    }
  }
}

.sticky {
  mix-blend-mode: multiply;
  position: sticky;
  top: 15vh;
  z-index: 3;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
  }
}
.house {
  width: 180%;
  position: relative;
  left: -70%;

  @media (max-width: 768px) {
    width: 145%;
    left: -40%;
    padding: 12vh 0 4vh 0;
    background: var(--bg);
  }
}

.mobilehouse {
  position: relative;
  z-index: 1;
  width: 200%;
  left: -80%;
  margin-bottom: -60%;
  margin-top: -20%;

  &.workshop {
    margin-bottom: -30%;
    margin-top: -20%;
    left: -100%;
  }

  &.bridge {
    width: 120%;
    margin-bottom: -5%;
    margin-top: -25%;
    left: -20%;
  }
}

h1 {
  padding-top: 30px;
  margin-bottom: 1em;
  position: relative;
  z-index: 4;

  @media (max-width: 768px) {
    margin-bottom: -1.6em;
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
  margin-bottom: 20em;
  transition: all 0.2s;

  &:not(.active) {
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    margin-bottom: 5em;
  }
}

.fullBg {
  position: absolute;
  top: 0;
  left: -100vw;
  right: -100vw;
  bottom: 0;
  background: var(--bg);
  filter: saturate(0.9) brightness(1.1);
}

.contentcolumn {
  padding-bottom: 0;
}
</style>
