<template>
  <section class="v2" id="space">
    <div class="light"></div>
    <div
      v-lazy:background-image="'/img/2024/20231202_kyoto_238_4000.jpg'"
      class="interstitial shadow"
    ></div>

    <div class="contentcolumn">
      <h1>Our Spaces</h1>

      <div class="leftright">
        <div class="sticky">
          <!-- <div class="overlayTitle">
            <img src="/img/logos/bridgeStudio.svg" />
          </div> -->
          <!-- <img
            class="screen"
            src="/img/bridgeStudioWhite.svg"
            :class="{
              active: activeItem !== 'bridgeToKyoto',
            }"
          /> -->

          <BridgeStudioInteractive class="desktop" :activeItem="activeItem" />
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
            <BridgeStudioInteractive class="mobile marbot" activeItem="intro" />
            <template v-if="locale === 'ja'">
              <p>
                元々は小児科病院として使われていた、1934年（昭和9年）築の「Bridge
                Studio」。23年間の空き家期間を経て、2024年2月に新しい活動をスタートします。元診察室や待合室、居住空間だった場所も含め、1階・2階で合計8部屋。外観は洋館でありつつも、和の内装との組み合わせがユニークな建物です。アーティスト・イン・レジデンスやシェアアトリエ、作業スペース、イベントスペースなどとして広くコミュニティを巻き込みながら、建物保存のための改修を行っています。
              </p>
              <p></p>
            </template>
            <template v-else>
              <p>
                Bridge To is based in an old, postwar, Kyoto-style home with a
                stream flowing in front and a bridge (yes, the name isn't only
                metaphorical!) crossing over it to enter. After a renovation in
                2019, it has found new life as a creative residence and
                community space. Though small, it functions fully as a residence
                as well as an event, gallery, and workshop space.
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
                The library is regularly open to the public, showcasing our
                collection of publications and items in the fields of
                architecture and urbanism with the intention of creating a hub
                for open research and dialogue.
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
            ref="$coworking"
            label="coworking"
            class="textsection"
            :class="{
              active: activeItem === 'coworking',
            }"
          >
            <BridgeStudioInteractive class="mobile" activeItem="coworking" />
            <h2>Former doctor’s room</h2>
            <template v-if="locale === 'ja'">
              <p>
                小児科としてこの建物が使われていた時代の古い書籍や薬瓶などのヴィンテージアイテムが残った部屋です。イベントや古物のフリーマーケットなどを定期的に開催しています。
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
                  Office」。目の前には川が走り、このエリアで唯一という個人用の橋がかかっています。2019年に改装・補強をし、アーバニストのクリエイティブレジデンスおよびコミュニティスペースとしてオープンしました。現在はチームの事務所兼住居として使用しながら、イベント・ギャラリー・ワークショップなど多目的に活用しています。
                </p>
                <p></p>
              </template>
              <template v-else>
                <p>
                  Bridge To is based in an old, postwar, Kyoto-style home with a
                  stream flowing in front and a bridge (yes, the name isn't only
                  metaphorical!) crossing over it to enter. After a renovation
                  in 2019, it has found new life as a creative residence and
                  community space. Though small, it functions fully as a
                  residence as well as an event, gallery, and workshop space.
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
      <div class="padbig desktop"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from "~/assets/state";
const i18n = useI18n();
const locale = i18n.locale;

const activeItem = ref("intro");
const observer = ref<IntersectionObserver | null>(null);
const instersectionThreshold = ref(0.1);

const $residence = ref<HTMLElement | null>(null),
  $studio = ref<HTMLElement | null>(null),
  $gallery = ref<HTMLElement | null>(null),
  $coworking = ref<HTMLElement | null>(null),
  $bridgeToKyoto = ref<HTMLElement | null>(null),
  $intro = ref<HTMLElement | null>(null);

onMounted(() => {
  let toObserve = [
    $intro.value,
    $residence.value,
    $studio.value,
    $gallery.value,
    $coworking.value,
    $bridgeToKyoto.value,
  ].filter((el) => el !== null) as HTMLElement[];
  console.log(toObserve);
  observer.value = new IntersectionObserver(intersectEvent, {
    threshold: instersectionThreshold.value,
    rootMargin: "-30% 0px -30% 0px",
  });
  toObserve.forEach((el) => {
    observer.value?.observe(el);
  });
});

onBeforeUnmount(() => {
  observer.value?.disconnect();
  observer.value = null;
});

function intersectEvent(entries, observer) {
  entries.forEach((entry) => {
    console.log(
      entry.target.getAttribute("label"),
      entry.intersectionRatio,
      entry
    );
    if (entry.intersectionRatio > instersectionThreshold.value)
      activeItem.value = entry.target.getAttribute("label");
  });
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
  margin: 15em 0;
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
