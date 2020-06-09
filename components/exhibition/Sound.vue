<template>
  <div class="sound">
    <h4 v-if="title">{{ title }}</h4>
    <audio
      :src="`${path}/${src}`"
      controls
      :autoplay="mute ? false : true"
      ref="sound"
      @keydown="keydown"
    />
  </div>
</template>

<script>
// todo fade in on start
export default {
  props: {
    title: {},
    src: {},
    volume: {},
    loop: { default: false },
  },
  data() {
    return {}
  },
  computed: {
    path() {
      return this.$store.state.path
    },
    mute() {
      return this.$store.state.mute
    },
  },
  watch: {
    mute() {
      this.$refs.sound.muted = this.mute
    },
    volume() {
      this.$refs.sound.volume = this.volume || (!!this.loop ? '.5' : '1')
    },
    loop() {
      this.$refs.sound.loop = !!this.loop
    },
  },
  mounted() {
    this.$refs.sound.volume = this.volume || (!!this.loop ? '.5' : '1')
    this.$refs.sound.loop = !!this.loop
    this.tryToPlay()
  },
  methods: {
    tryToPlay() {
      if (!this.mute && this.$refs.sound.canplay && !this.$refs.sound.playing) {
        try {
          this.$refs.sound.play()
        } catch (e) {
          e.preventDefault()
        }
        setTimeout(this.tryToPlay, 200)
      }
    },
    playPause() {
      if (this.$refs.sound.playing) this.$refs.sound.pause()
      else this.$refs.sound.play()
    },
    keydown(e) {
      if (
        e.code === 'ArrowRight' ||
        e.code === 'ArrowDown' ||
        e.code === 'ArrowLeft' ||
        e.code === 'ArrowUp'
      ) {
        e.preventDefault()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.sound {
  pointer-events: auto;

  audio {
    outline: none;
  }
}
</style>
