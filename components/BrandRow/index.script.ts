import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent<{
  title: string
  items: any[]
}>({
  name: 'BrandRow',
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
})
