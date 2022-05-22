import { defineComponent } from '@nuxtjs/composition-api'

import { useRejectModal } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

interface IShopperCardProps {
  // TODO: will be change
  id: number
  checkboxState: any
  index: number
  rating: number
  price: string
  username: string
  timestamp: string
  bidders: boolean
}

export default defineComponent<IShopperCardProps>({
  name: 'ShopperCard',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    checkboxState: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      default: '',
    },
    timestamp: {
      type: String,
      default: '',
    },
    bidders: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { open } = useRejectModal()

    return {
      open,
      lightRed: colors.lightRed,
    }
  },
})
