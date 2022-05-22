import { defineComponent } from '@nuxtjs/composition-api'

import colors from '~/assets/scss/colors.scss'

interface IUserDetailProductCardProps {
  sold: boolean
  image: string
  title: string
  price: string
}

export default defineComponent<IUserDetailProductCardProps>({
  name: 'UserDetailProductCard',
  props: {
    sold: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: '/images/empty.png',
    },
    title: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {
      lightRed: colors.lightRed,
    }
  },
})
