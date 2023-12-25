<template>
  <PageSection class="section" id="apply">
    <div class="contentcolumn">
      <h1>Apply</h1>

      <div class="columns">
        <div class="residency">
          <h2 v-if="locale === 'ja'">レジデンス</h2>
          <h2 v-else>Residency</h2>

          <p>
            <template v-if="locale === 'ja'">
              <p>
                Bridge to
                Kyotoは、「都市」をテーマに分野・文化・国籍を超えた活動を行うための場所です。海外を中心に、国内外から1〜6ヶ月の単位で「アーバニスト・イン・レジデンス」として実践者を受け入れ、地元のコミュニティや活動とつなぐ手助けをします。応募は、年間を通して随時可能です。
              </p>
              アーバニスト・イン・レジデンスの対象者
              *建築、都市デザイン・プランニング、市民参加、コミュニティマネジメント、不動産、都市に関するテーマで活動を行うジャーナリズム、アートなどに関わる方々
              - 英語、あるいは日本語での日常会話ができる方 -
              生活費、家賃、旅費などを自己負担できる方 -
              レジデンス期間中に、最低1回はワークショップ、イベント、展示などを自発的に開催できる方
              - 年齢、宗教、ジェンダーなどに関わらず誰でもご応募頂けます

              <p>
                こちらが提供するもの
                <ul>
                  <li> 滞在場所、オフィススペース（家具、Wifi付き）</li>
                  <li>キッチン、バルコニー、庭、お風呂やリビングなどのコモンスペース（共用）</li>
                  <li>イベントやワークショップ開催に際しての場所の提供と最低限のサポート</li>
                  <li> 滞在者の活動内容のプロモーションとネットワーキングのお手伝い</li>
                  <li> 海外のアーバニストの紹介</li>
                </ul>
               
                
                
               
               
              </p>

              <p>
                費用 プライベートルーム +
                オフィススペース、滞在中最低1回のコミュニティスペースの利用
                ¥70,000 + ¥5,000（共用費） *
                1ヶ月〜6ヶ月以外の滞在期間をご希望の方はご連絡ください。
              </p>
            </template>
            <template v-else
              >Bridge to Kyoto is a place for trans-disciplinary &amp;
              trans-national activities centered on the topic of “the city”. It
              encourages mutual learning and collaborative practices of urbanism
              transnationally. We are looking for urbanists who want to stay
              with us for a period of 1–6 months, who are interested in doing
              research in Kyoto or Japan in general, and who want to connect
              with local practitioners. You can apply anytime throughout the
              year!</template
            >
          </p>
          <!--           
          <h3>
            <template v-if="locale === 'ja'"
              >アーバニスト・イン・レジデンスの対象者</template
            >
            <template v-else>Who is it for?</template>
          </h3>
          <ul>
            <template v-if="locale === 'ja'">
              <li>
                建築、都市デザイン、まちづくり、プランニング、市民参加、コミュニティマネジメント、不動産、ジャーナリズムなどに関わる方々
              </li>
              <li>
                都市や公共空間をテーマとした活動を積極的に行っているアーティスト
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
              <li>
                年齢、宗教、ジェンダーなどに関わらず誰でもご応募頂けます
              </li>
            </template>
            <template v-else>
              <li>
                Those who mainly work in the fields of
                architecture, urban design and planning,
                citizen participation, community management,
                journalism, or art related to the topic of
                urbanism
              </li>
              <li>
                Those who can communicate fluently in
                English or Japanese (Our daily communication
                is mainly in English)
              </li>
              <li>
                Those who can cover their own travel
                expenses and living expenses during their
                stay
              </li>
              <li>
                Those who can participate in interviews via
                the Internet (if they pass the first phase
                of the application process)
              </li>
              <li>
                Those who are willing to organize &amp;
                participate in workshops or events during
                their stay — at least one event or workshop
                that is open to the public is required to be
                organized by the applicant
              </li>
              <li>
                There are no limitations concerning age,
                religion, sexual preference, or background
              </li>
            </template>
          </ul>
          <h3>
            <template v-if="locale === 'ja'"
              >こちらが提供するもの</template
            >
            <template v-else>What we provide</template>
          </h3>
          <ul>
            <template v-if="locale === 'ja'">
              <li>
                プライベートルーム、オフィススペース（家具、Wifi付き）
              </li>
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
            </template>
            <template v-else>
              <li>
                A room for living and working (furnished,
                with wifi)
              </li>
              <li>
                Access to common spaces (kitchen, terrace,
                garden, bathroom, and living room)
              </li>
              <li>
                The possibility to take part or be part of
                events and workshops
              </li>
              <li>
                Support in locating events, resources, and
                connections relevant to the fellows’
                research interests
              </li>
              <li>
                Support to create self-initiated public
                events or works
              </li>
              <li>
                Promotion and exhibition of the fellows’
                work both online and locally
              </li>
            </template>
          </ul>

          <h3>
            <template v-if="locale === 'ja'">費用</template>
            <template v-else>Price</template>
          </h3>
          <div >
            <template v-if="locale === 'ja'">
              <p>
                プライベートルーム +
                オフィススペース、滞在中最低1回のコミュニティスペースの利用
              </p>
              <p>
                <b>¥70,000 + ¥5,000（共用費）</b>
              </p>
              <div class="sub">
                ※
                1ヶ月〜6ヶ月以外の滞在期間をご希望の方はご連絡ください。
              </div>
            </template>
            <template v-else>
              <p>Stay between 1–6 months</p>
              <p>
                Includes: private room + office use +
                minimum 1 day workshop / event /
                presentation
              </p>
              <p>
                <b
                  >¥70,000 + ¥5,000 utility fee per month</b
                >
              </p>
              <div class="sub">
                Please consult us if you want to stay less
                than 1 month / more than 6 months
              </div>
            </template>
          </div> 

          <ApplyButton
            class="applybutton button"
            label="Apply for Residency"
            :reverse="true"
            target="https://docs.google.com/forms/d/e/1FAIpQLSfE7Pf0-G1MoVrvJR4YHYq1rXk8SGwUnXP8xW7Njhaq3Li7NA/viewform"
          />-->

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfE7Pf0-G1MoVrvJR4YHYq1rXk8SGwUnXP8xW7Njhaq3Li7NA/viewform"
            target="_blank"
            class="button"
          >
            <div class="invert">Apply for Residency</div>
          </a>
        </div>

        <div class="coworking">
          <h2 v-if="locale === 'ja'">コワーキング</h2>
          <h2 v-else>Coworking</h2>
          <p>
            <template v-if="locale === 'ja'">
日々のパソコン社業や読書など、月契約でのコワーキング利用が可能です。
<ul>
  <li>入会金 5,500円が必要です。</li>
  <li>オプションとして登記利用が 5,500円で可能です。</li>
  <li>ゲストを会議室に呼ぶ場合は無料ですが、フリースペース利用時には1ドリンク必要です。</li>
  <li>備え付けの机・椅子の利用が可能です。</li>
  <li>駐輪場は、フルタイム会員：1,650円/月・週末会員：1,100円/月 で1台ご利用いただけます。</li>
  <li>ロッカーの利用が可能です。（大2,750円/月, 中2,200円/月, 小1,650円/月）</li>
  <li>記載料金はすべて消費税込みの価格です。</li>
</ul>



            </template>
            <template v-else>a</template>
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfE7Pf0-G1MoVrvJR4YHYq1rXk8SGwUnXP8xW7Njhaq3Li7NA/viewform"
            target="_blank"
            class="button"
          >
            <div class="invert">Apply for Coworking</div>
          </a>
        </div>

        <div class="studio">
          <h2 v-if="locale === 'ja'">シェアスタジオ</h2>
          <h2 v-else>Shared Studio</h2>
          <p>
            <template v-if="locale === 'ja'">
              洋館部分の2階は、シェアスタジオとして月単位で入居頂けます。オープンスタジオを定期的に開催し、地域に開いたシェアスタジオとなる予定です。
              <ul>
                <li>1区画 3×2.6m程度、計3~4区画</li>
                 <li>ジャンルやキャリアは問いません。アート、デザイン、建築、工芸、印刷など、幅広く創作活動に携わる方を幅広く募集しています。</li>
                  <li>利用料月額: 税込28,000円 (光熱費、運営費含む)</li>
                   <li>敷金としてスタジオ利用料1ヶ月分が必要です（退去後返却されます）</li>
                   <li>占有ではなく、オープンなスタジオとして使用するため、定期的に見学者などが入ってくることが大丈夫な方。</li>
                   <li>1階のトイレ、洗面所、台所なども使用頂けます。</li>
              </ul>
              

</template>
            <template v-else>a</template>
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfE7Pf0-G1MoVrvJR4YHYq1rXk8SGwUnXP8xW7Njhaq3Li7NA/viewform"
            target="_blank"
            class="button"
          >
            <div class="invert">Apply for Shared Studio</div>
          </a>
        </div>

        <div class="spaceRental">
          <h2 v-if="locale === 'ja'">スペースレンタル</h2>
          <h2 v-else>Space Rental</h2>

          <p>
            <template v-if="locale === 'ja'">
                <p>
              建築、デザイン、ものづくりなどをテーマにしたイベント、ワークショップ、展示などの企画を常時応募しています。
            </p>
              <p>  
<ul>
<li>建築、都市デザイン・プランニング、市民参加、コミュニティマネジメント、不動産、都市に関するテーマで活動を行うジャーナリズム、アートなどに関わる活動を対象とします</li>
<li>企画運営、スタッフ、参加者管理、イベントページ作成や参加者募集は基本的に持ち込みとさせて頂きます</li>
<li>￥20,000 / 日</li>
</ul>
        </p>     

<p>

こちらから提供するもの
<ul>
  <li>プロジェクター、スピーカー、文房具やホワイトボードなど基本的なツール類の貸し出し</li>
  <li>イベント拡散のサポート</li>
  <li>海外の方も参加する場合、英語でのサポートも可能（別料金）</li>
</ul>

</p>


              
              
              </template
            >
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
          </p>

          <!-- <h3>
            <template v-if="locale === 'ja'">詳細</template>
            <template v-else>Details</template>
          </h3>

          <p >
            <template v-if="locale === 'ja'">
              建築、都市デザイン・プランニング、市民参加、コミュニティマネジメント、不動産、ジャーナリズムなどの活動や、都市や公共空間をテーマとしたアート活動を対象としています。企画運営、スタッフ、参加者管理、イベントページ作成や参加者募集は基本的に応募者の責任とさせて頂きます。金額や条件などは
              <a
                href="mailto:bridgetoresidency@gmail.com"
                target="_blank"
                >メールにてご相談ください。</a
              >
            </template>
            <template v-else>
              Activities in the field of architecture, urban
              design and planning, citizen participation,
              community management, journalism, art that are
              related to the topic of urbanism. Applicants
              are responsible to organize and manage event
              logistics by themselves.
              <a
                href="mailto:bridgetoresidency@gmail.com"
                target="_blank"
                >Email us</a
              >
              for pricing and details.
            </template>
          </p>

          <h3>
            <template v-if="locale === 'ja'"
              >こちらが提供するもの</template
            >
            <template v-else>What we provide</template>
          </h3>

          <ul>
            <template v-if="locale === 'ja'">
              <li>イベントスペース</li>
              <li>プロジェクター</li>
              <li>スピーカー</li>
              <li>
                文房具やホワイトボードなど基本的なツール類の貸し出し
              </li>
              <li>イベント拡散のサポート</li>
              <li>
                海外の方も参加する場合、英語でのサポート
              </li>
            </template>
            <template v-else>
              <li>Event space</li>
              <li>
                Basic tools such as pens, whiteboard,
                speaker, projector
              </li>
              <li>
                Support in promoting your event (both in
                Japanese and English)
              </li>
              <li>Support in communication in Japanese</li>
            </template>
          </ul> -->

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe0iPDaULQMc6BfS4puRMV0rfJcdrViyUOg-jjcSzefF_ivwA/viewform"
            target="_blank"
            class="button"
          >
            <div class="invert">Apply for Event or Workshop</div>
          </a>
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import * as state from "~/assets/state";
const i18n = useI18n();
const locale = i18n.locale;
</script>

<style lang="scss" scoped>
.section {
  --bg: var(--primaryd2);
  background: var(--primaryd2);
  color: white;
  padding-bottom: 10vh;
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    padding-bottom: 5vh;
    background: var(--primaryd2);
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
    // background: var(--primaryd3);
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
  text-transform: uppercase;

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

.indent {
  margin-left: 1.5em;
}
</style>
