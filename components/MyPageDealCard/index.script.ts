import {
  computed,
  ComputedRef,
  defineComponent,
  toRef,
} from '@nuxtjs/composition-api'

import { DealType, Status } from '@lxgic/enums'

import { useDealTypeIcon } from '@lxgic/hooks'

import colors from '~/assets/scss/colors.scss'

import MyPageActionDropdown from '~/components/MyPageActionDropdown'

import ShoppingIcon from '~/assets/svg/DealType/shoppingIcon.svg?inline'
import AuctionIcon from '~/assets/svg/DealType/auctionIcon.svg?inline'
import RaffleIcon from '~/assets/svg/DealType/raffleIcon.svg?inline'

interface IMyPageDealCardProps {
  // TODO: will be change
  id: number
  checkboxState: any
  actionText: string
  status: Status
  dealType: DealType
  image: string
  title: string
  timestamp: string
}

export default defineComponent<IMyPageDealCardProps>({
  name: 'MyPageDealCard',
  components: {
    MyPageActionDropdown,
    ShoppingIcon,
    AuctionIcon,
    RaffleIcon,
  },
  props: {
    checkboxState: {
      type: Object,
      default: () => ({}),
    },
    id: {
      type: Number,
      default: 0,
    },
    actionText: {
      type: String,
      default: '',
    },
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
  },
  setup({ dealType, status }: IMyPageDealCardProps) {
    const dealTypeIcon: any = useDealTypeIcon(dealType)

    const button: ComputedRef<any> = computed(() => {
      switch (status) {
        case Status.DRAFT:
          return {
            text: 'DRAFT_ITEMS.BUTTON',
            color: 'grey lighten-4',
            textColor: 'grey--text text--darken-1',
          }
        case Status.ON_DEAL:
          return {
            text: 'CHECK_ITEMS.BUTTON.ON_DEAL',
            color: colors.darkYellow,
            textColor: 'white--text',
          }
        case Status.SOLD:
          return {
            text: 'CHECK_ITEMS.BUTTON.SOLD',
            color: colors.lightRed,
            textColor: 'white--text',
          }
        default:
          return {
            text: 'CHECK_ITEMS.BUTTON.DRAFTS',
            color: 'grey lighten-4',
            textColor: 'grey--text text--darken-1',
          }
      }
    })

    // TODO: add click handler

    return {
      dealTypeIcon: toRef(dealTypeIcon, 'value'),
      button,
      lightRed: colors.lightRed,
    }
  },
})
