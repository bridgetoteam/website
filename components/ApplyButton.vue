<template>
  <a :href="target ? target : '#' " target="_blank" @click="scrollDown">
    <div :class="{ collapse: isMobile, reverse, }">
      <span v-if="$i18n.locale === 'ja'">{{ labelJa || label }}</span>
      <span v-else>{{ label }}</span>
    </div>
  </a>
</template>

<script>
import useWindowWidth from '~/components/mixins/useWindowWidth'
export default {
  props: {
    reverse: {},
    label: { default: 'Apply' },
    labelJa: {},
    targetElementId: {},
    target: {},
  },
  data() {
    return {}
  },
  mixins: [useWindowWidth],

  methods: {
    scrollDown(e) {
      if (this.targetElementId) {
        e.preventDefault()
        document.getElementById(this.targetElementId).scrollIntoView(true)
      }
    },
  },
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
  text-align: center;
  background: var(--primary);
  height: 100%;
  width: 100%;
  min-width: 180px;
  padding: 0 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &.reverse {
    background: white;
    color: var(--primary);
  }

  @media (max-width: 768px) {
    letter-spacing: 2.5px;
    font-size: 1rem;
    min-width: 100px;
  }
}

div:hover {
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
</style>
