<template>
  <PageSection class="section" id="about">
    <div class="contentcolumn">
      <div class="textcolumn">
        <h1>Newsletter</h1>

        <div v-if="$i18n.locale === 'ja'">
          ニュースレターでは、オープンコールやイベント情報などを不定期でお送りしています（英語）
        </div>
        <div v-else>
          Sign up for our newsletter for upcoming open calls
          and events! No spam — we'll only send mail when we
          actually have something useful to say.
        </div>

        <!-- Begin Mailchimp Signup Form -->

        <div id="mc_embed_signup">
          <form
            action="https://brdg.us11.list-manage.com/subscribe/post?u=89bd154de3e56c4285b8d19ab&amp;id=54bc678374&amp;f_id=007fa9e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address</label>
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                  required
                />
                <span
                  id="mce-EMAIL-HELPERTEXT"
                  class="helper_text"
                ></span>
              </div>
              <div id="mce-responses" class="clear foot">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display: none"
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display: none"
                ></div>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div
                style="position: absolute; left: -5000px"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_89bd154de3e56c4285b8d19ab_54bc678374"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script>
import PageSection from '~/components/PageSection.vue'

export default {
  components: {
    PageSection,
  },
  async mounted() {
    if (!window) return

    while (!window.jQuery) {
      console.log('waiting for jQuery')
      await new Promise((resolve) =>
        setTimeout(resolve, 100),
      )
    }

    ;(function ($) {
      window.fnames = new Array()
      window.ftypes = new Array()
      fnames[0] = 'EMAIL'
      ftypes[0] = 'email'
      fnames[1] = 'FNAME'
      ftypes[1] = 'text'
      fnames[2] = 'LNAME'
      ftypes[2] = 'text'
      fnames[3] = 'ADDRESS'
      ftypes[3] = 'address'
      fnames[4] = 'PHONE'
      ftypes[4] = 'phone'
      fnames[5] = 'BIRTHDAY'
      ftypes[5] = 'birthday'
    })(window.jQuery)
    window.$mcj = jQuery.noConflict(true)
  },
}
</script>

<style lang="scss" scoped>
.section {
  --bg: var(--accent);
  background: var(--bg);
  width: 100%;
  overflow-x: hidden;
}

.textcolumn {
  max-width: 600px;
}

#mc-embedded-subscribe-form {
  margin: 0;
  margin-top: 1.5em;
}
#mc_embed_signup .mc-field-group {
  width: 100%;
}

#mc_embed_signup
  #mc-embedded-subscribe-form
  #mc_embed_signup_scroll
  #mc-embedded-subscribe,
#mc_embed_signup .button {
  text-align: center;
  background: var(--primary);
  height: 100%;
  width: 100%;
  min-width: 180px;
  padding: 25px 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  color: white;

  &.reverse {
    background: white;
    color: var(--primary);
  }

  @media (max-width: 768px) {
    letter-spacing: 2.5px;
    font-size: 1rem;
    min-width: 100px;
  }

  &:hover {
    background: var(--primaryl1);
    letter-spacing: 5.5px;

    &.reverse {
      background: white;
      color: var(--primaryd2);
    }

    @media (max-width: 768px) {
      letter-spacing: 2.5px;
    }
  }
}
</style>
