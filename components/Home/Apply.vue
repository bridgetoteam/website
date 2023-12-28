<template>
  <section class="v3 shadowFromTop" id="apply">
    <div class="light v3"></div>

    <div class="contentcolumn">
      <h1>Apply</h1>

      <div class="columns">
        <div class="coworking">
          <h2 v-if="locale === 'ja'">フェローシップ</h2>
          <h2 v-else>Coworking</h2>
          <div>
            <template v-if="locale === 'ja'">
              共同で「Bridge
              Studio」を借りるような感覚で、運営方針や企画などにも積極的に参加し、この場所を活用してくださる"フェロー”を、10名〜20名程度募集します。
              <br />
              <br />
              フェローの方には、
              <ul>
                <li>京都でのサテライトオフィスとしてのワークスペース利用</li>
                <li>この場所を使用したイベントやワークショップの企画・開催</li>
                <li>定期的な宿泊（1ヶ月以上の占有不可、要相談）</li>
                <li>Bridge Toコミュニティへのアクセス</li>
                <li>
                  海外連携団体や拠点とのコラボレーションやレジデンスの機会の提供
                </li>
              </ul>
              などの特典を得られます。
            </template>
            <template v-else>a</template>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfE7Pf0-G1MoVrvJR4YHYq1rXk8SGwUnXP8xW7Njhaq3Li7NA/viewform"
            target="_blank"
            class="button"
          >
            <div class="secondary">Apply for Coworking</div>
          </a>
        </div>
        <div class="residency">
          <h2 v-if="locale === 'ja'">レジデンス</h2>
          <h2 v-else>Residency</h2>

          <div>
            <template v-if="locale === 'ja'">
              <div>
                <!-- Bridge to
                Kyotoは、「都市」をテーマに分野・文化・国籍を超えた活動を行うための場所です。海外を中心に、国内外から1〜6ヶ月の単位で「アーバニスト・イン・レジデンス」として実践者を受け入れ、地元のコミュニティや活動とつなぐ手助けをします。応募は、年間を通して随時可能です。 -->
                年間を通して随時アーバニスト・イン・レジデンス滞在制作希望者を募集しています。費用や待遇についてはお問合せください。
              </div>
              <br />
              対象者
              <ul>
                <li>
                  アート、デザイン、建築、工芸などに関わる方、研究者、リサーチャー、文筆家など
                </li>
                <li>英語、あるいは日本語での日常会話ができる方</li>
                <li>生活費、家賃、旅費などを自己負担できる方</li>
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
              Bridge to Kyoto is a place for trans-disciplinary &amp;
              trans-national activities centered on the topic of "the city". It
              encourages mutual learning and collaborative practices of urbanism
              transnationally. We are looking for urbanists who want to stay
              with us for a period of 1–6 months, who are interested in doing
              research in Kyoto or Japan in general, and who want to connect
              with local practitioners. You can apply anytime throughout the
              year!
            </template>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfE7Pf0-G1MoVrvJR4YHYq1rXk8SGwUnXP8xW7Njhaq3Li7NA/viewform"
            target="_blank"
            class="button"
          >
            <div class="secondary">Apply for Residency</div>
          </a>
        </div>

        <div class="studio">
          <h2 v-if="locale === 'ja'">シェアスタジオ</h2>
          <h2 v-else>Shared Studio</h2>
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
                <li>1階のトイレ、洗面所、台所なども使用頂けます。</li>
              </ul>
            </template>
            <template v-else>a</template>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfE7Pf0-G1MoVrvJR4YHYq1rXk8SGwUnXP8xW7Njhaq3Li7NA/viewform"
            target="_blank"
            class="button"
          >
            <div class="secondary">Apply for Shared Studio</div>
          </a>
        </div>

        <div class="spaceRental">
          <h2 v-if="locale === 'ja'">スペースレンタル</h2>
          <h2 v-else>Space Rental</h2>

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
            <template v-else
              >You can organize an event, workshop, meetup, etc. at our place to
              introduce your practices or share your ideas! Instead of being a
              regular tourist, organize something engaging here to gain
              awareness of the local community and start building meaningful
              relationships with local practitioners. Our space is not big, but
              it can comfortably fit 10–15 people (depending on the event type),
              and we can help you promote your event and communicate with
              participants in Japanese.</template
            >
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe0iPDaULQMc6BfS4puRMV0rfJcdrViyUOg-jjcSzefF_ivwA/viewform"
            target="_blank"
            class="button"
          >
            <div class="secondary">Apply for Event or Workshop</div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import * as state from "~/assets/state";
const i18n = useI18n();
const locale = i18n.locale;
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
  grid-gap: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

.button {
  margin-top: 1em;
}

.indent {
  margin-left: 1.5em;
}
</style>
