import {
  computed,
  ComputedRef,
  defineComponent,
  toRef,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'

import { DealType } from '@lxgic/enums'

import { useDealTypeIcon } from '@lxgic/hooks'

import colors from '~/assets/scss/colors.scss'

import ShoppingIcon from '~/assets/svg/DealType/shoppingIcon.svg?inline'
import AuctionIcon from '~/assets/svg/DealType/auctionIcon.svg?inline'
import RaffleIcon from '~/assets/svg/DealType/raffleIcon.svg?inline'

interface ICommentCardProps {
  dealType: DealType
  image: string
  title: string
  username: string
  message: string
  timestamp: string
  replied: boolean
  sold: boolean
}

export default defineComponent<ICommentCardProps>({
  name: 'CommentCard',
  components: {
    ShoppingIcon,
    AuctionIcon,
    RaffleIcon,
  },
  props: {
    dealType: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '/images/empty.png',
    },
    title: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    timestamp: {
      type: String,
      default: '',
    },
    replied: {
      type: Boolean,
      default: false,
    },
    sold: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: ICommentCardProps) {
    const { dealType, replied, sold } = toRefs(props)

    const { i18n }: any = useContext()

    const dealTypeIcon: any = useDealTypeIcon(dealType.value)

    const translationPrefix: ComputedRef<string> = computed<string>(() => (sold.value ? 'SOLD_ITEMS' : 'PURCHASED_ITEMS'))

    const button: ComputedRef<any> = computed(() => ({
      color: replied.value ? colors.lightBlack : colors.lightRed,
      text: i18n.tc(`${translationPrefix.value}.BUTTON.REPLATION`, +replied),
    }))

    // TODO: click handler

    return {
      dealTypeIcon: toRef(dealTypeIcon, 'value'),
      button,
    }
  },
})
