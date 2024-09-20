<template>
  <section class="v3 shadowFromTop" id="apply">
    <div class="light v3"></div>

    <div class="contentcolumn">
      <h1>Apply</h1>

      <div class="columns">
        <div class="residency span2 textcolumn">
          <h2 v-if="locale === 'ja'">
            <img
              src="/img/icons/residency.svg"
              class="applyIcon"
            />
            レジデンス
          </h2>
          <h2 v-else>
            <img
              src="/img/icons/residency.svg"
              class="applyIcon"
            />
            Residency
          </h2>

          <div
            class="openCallBanner"
            v-if="state.openCall.value"
          >
            <template v-if="locale === 'ja'">
              <h3>Open Call</h3>
              <div>
                現在、来年度のレジデンスの応募を受け付けています！詳細は以下をご覧ください。
              </div>
            </template>
            <template v-else>
              <h3>Open Call</h3>
              <div>
                We are currently accepting applications for
                residencies for the coming year!
              </div>
              <div class="martoptiny themes">
                Our current research themes are:
                <ul>
                  <li>Community engagement</li>
                  <li>Alternative urbanism</li>
                  <li>Critical making</li>
                  <li>
                    Space design, architecture, carpentry
                  </li>
                  <li>Cross-cultural research</li>
                </ul>
              </div>

              <div class="bottomHighlight">
                Additionally, we're looking for
                videographers and carpenters who might want
                to help us on projects for the space in
                exchange for a reduced rate! Let us know if
                you're interested.
              </div>
            </template>
          </div>

          <div class="grid2 gapsmall marbotsmall">
            <img
              class="sectionImage"
              src="/img/2024_2/8.jpg"
            /><img
              class="sectionImage"
              src="/img/2024_2/15.jpg"
            />
          </div>

          <div>
            <template v-if="locale === 'ja'">
              <div>
                <!-- Bridge to
                Kyotoは、「都市」をテーマに分野・文化・国籍を超えた活動を行うための場所です。海外を中心に、国内外から1〜6ヶ月の単位で「アーバニスト・イン・レジデンス」として実践者を受け入れ、地元のコミュニティや活動とつなぐ手助けをします。応募は、年間を通して随時可能です。 -->
                年間を通して随時アーティスト・イン・レジデンス滞在制作希望者を募集しています。費用や待遇についてはお問合せください。
              </div>
              <br />
              対象者
              <ul>
                <li>
                  アート、デザイン、建築、工芸などに関わる方、研究者、リサーチャー、文筆家など
                </li>
                <li>
                  英語、あるいは日本語での日常会話ができる方
                </li>
                <li>
                  生活費、家賃、旅費などを自己負担できる方
                </li>
                <li>
                  レジデンス期間中に、最低1回はワークショップ、イベント、展示などを自発的に開催できる方
                </li>
              </ul>

              年齢、宗教、ジェンダーなどに関わらず誰でもご応募頂けます。
              <!-- <div>
                こちらが提供するもの
                <ul>
                  <li>滞在場所、オフィススペース（家具、Wifi付き）</li>
                  <li>
                    キッチン、バルコニー、庭、お風呂やリビングなどのコモンスペース（共用）
                  </li>
                  <li>
                    イベントやワークショップ開催に際しての場所の提供と最低限のサポート
                  </li>
                  <li>
                    滞在者の活動内容のプロモーションとネットワーキングのお手伝い
                  </li>
                  <li>海外のアーバニストの紹介</li>
                </ul>
              </div>

              <div>
                費用 プライベートルーム +
                オフィススペース、滞在中最低1回のコミュニティスペースの利用
                ¥70,000 + ¥5,000（共用費） *
                1ヶ月〜6ヶ月以外の滞在期間をご希望の方はご連絡ください。
              </div> -->
            </template>

            <template v-else>
              We accept residents from Japan and abroad on a
              1-6 month basis, and help them connect with
              local communities and activities. Applications
              are accepted throughout the year.

              <br />
              <h4>Who can apply?</h4>
              <ul>
                <li>
                  Creatives in the fields of art, design,
                  architecture, crafts, research, writing,
                  games, etc.
                </li>
                <li>
                  Those who can speak English or Japanese in
                  daily conversation.
                </li>
                <li>
                  Those who can pay for their own living
                  expenses, rent, travel expenses, etc.
                </li>
                <li>
                  Everyone is welcome to apply regardless of
                  age, religion, gender, etc.
                </li>
              </ul>

              We ask residents to hold at least one
              workshop, event, exhibition, etc. during their
              residency.

              <div>
                <h4>What we offer</h4>
                <ul>
                  <li>
                    Private room (furnished, wifi included)
                  </li>
                  <li>A private workspace</li>
                  <li>
                    Common spaces (kitchen, balcony, garden,
                    bathroom and living room)
                  </li>
                  <li>
                    Venue and support for organizing events
                    and workshops
                  </li>
                  <li>
                    Promotion of your activities and
                    networking assistance
                  </li>
                  <li>Basic translation support</li>
                </ul>
              </div>

              <div>
                <h4>What we expect from you</h4>
                <div class="marleft">
                  <div>
                    We don't ask for any specific artistic
                    output during your stay — your residency
                    could be research-based or
                    production-based, it's up to you.
                    However, at the end of your stay, we
                    expect you to organize an exhibition, a
                    talk, a workshop, etc. to showcase what
                    you've worked on during your stay. It
                    doesn't have to be highly produced, but
                    we hope to have you share your insights
                    and perspectives with the local
                    community.
                  </div>
                </div>
              </div>

              <div>
                <h4>Availability</h4>
                <div class="marleft">
                  <div>
                    We're currently open for residencies
                    starting from March 2025 or beyond.
                  </div>
                  <div class="sub martopsmall">
                    Please be aware that we're a small team
                    receiving a large volume of
                    applications. We will only be able to
                    respond to accepted applicants.
                  </div>
                </div>
              </div>

              <!-- <div>
                <h4>Rates</h4>
                <div class="marleft">
                  <div>
                    <b>Monthly: USD $1200 per month</b>
                  </div>
                  <div>
                    <b>Daily: USD $50 per day</b>
                  </div>
                  <ul class="sub padleftsmall martopsmall">
                    <li>
                      This price includes taxes, utilities,
                      common expenses, and operating costs.
                    </li>
                    <li>
                      Unlimited use of the shared studio and
                      3 days' use of the ground floor for an
                      exhibition or event are included.
                    </li>

                    <li>
                      All money from the residency goes into
                      the renovation and preservation of
                      this historical building.
                    </li>
                    <li>
                      If you are from a less affluent part
                      of the world and cannot afford the
                      residency, let's talk. We'd love to
                      help as much as we can to give you an
                      equal opportunity.
                    </li>
                    <li>
                      Please contact us if you would like to
                      stay for a period other than 1-6
                      months.
                    </li>
                  </ul>
                </div>
              </div> -->
            </template>
          </div>

          <a
            href="https://forms.gle/Aexb7oEZFzB5s1JN7"
            target="_blank"
            class="button martop"
          >
            <div class="secondary">Apply for Residency</div>
          </a>
        </div>

        <div class="studio span2 textcolumn">
          <h2 v-if="locale === 'ja'">
            <img
              src="/img/icons/studio.svg"
              class="applyIcon"
            />
            シェアスタジオ
          </h2>
          <h2 v-else>
            <img
              src="/img/icons/studio.svg"
              class="applyIcon"
            />
            Shared Studio
          </h2>

          <div class="grid2 gapsmall marbotsmall">
            <img
              class="sectionImage"
              src="/img/2024_2/13.jpg"
            />
            <img
              class="sectionImage"
              src="/img/2024_2/14.jpg"
            />
          </div>

          <div>
            <template v-if="locale === 'ja'">
              洋館部分の2階を使用したいアーティストやデザイナーを募集しています。オープンスタジオを定期的に開催し、地域に開いたシェアスタジオとなる予定です。
              <ul>
                <li>
                  ジャンルやキャリアは問いません。アート、デザイン、建築、工芸、印刷など、幅広く創作活動に携わる方を幅広く募集しています。
                </li>
                <!-- <li>利用料月額: 税込28,000円 (光熱費、運営費含む)</li>
                <li>
                  敷金としてスタジオ利用料1ヶ月分が必要です（退去後返却されます）
                </li> -->
                <li>
                  占有ではなく、オープンなスタジオとして使用するため、定期的に見学者などが入ってくることが大丈夫な方。
                </li>
                <li>
                  1階のトイレ、洗面所、台所なども使用頂けます。
                </li>
              </ul>
            </template>
            <template v-else>
              We are looking for artists and designers who
              would like to use the Western-style second
              floor of Bridge Studio as a workspace. We plan
              to hold open studios regularly and become a
              shared studio open to the community.
              <ul class="martopsmall">
                <li>
                  Any form of creator is accepted. We are
                  looking for a wide range of people
                  involved in a wide range of creative
                  activities, including art, design,
                  architecture, crafts, and printing.
                </li>
                <li>
                  One month's worth of studio usage fee is
                  required as a security deposit (to be
                  returned on departure)
                </li>
                <li>
                  As the studio is a workspace and not a
                  living space, be prepared for an active
                  flow of creators and visitors.
                </li>
                <li>
                  You can also use the toilet, washroom, and
                  kitchen (within reason) on the first
                  floor.
                </li>
              </ul>

              <!-- <h4>Cost:</h4>
              <div class="marleft">
                <b>USD $200 per month</b>
                <div class="sub">
                  This price includes taxes, utilities, and
                  operating costs.
                </div>
              </div> -->
            </template>
          </div>

          <a
            href="https://www.noway-form.com/f/c3058789-bcfd-4d48-9b41-8cad9048f5e1"
            target="_blank"
            class="button martop"
          >
            <div class="secondary">
              Apply for Shared Studio
            </div>
          </a>
        </div>

        <div class="coworking">
          <h2 v-if="locale === 'ja'">
            <img
              src="/img/icons/fellowship.svg"
              class="applyIcon"
            />
            コワーキング
          </h2>
          <h2 v-else>
            <img
              src="/img/icons/fellowship.svg"
              class="applyIcon"
            />
            Coworking
          </h2>

          <div class="marbotsmall">
            <img
              class="sectionImage"
              src="/img/2024_2/6.jpg"
            />
          </div>

          <div>
            <template v-if="locale === 'ja'">
              この場所を一緒に活用してくださるフェローを募集しています。
              <br />
              <br />
              個人の方は月額2.5万円、企業の場合は月額4万円で、フェローの方には、
              <ul>
                <li>
                  京都でのサテライトオフィスとしてのワークスペース利用
                </li>
                <li>
                  この場所を使用したイベントやワークショップの企画・開催
                </li>
                <li>
                  定期的な宿泊（1ヶ月以上の占有不可、要相談）
                </li>
                <!-- <li>Bridge Toコミュニティへのアクセス</li>
                <li>
                  海外連携団体や拠点とのコラボレーションやレジデンスの機会の提供
                </li> -->
              </ul>
              などの特典を得られます。
            </template>
            <template v-else>
              Coworking members get access to the common
              spaces of Bridge Studio from 10AM to 6PM, any
              day of the week.
              <br />
              You may work, have meetings, use the
              fridge/kitchen (within reason), and generally
              come and go as you please.
              <!--               
              We are looking for 10 to 20 "fellows" who will
              actively participate in the management,
              planning, and use of
              <b>Bridge Studio</b> in a co-op format, as if
              they were joint renters.
              <br />
              <h4>Fellows get:</h4>
              <ul>
                <li>
                  Use of Bridge Studio as a satellite
                  workspace
                </li>
                <li>
                  Use of the space for events and workshops
                </li>
                <li>
                  Overnight stays at Bridge Studio (Pending
                  discussion, no more than a day or two per
                  month)
                </li>
                <li>
                  Opportunities for collaboration and
                  residency with overseas partner
                  organizations and centers
                </li>
                <li>
                  Direct line of communication with the
                  Bridge To team
                </li>
              </ul> -->

              <!-- <h4>Cost:</h4>
              <div class="marleft">
                <b>USD $150 per month</b>
                <div class="sub">
                  This price includes taxes, utilities, and
                  operating costs.
                </div>
              </div> -->
            </template>
          </div>

          <a
            href="https://www.noway-form.com/f/25184a13-556f-4a14-bd11-f4edcdca0b27"
            target="_blank"
            class="button martop"
          >
            <div class="secondary">Apply for Coworking</div>
          </a>
        </div>

        <div class="spaceRental">
          <h2 v-if="locale === 'ja'">
            <img
              src="/img/icons/event.svg"
              class="applyIcon"
            />
            ギャラリー、イベント
          </h2>
          <h2 v-else>
            <img
              src="/img/icons/event.svg"
              class="applyIcon"
            />
            Space Rental
          </h2>

          <div class="marbotsmall">
            <img
              class="sectionImage"
              src="/img/2024/20231202_kyoto_209_4000.jpg"
            />
          </div>

          <div>
            <template v-if="locale === 'ja'">
              <div>
                建築、デザイン、ものづくりなどをテーマにしたイベント、ワークショップ、展示などの企画を常時応募しています。
              </div>
              <div>
                <ul>
                  <li>
                    アート、デザイン、建築、工芸、ものづくり関係ほか、大学関係の企画など、幅広く募集を受け付けています。
                  </li>
                  <li>
                    企画運営、スタッフ、参加者管理、イベントページ作成や参加者募集は基本的に持ち込みとさせて頂きます。
                  </li>
                  <!-- <li>￥20,000 / 日</li> -->
                </ul>
              </div>

              <!-- <div>
                こちらから提供するもの
                <ul>
                  <li>
                    プロジェクター、スピーカー、文房具やホワイトボードなど基本的なツール類の貸し出し
                  </li>
                  <li>イベント拡散のサポート</li>
                  <li>
                    海外の方も参加する場合、英語でのサポートも可能（別料金）
                  </li>
                </ul>
              </div> -->
            </template>
            <template v-else>
              <div>
                We are open for proposals for events,
                workshops, exhibitions, and more on the
                themes of architecture, design, and
                creation.
              </div>
              <div class="martopsmall">
                <ul>
                  <li>
                    We can accept a wide range of
                    applications, including art, design,
                    architecture, crafts, manufacturing, and
                    university-related projects.
                  </li>
                  <li>
                    We can not provide assistance in the
                    planning, management, staff, event page
                    creation, or marketing of the event.
                  </li>
                </ul>
              </div>

              <div>
                <h4>What we provide:</h4>
                <ul>
                  <li>
                    Rental of basic tools such as
                    projectors, speakers, stationery and
                    whiteboards
                  </li>
                  <li>
                    Basic event publicity on our social
                    channels
                  </li>
                  <li>
                    English language support (separate fee)
                  </li>
                </ul>
              </div>

              <!-- <h4>Cost:</h4>
              <div class="marleft">
                <b>USD $150 per day</b>
                <div class="sub">
                  This price includes taxes.
                </div>
              </div> -->
            </template>
          </div>

          <a
            href="https://www.noway-form.com/f/1712e1e4-5011-4bb5-a72c-af389ca2cf0c"
            target="_blank"
            class="button martop"
          >
            <div class="secondary">
              Apply for Space Rental
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale
</script>

<style lang="scss" scoped>
.section {
  padding-bottom: 10vh;
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    padding-bottom: 5vh;
    background: var(--primary-d2);
  }
}

.contentcolumn {
  position: relative;
  z-index: 2;
}

h1 {
  padding-top: 30px;
}

.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.openCallBanner {
  // text-align: center;
  position: relative;
  padding: 2rem 2rem 1rem 2rem;
  // max-width: 550px;
  margin: 3.2em auto 2em auto;
  color: var(--primary);

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: 100%;
  //   height: 100%;
  //   background: var(--primary-d3);
  //   opacity: 0.5;
  //   // background: radial-gradient(
  //   //   var(--primary-d),
  //   //   transparent
  //   // );
  //   // filter: blur(40px);
  //   z-index: -1;
  // }

  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    --inset: 0rem;
    top: var(--inset);
    left: var(--inset);
    width: calc(100% - calc(var(--inset) * 2));
    height: calc(100% - calc(var(--inset) * 2));
    border: 1px solid var(--primary);
    opacity: 0.5;
  }

  h3 {
    position: absolute;
    top: 0;
    left: 1rem;
    transform: translateY(-50%);
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 0.2em;
    background: var(--primary);
    padding: 0.1rem 1rem;
    color: var(--primary-d2);
    z-index: 3;
  }

  .bottomHighlight {
    margin: 1rem -2rem -1rem -2rem;
    // background: var(--base-d);
    // color: var(--base-d2);
    padding: 1rem 2rem;
    // border-top: 1px solid var(--primary);
    width: calc(100% + 4rem);
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--primary);
      opacity: 0.1;
      z-index: -1;
    }
  }
}

.residency {
  @media (max-width: 768px) {
    padding: 0;
  }
}
.span2 {
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
}

h2 {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.applyIcon {
  height: 1.5em;
  max-width: 1.8em;
}

.event {
  @media (max-width: 768px) {
    margin: -30px -50vw -15vh -50vw;
    padding: 30px 50vw 15vh 50vw;
  }
}

a {
  color: white;
}

p {
  margin: 1em 0;
}

li {
  line-height: 1.5;
  margin-bottom: 0.5em;
}

h2 {
  font-size: 2rem;
  // text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
}

h3 {
  margin-top: 60px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
}

h4 {
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
}

.button {
  margin-top: 1em;
}

.indent {
  margin-left: 1.5em;
}

.themes {
  li {
    margin: 0;
  }
}
</style>
