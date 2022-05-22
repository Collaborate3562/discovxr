import {
  computed,
  ComputedRef,
  defineComponent,
  toRef,
  toRefs,
} from '@nuxtjs/composition-api'

import { DealType, Status } from '@lxgic/enums'

import { useDealTypeIcon } from '@lxgic/hooks'

import { useSendItemModal } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

import ShoppingIcon from '~/assets/svg/DealType/shoppingIcon.svg?inline'
import AuctionIcon from '~/assets/svg/DealType/auctionIcon.svg?inline'
import RaffleIcon from '~/assets/svg/DealType/raffleIcon.svg?inline'

interface ICompletedCardProps {
  status: Status
  dealType: DealType
  image: string
  title: string
  timestamp: string
  sold: boolean
}

export default defineComponent<ICompletedCardProps>({
  name: 'CompletedCard',
  components: {
    ShoppingIcon,
    AuctionIcon,
    RaffleIcon,
  },
  props: {
    status: {
      type: String,
      default: '',
    },
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
    timestamp: {
      type: String,
      default: '',
    },
    sold: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: ICompletedCardProps) {
    const { dealType, status, sold } = toRefs(props)

    const dealTypeIcon: any = useDealTypeIcon(dealType.value)

    const translationPrefix: ComputedRef<string> = computed<string>(() => (sold.value ? 'SOLD_ITEMS' : 'PURCHASED_ITEMS'))

    const button: ComputedRef<any> = computed(() => {
      switch (status.value) {
        case Status.REPORT_RECEIVED:
          return {
            color: colors.lightPurple,
            text: 'PURCHASED_ITEMS.BUTTON.REPORT_RECEIVED',
          }
        case Status.MAKE_PAYMENT:
          return {
            color: colors.lightPurple,
            text: 'PURCHASED_ITEMS.BUTTON.MAKE_PAYMENT',
          }
        case Status.WAITING_SHIPMENT:
          return {
            color: colors.darkYellow,
            text: 'PURCHASED_ITEMS.BUTTON.WAITING_SHIPMENT',
          }
        case Status.WAITING_PAYMENT:
          return {
            color: colors.darkYellow,
            text: 'SOLD_ITEMS.BUTTON.WAITING_PAYMENT',
          }
        case Status.REVIEW:
          return {
            color: colors.lightPurple,
            text: `${translationPrefix.value}.BUTTON.REVIEW`,
          }
        case Status.SEND_ITEM:
          return {
            color: colors.lightPurple,
            text: 'SOLD_ITEMS.BUTTON.SEND_ITEM',
          }
        case Status.COMPLETE:
          return {
            color: colors.lightBlack,
            text: `${translationPrefix.value}.BUTTON.COMPLETE`,
          }
        default:
          return null
      }
    })

    const sendMessageButton: ComputedRef<string> = computed<string>(
      () => `${translationPrefix.value}.BUTTON.SEND_MESSAGE`,
    )

    const { open } = useSendItemModal()

    // TODO: click handler
    const clickHandler = () => {
      if (sold.value && status.value === Status.SEND_ITEM) {
        open()
      }
    }

    return {
      dealTypeIcon: toRef(dealTypeIcon, 'value'),
      button,
      sendMessageButton,
      clickHandler,
    }
  },
})
