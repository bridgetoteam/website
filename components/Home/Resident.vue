<template>
  <div
    class="resident"
    :class="{ withProject: r.showProject }"
  >
    <div class="images">
      <div
        class="personImg"
        v-lazy:background-image="`/img/people/${r.id}.jpg`"
        :alt="`Photo of ${r.name}`"
      ></div>
      <component
        :is="r.projectAlbumUrl ? 'a' : 'div'"
        :href="r.projectAlbumUrl ? r.projectAlbumUrl : null"
        target="_blank"
        class="projectImg"
        :class="{ isLink: r.projectAlbumUrl }"
        v-if="r.showProject"
        v-lazy:background-image="
          `/img/people/${r.id}_project.jpg`
        "
        :alt="`Photo of ${r.name}'s work at Bridge Studio'`"
      ></component>
    </div>

    <h2 class="name">{{ r.name }}</h2>
    <div class="description">
      <div
        class="marbottiny"
        v-for="el in (locale === 'ja'
          ? r.descriptionJa
          : r.description
        )
          .split('\n')
          .map((el) => el.trim())"
        :key="el"
      >
        {{ el }}
      </div>
      <span class="website" v-if="r.url">
        <a
          v-if="!Array.isArray(r.url)"
          :href="r.url"
          target="_blank"
          >Website</a
        >
        <template
          v-else
          v-for="(url, index) in r.url"
          :key="index"
        >
          <a :href="url" target="_blank"
            >Website {{ index + 1 }}</a
          >
          <span v-if="index < r.url.length - 1">, </span>
        </template>
        <span v-if="r.projectAlbumUrl">, </span>
      </span>

      <span class="website" v-if="r.projectAlbumUrl">
        <a :href="r.projectAlbumUrl" target="_blank"
          >Album</a
        >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as state from '~/assets/state'
const i18n = useI18n()
const locale = i18n.locale

const props = defineProps<{
  r: ResidentData
}>()
</script>

<style lang="scss" scoped>
.resident {
  position: relative;
  width: 250px;
  max-width: 90vw;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // text-align: center;
  word-break: break-word;

  --imgWidth: 250px;
  --personImgWidth: var(--imgWidth);

  &.withProject {
    --personImgWidth: 150px;
    --projectImgWidth: var(--imgWidth);
    --imageOverlap: 30px;

    width: calc(
      var(--personImgWidth) + var(--projectImgWidth) -
        var(--imageOverlap)
    );
  }
}

.images {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1em;
  position: relative;
  max-width: 100%;

  & > * {
    flex-shrink: 0;
    position: relative;
  }
}

.personImg {
  width: var(--personImgWidth);
  height: var(--personImgWidth);
  aspect-ratio: 1;
  max-width: 70vw;
  max-height: 70vw;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  background-size: cover;
  background-position: center center;
  z-index: 2;
}

.projectImg {
  width: var(--projectImgWidth);
  height: var(--projectImgWidth);
  aspect-ratio: 1;
  max-width: 65vw;
  max-height: 65vw;
  background-color: rgba(0, 0, 0, 0.05);
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  margin-left: -50px;
  // box-shadow: 0 0 0 0.5em var(--base-l);

  &.isLink {
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
}

a {
  color: inherit;
}

// p {
//   margin-left: var(--side-pad);
//   max-width: 550px;
// }

h2 {
  margin-top: 0;
  margin-bottom: 0.3em;
  padding-left: 1rem;

  width: 100%;
}
.description {
  padding-left: 1rem;
  width: 100%;
  font-size: 0.9em;
}
</style>
