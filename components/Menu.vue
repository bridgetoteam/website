<template>
  <nav :class="{ collapsed: isCollapsed }">
    <div class="left">
      <nuxt-link
        :to="localePath('index')"
        exact
        @mouseover.native="logoHover = true"
        @mouseleave.native="logoHover = false"
      >
        <Logo class="logo" :collapse="isCollapsed && !logoHover" />
      </nuxt-link>
      <ApplyButton />
    </div>
    <LangPicker class="langpicker" />
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LangPicker from '~/components/LangPicker.vue'
import ApplyButton from '~/components/ApplyButton.vue'
import useScrollPosition from '~/components/mixins/useScrollPosition'
import useWindowWidth from '~/components/mixins/useWindowWidth'

export default {
  data() {
    return {
      logoHover: false,
    }
  },

  components: { Logo, LangPicker, ApplyButton },
  mixins: [useScrollPosition, useWindowWidth],
  watch: {},

  computed: {
    isCollapsed() {
      return true //this.windowScroll > 100 || this.isMobile
    },
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
a {
  display: block;
}

nav {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &.collapsed {
    .left {
      height: 90px;

      @media (max-width: 768px) {
        height: 50px;
      }
    }
  }
}

.left {
  height: 180px;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  & > * {
    display: inline-block;
    height: 100%;
    vertical-align: top;
  }

  & > *:not(:last-child) {
    margin-right: -0.35em; // stupid fucking space
  }
}

.logo {
  height: 100%;
}

.langpicker {
  margin-top: 25px;
  margin-right: 40px;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-top: 15px;
    margin-right: 20px;
  }
}
</style>
