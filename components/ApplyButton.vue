<template>
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfE7Pf0-G1MoVrvJR4YHYq1rXk8SGwUnXP8xW7Njhaq3Li7NA/viewform"
    target="_blank"
  >
    <div :class="{ collapse: isMobile }">
      <span v-if="$i18n.locale === 'ja'">Apply Now</span>
      <span v-else>Apply Now</span>
    </div>
  </a>
</template>

<script>
import useWindowWidth from '~/components/mixins/useWindowWidth'
export default {
  data() {
    return {}
  },
  mixins: [useWindowWidth],

  methods: {},
}
</script>

<style lang="scss" scoped>
a {
  text-transform: uppercase;
  font-size: 1.1em;
  letter-spacing: 5px;
  font-weight: 800;
  color: inherit;
  text-decoration: none;
}

div {
  background: var(--primary);
  height: 100%;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &.collapse {
    width: 210px;
  }

  @media (max-width: 768px) {
    width: 15px;
    letter-spacing: 2.5px;
    font-size: 1rem;

    &.collapse {
      width: 150px;
    }
  }
}

div:hover {
  background: var(--primaryl1);
  letter-spacing: 5.5px;

  @media (max-width: 768px) {
    letter-spacing: 2.5px;
  }
}
</style>
