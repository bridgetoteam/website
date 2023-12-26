<template>
  <div class="languagePicker">
    <span
      v-for="locale in i18n.locales.value as any[]"
      :key="locale.code"
    >
      <nuxt-link
        :to="switchLocalePath(locale.code)"
        class="smallcaps"
        :class="{
          current: i18n.locale.value === locale.code,
        }"
        >{{ locale.code }}</nuxt-link
      >
    </span>
  </div>
</template>

<script setup lang="ts">
const i18n = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  padding: 0.4em 0.5em;
  background-color: var(--base-d);
  color: var(--base-l2);

  &.current {
    background-color: var(--base-l2);
    color: var(--base-d);
  }
}
</style>
