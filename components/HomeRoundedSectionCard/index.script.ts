import { defineComponent } from '@nuxtjs/composition-api'

interface IHomeRoundedSectionCardProps {
  img: string
  title: string
}

export default defineComponent<IHomeRoundedSectionCardProps>({
  name: 'HomeRoundedSectionCard',
  props: {
    img: {
      type: String,
      default: '/images/empty.png',
    },
    title: {
      type: String,
      default: '',
    },
  },
})
