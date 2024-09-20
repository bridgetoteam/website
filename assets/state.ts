export const mobile = computed(() => winSize.value[0] < 768)
export const fullscreen = ref(false)
export const winSize = ref([1200, 1200])
export const dev = computed(() =>
  useRoute().fullPath.includes('localhost'),
)
export const windowScroll = ref(0)
export const mousePos = ref([0, 0])

export const openCall = ref(true)
