import {
  computed,
  ComputedRef,
  defineComponent,
  useContext,
} from '@nuxtjs/composition-api'

import { useBidModal, useRemainingTimeModal } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

import BidModal from '~/components/BidModal'
import ItemDetailShareMenu from '~/components/ItemDetailShareMenu'

// TODO: will be change

interface IAuctionItemDetailProps {
  isAnonymous: boolean
  price: string
  timeLeft: number
  numberBids: number
  donation: number
  projectName: string
  likes: number
  messages: number
}

export default defineComponent<IAuctionItemDetailProps>({
  name: 'AuctionItemDetail',
  components: {
    BidModal,
    ItemDetailShareMenu,
  },
  props: {
    isAnonymous: {
      type: Boolean,
      default: false,
    },
    price: {
      type: String,
      default: '',
    },
    timeLeft: {
      type: Number,
      default: 0,
    },
    numberBids: {
      type: Number,
      default: 0,
    },
    donation: {
      type: Number,
      default: 0,
    },
    projectName: {
      type: String,
      default: '',
    },
    likes: {
      type: Number,
      default: 0,
    },
    messages: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const { $vuetify }: any = useContext()

    const colSize: ComputedRef<boolean> = computed<boolean>(
      () => $vuetify.breakpoint.width < 320
        || ($vuetify.breakpoint.width >= 600 && $vuetify.breakpoint.width < 735),
    )

    const { setTitle, setRemainingDate, open } = useRemainingTimeModal()

    // TODO: will be change (only wor design)
    const openHandler = () => {
      setTitle('Dior super hard wallet (White / Large) 2020 Model SS AA BB')

      const date: Date = new Date()
      date.setDate(date.getDate() + 6)
      date.setHours(23)
      date.setMinutes(59)
      date.setSeconds(59)

      setRemainingDate(date.toJSON())

      open()
    }

    const { open: openBidModal } = useBidModal()

    return {
      lightRed: colors.lightRed,
      colSize,
      openHandler,
      openBidModal,
    }
  },
})
