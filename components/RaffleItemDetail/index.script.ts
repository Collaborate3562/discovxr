import { defineComponent } from '@nuxtjs/composition-api'

import { useDrawRaffleModal, useRemainingTimeModal } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

import DrawRaffleModal from '~/components/DrawRaffleModal'
import ItemDetailShareMenu from '~/components/ItemDetailShareMenu'

// TODO: will be change

interface IRaffleItemDetailProps {
  isAnonymous: boolean
  entry: string
  timeLeft: number
  title: string
  donation: number
  donateTo: string
  likes: number
  messages: number
}

export default defineComponent<IRaffleItemDetailProps>({
  name: 'RaffleItemDetail',
  components: {
    DrawRaffleModal,
    ItemDetailShareMenu,
  },
  props: {
    isAnonymous: {
      type: Boolean,
      default: false,
    },
    entry: {
      type: String,
      default: '',
    },
    timeLeft: {
      type: Number,
      default: 0,
    },
    donation: {
      type: Number,
      default: 0,
    },
    donateTo: {
      type: String,
      default: '',
    },
    title: {
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

    const { open: openDrawRaffleModal } = useDrawRaffleModal()

    return {
      lightRed: colors.lightRed,
      openHandler,
      openDrawRaffleModal,
    }
  },
})
