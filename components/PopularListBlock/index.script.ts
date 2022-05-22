import { defineComponent } from '@nuxtjs/composition-api'

interface IPopularListBlockProps {
  prefix: string
}

export default defineComponent<IPopularListBlockProps>({
  name: 'PopularListBlock',
  props: {
    prefix: {
      type: String,
      default: '',
    },
  },
})
