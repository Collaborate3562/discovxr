import {
  computed,
  ComputedRef,
  defineComponent,
  toRef,
  toRefs,
  useContext,
  useRouter,
} from '@nuxtjs/composition-api'

import { DealType } from '@lxgic/enums'

import { useDealTypeIcon } from '@lxgic/hooks'

import colors from '~/assets/scss/colors.scss'

import ShoppingIcon from '~/assets/svg/DealType/shoppingIcon.svg?inline'
import AuctionIcon from '~/assets/svg/DealType/auctionIcon.svg?inline'
import RaffleIcon from '~/assets/svg/DealType/raffleIcon.svg?inline'

interface IInProgressCardProps {
  // TODO: will be change
  id: number
  dealType: DealType
  image: string
  title: string
  timestamp: string
  sold: boolean
}

export default defineComponent<IInProgressCardProps>({
  name: 'InProgressCard',
  components: {
    ShoppingIcon,
    AuctionIcon,
    RaffleIcon,
  },
  props: {
    id: {
      type: Number,
      default: 0,
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
  setup(props: IInProgressCardProps) {
    const { dealType, sold, id } = toRefs(props)

    const { i18n, localePath }: any = useContext()

    const $router = useRouter()

    const dealTypeIcon: any = useDealTypeIcon(dealType.value)

    const isAuction: ComputedRef<boolean> = computed<boolean>(
      () => dealType.value === DealType.AUCTION,
    )

    const buttonText: ComputedRef<string> = computed<string>(() => {
      if (!sold.value) {
        return i18n.t('PURCHASED_ITEMS.BUTTON.CHECK')
      }

      return i18n.tc('SOLD_ITEMS.BUTTON.CHECK', +isAuction.value)
    })

    const clickHandler = () => {
      const url: string = sold.value
        ? `/mypage/items/${id.value}/${isAuction.value ? 'bidders' : 'buyers'}`
        : `/u/${id.value}`

      $router.push(localePath(url))
    }

    return {
      dealTypeIcon: toRef(dealTypeIcon, 'value'),
      buttonText,
      clickHandler,
      lightBlack: colors.lightBlack,
    }
  },
})
