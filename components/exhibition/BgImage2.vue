<template>
  <div class="bgimageholder" ref="container" title="">
    <transition name="fade">
      <div v-if="!background" class="blurimageholder">
        <div
          class="blurimage"
          :style="{
            'background-image': `url('${src}')`,
            'background-position': `${x * 100}% ${y * 100}%`,
          }"
        ></div>
      </div>
    </transition>
    <img
      @mousedown="startDrag"
      @mousemove="drag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @dblclick="doubleClick"
      @load="onImgLoad"
      :src="src"
      ref="mainimage"
      class="mainimage"
      :class="{
        dragging: (canDrag[0] || canDrag[1]) && dragStart,
        draggable: canDrag[0] || canDrag[1],
      }"
      :style="{
        top: top + 'px',
        left: left + 'px',
        width: width + 'px',
        height: height + 'px',
      }"
    />
    <div class="mask" :class="{ on: !isLoaded }"></div>
    <!-- <div
      class="debugtarget"
      :style="{
        left: width * toX + offset[0] + 'px',
        top: height * toY + offset[1] + 'px',
      }"
    ></div> -->
  </div>
</template>

<script>
export default {
  props: {
    image: {},
    x: { default: 0 },
    y: { default: 0 },
    z: { default: 0 },
    toX: {},
    toY: {},
    toZ: {},
    slideTime: { default: 6000 },
    background: {},
    interactable: { default: true },
    index: {},
  },
  data() {
    return {
      // dragStart: null,
      // dragOffset: [0, 0],
      // prevDragOffset: [0, 0],
      // dragVelocity: [0, 0],
      // zoom: 1,
      // isTransitioning: false,
      // transitionTimeout: false,
      // fadeTimeout: null,
      // prevImage: null,
      // isLoaded: false,
      // isSlowSliding: false,
      // slowSlideStart: null,
      // slowSlideTarget: null,
      // isDoubleClickZooming: false,

      src: null,
      prevImage: null,
      isLoaded: false,
      zoomMultiplier: 1.005,

      offset: [0, 0, 1],
      imageSize: [1200, 1200],

      repositionStart: null,
      repositionTarget: null,
      repositionDifference: null,
      moveStartTime: null,
      moveTime: 0,
      currentEasingFunction: 'inOutQuad',
      easingFunctions: {
        inOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
      },
    }
  },
  computed: {
    winSize() {
      return this.$store.state.winSize
    },
    path() {
      return this.$store.state.path
    },

    width() {
      if (!this.src) return 0
      let w = this.imageSize[0]
      let h = this.imageSize[1]
      // if either dimension is smaller than the window, show it full size
      // todo maybe allow zooming out?
      if (w < this.winSize[0] || h < this.winSize[1]) return w
      // otherwise, allow zoom
      w *= this.zoom
      return w
    },
    height() {
      return this.width * (1 / this.aspectRatio)
    },

    left() {
      if (!this.canDrag[0]) return this.winSize[0] / 2 - this.width / 2
      // todo should we do percent => pixel number conversion here?
      return this.offset[0]
    },
    top() {
      if (!this.canDrag[1]) return this.winSize[1] / 2 - this.height / 2
      return this.offset[1]
    },

    aspectRatio() {
      return this.imageSize[0] / this.imageSize[1]
    },
    windowAspectRatio() {
      return this.winSize[0] / this.winSize[1]
    },
    canDrag() {
      return [this.width > this.winSize[0], this.height > this.winSize[1]]
    },
    minZoom() {
      let minZoom = Math.max(
        this.winSize[0] / this.imageSize[0],
        this.winSize[1] / this.imageSize[1],
      )
      if (minZoom > 1) minZoom = 1
      return minZoom
		},

		easingFunction() {
			return this.easingFunctions[this.currentEasingFunction]
		}
  },
  watch: {
    minZoom() {
			this.offset[2] = this.minZoom + (1 - this.minZoom) * this.z
    },
    zoom() {
      this.fixBounds()
    },
    winSize() {
      this.fixBounds()
    },
    index() {
      this.paneChange()
    },
  },
  mounted() {
    this.paneChange()
    window.addEventListener('mousewheel', this.handleScroll)
    window.addEventListener('DOMMouseScroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('mousewheel', this.handleScroll)
    window.removeEventListener('DOMMouseScroll', this.handleScroll)
  },
  methods: {
    repositionWithPercentages(
      repositionTargetPercentages,
      moveTime,
      easingFunction,
    ) {
			const x
			const y
			const z = (this.minZoom + (1 - this.minZoom) * repositionTargetPercentages[2]) || this.offsetNormalized[2]
      const repositionTarget = [] // todo
      return reposition(repositionTarget, moveTime, easingFunction)
		},
		repositionWithChangeValues(repositionTargetChangeValues, moveTime, easingFunction){
			const x= this.offset[0] + repositionTargetChangeValues[0] || 0
			const y= this.offset[1] + repositionTargetChangeValues[1] || 0
			const z = this.offset[2] + repositionTargetChangeValues[2] || 0
      const repositionTarget = [x,y,z] // todo
      return reposition(repositionTarget, moveTime, easingFunction)
		},

    reposition(repositionTarget, moveTime = 0, easingFunction = 'easeInOutQuad') {
      this.repositionTarget = repositionTarget.map((unused, index) => {
				return repositionTarget[index] || this.offset[index]
			})
      this.easingFunction = easingFunction
      this.moveTime = moveTime

      this.repositionStart = this.offset
      this.repositionDifference = this.repositionStart.map(
        (unused, index) =>
          this.repositionTarget[index] - this.repositionStart[index],
			)

      this.moveStartTime = Date.now()

      return new Promise(resolve => {
        const repositionStep = () => {
          if (!this.repositionTarget) return resolve()

          let animationProgress =
            this.moveTime === 0
              ? 1 // complete in one frame
              : (Date.now() - this.moveStartTime) / this.moveTime
          if (animationProgress > 1) animationProgress = 1
          const stepProgressY = this.easingFunction(animationProgress)

          const stepTargetValues = this.repositionDifference.map(
            (unused, index) =>
              this.repositionStart[index] +
              this.repositionDifference[index] * stepProgressY,
          )

          this.offset = this.getClosestValidPosition(stepTargetValues)

          const done = animationProgress === 1
          if (done) {
            this.repositionTarget = null
            resolve()
          } else requestAnimationFrame(repositionStep)
        }

        requestAnimationFrame(repositionStep)
      })
    },

    onImgLoad(e) {
      const loadedImage = e ? e.target : this.$refs.mainimage
      this.imageSize = [loadedImage.naturalWidth, loadedImage.naturalHeight]
      this.$nextTick(() => {
        setTimeout(async () => {
			this.repositionTarget = null
          this.isLoaded = true
					await this.resetPositioning()
					this.repositionWithPercentages([this.toX, this.toY, this.toZ], this.slideTime)
        }, 10)
      })
    },
    paneChange() {
      const sameImage = this.prevImage === this.image
      this.prevImage = this.image
      if (sameImage && this.isLoaded) this.repositionWithPercentages([this.toX, this.toY, this.toZ], this.slideTime)
      else this.loadImage()
    },
    loadImage() {
      this.isLoaded = false
      new Image().src = `${this.path}/${this.image}`
      this.fadeTimeout = window.setTimeout(() => {
        const loadedImage = new Image()
        loadedImage.addEventListener('load', async e => {
          if (this.src === `${this.path}/${this.image}`) return this.onImgLoad()
          this.src = `${this.path}/${this.image}`
        })
        loadedImage.src = `${this.path}/${this.image}`
      }, 200)
    },

    doubleClick(e) {
			// const doubleClickZoomMultiplier = 1.25
			// const [x, y] = this.getZoomFocus(e)
			// const z = this.offsetNormalized[2] * doubleClickZoomMultiplier
			// this.repositionWithPercentages([x,y,z], 400)
    },
    handleScroll(e) {
//       if (!this.interactable || e.deltaY === 0) return

//       const [x, y] = this.getZoomFocus(e)

//       const zoomAmount = 1 + Math.abs(e.deltaY) / 400
//       const zoomIn = e.deltaY < 0
//       const prevZoom = this.offset[2]
// 			let zoomStepPercentage = 1

// let topChange, leftChange, zoomChange
//       if (zoomIn && this.offset[2] < 1) {
//         zoomChange = this.offset[2] * this.zoomMultiplier * zoomAmount - this.offset[2]
//         if (this.offset[2] > 1) {
//           const zoomStep = Math.abs(this.offset[2] - prevZoom)
//           zoomStepPercentage = (1 - prevZoom) / zoomStep
//           this.offset[2] = 1
// 				}

//         const widthGain =
//           this.width * this.zoomMultiplier * zoomAmount * zoomStepPercentage -
//           this.width * zoomStepPercentage
// 				 leftChange = widthGain * xPosAvg * -1

//         const heightGain =
//           this.height * this.zoomMultiplier * zoomAmount * zoomStepPercentage -
//           this.height * zoomStepPercentage
//          topChange = heightGain * yPosAvg * -1

//       } else if (!zoomIn && this.offset[2] > this.minZoom) {
// 				zoomChange = this.offset[2] / (this.zoomMultiplier * zoomAmount) - this.offset[2]

//         if (this.offset[2] < this.minZoom) {
//           const zoomStep = Math.abs(this.offset[2] - prevZoom)
//           zoomStepPercentage = (prevZoom - this.minZoom) / zoomStep
//           this.offset[2] = this.minZoom
//         }
//         const widthLoss =
//           this.width * this.zoomMultiplier * zoomAmount * zoomStepPercentage -
//           this.width * zoomStepPercentage
//          leftChange = widthLoss * xPosAvg

//         const heightLoss =
//           this.height * this.zoomMultiplier * zoomAmount * zoomStepPercentage -
//           this.height * zoomStepPercentage
//          topChange = heightLoss * yPosAvg
// 			}

// 			this.repositionWithChangeValues([leftChange, topChange, ])
    },
    resetPositioning() {
			return this.repositionWithPercentages(this.percentagesToRealNumbers([this.x, this.y, this.z]), 0)
    },
    startDrag(e) {
			if (!this.interactable) return
			this.repositionTarget = null
      this.dragVelocity = [0, 0]
      this.dragStart = [
        e.clientX - this.dragOffset[0],
        e.clientY - this.dragOffset[1],
      ]
      e.preventDefault()
    },
    drag(e) {
      e.preventDefault()
			if (!this.dragStart) return
			// todo doesn't exist anymore
      this.prevDragOffset = this.dragOffset
      let dragX = e.clientX - this.dragStart[0],
        dragY = e.clientY - this.dragStart[1]
      if (!this.canDrag[0]) dragX = 0
			if (!this.canDrag[1]) dragY = 0

			this.reposition([dragX, dragY], 0)

      this.dragVelocity = [
        this.dragVelocity[0] / 2 +
          (this.prevDragOffset[0] - this.dragOffset[0]) / 2,
        this.dragVelocity[1] / 2 +
          (this.prevDragOffset[1] - this.dragOffset[1]) / 2,
      ]
    },
    endDrag(e) {
      this.dragStart = null
      this.dragVelocity = [this.dragVelocity[0] * 3, this.dragVelocity[1] * 3]
      this.glide()
      e.preventDefault()
    },
    glide() {
			// todo reset to have a target in same direction and glide there over a variable time based on intensity
      // if (
      //   !this.dragVelocity ||
      //   (this.dragVelocity[0] === 0 && this.dragVelocity[1] === 0)
      // )
      //   return
      // if (this.dragStart) return
      // this.dragOffset = [
      //   this.dragOffset[0] - this.dragVelocity[0],
      //   this.dragOffset[1] - this.dragVelocity[1],
      // ]
      // this.fixBounds()

      // this.dragVelocity[0] = this.dragVelocity[0] * 0.92
      // if (Math.abs(this.dragVelocity[0]) < 0.1) this.dragVelocity[0] = 0
      // this.dragVelocity[1] = this.dragVelocity[1] * 0.92
      // if (Math.abs(this.dragVelocity[1]) < 0.1) this.dragVelocity[1] = 0
      // requestAnimationFrame(this.glide)
    },
    getClosestValidPosition(offset) {
      let [x, y, z] = offset
      if (this.canDrag[0]) {
        if (x > 0) x = 0
        if (-1 * (x - this.winSize[0]) > this.width)
          x = -1 * (this.width - this.winSize[0])
      }
      if (this.canDrag[1]) {
        if (y > 0) y = 0
        if (-1 * (y - this.winSize[1]) > this.height)
          y = -1 * (this.height - this.winSize[1])
      }
      if (z < this.minZoom) z = minZoom
      if (z > 1) z = 1
      return [x, y, z]
    },
    getZoomFocus(e) {
      const xOnImage = (e.clientX - this.left) / this.width,
        yOnImage = (e.clientY - this.top) / this.height
      const xOnScreen = e.clientX / this.winSize[0],
        yOnScreen = e.clientY / this.winSize[1]
      const xPosAvg = (xOnImage * 2 + xOnScreen) / 3,
        yPosAvg = (yOnImage * 2 + yOnScreen) / 3
      return [xPosAvg, yPosAvg]
    },
  },
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
</script>

<style lang="scss" scoped>
.bgimageholder {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.mainimage {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  max-width: initial;
  transition: opacity 2s;

  &.draggable {
    cursor: grab;
  }

  &.draggable.dragging {
    cursor: grabbing !important;
  }

  &.transitioning {
    transition: width 1s, height 1s, top 1s, left 1s, opacity 2s;
  }
}

.mask {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.4s;

  &.on {
    transition: opacity 0.2s;
    opacity: 1;
  }
}

.debugtarget {
  position: absolute;
  z-index: 100;
  background: red;
  width: 5px;
  height: 5px;
}

.blurimageholder {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  transition: opacity 3s;
}
.blurimage {
  background-size: cover;
  width: 130vh;
  height: 130vh;
  min-width: 130vw;
  transform: translate(-15vh, -15vh);
  filter: blur(3vh) brightness(70%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
