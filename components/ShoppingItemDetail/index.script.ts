import {
  computed,
  ComputedRef,
  defineComponent,
  useContext,
} from '@nuxtjs/composition-api'

import { useRemainingTimeModal, useShoppingModal } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

import ColorSelection from '~/components/ColorSelection'
import SizeSelection from '~/components/SizeSelection'
import ShoppingModal from '~/components/ShoppingModal'
import ItemDetailShareMenu from '~/components/ItemDetailShareMenu'

// TODO: will be change

interface IShoppingItemDetailProps {
  isAnonymous: boolean
  price: string
  timeLeft: number
  variantsCount: number
  donation: number
  projectName: string
  likes: number
  messages: number
}

export default defineComponent<IShoppingItemDetailProps>({
  name: 'ShoppingItemDetail',
  components: {
    ColorSelection,
    SizeSelection,
    ShoppingModal,
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
    variantsCount: {
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

    // TODO: will be remove (only for design)
    const colorSelectionData: string[] = Array.from(
      { length: 12 },
      () => `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    )
    const sizeSelectionData: string[] = Array.from({ length: 9 }, (_, id) => (id ? `${id + 1}S` : 'S'))

    const { setTitle, setRemainingDate, open } = useRemainingTimeModal()
    const { open: openShoppingModal } = useShoppingModal()

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

    return {
      lightRed: colors.lightRed,
      colSize,
      colorSelectionData,
      sizeSelectionData,
      openHandler,
      openShoppingModal,
    }
  },
})
