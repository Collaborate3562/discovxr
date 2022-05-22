import {
  computed,
  ComputedRef,
  defineComponent,
  toRef,
} from '@nuxtjs/composition-api'

import { useDealTypeIcon } from '@lxgic/hooks'

import { DealType } from '@lxgic/enums'

import ShoppingIcon from '~/assets/svg/DealType/shoppingIcon.svg?inline'
import AuctionIcon from '~/assets/svg/DealType/auctionIcon.svg?inline'
import RaffleIcon from '~/assets/svg/DealType/raffleIcon.svg?inline'

interface IProductCardProps {
  id: string
  dealType: DealType
  img: string
  avatar: string
  username: string
  title: string
  price: string
}

export default defineComponent<IProductCardProps>({
  name: 'ProductCard',
  components: {
    ShoppingIcon,
    RaffleIcon,
    AuctionIcon,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    dealType: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '/images/empty.png',
    },
    avatar: {
      type: String,
      default: '/images/non-avatar.jpg',
    },
    username: {
      type: String,
      default: '',
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
  setup({ dealType }: IProductCardProps) {
    const dealTypeIcon: any = useDealTypeIcon(dealType)

    const isAuction: ComputedRef<boolean> = computed<boolean>(
      () => dealType === DealType.AUCTION,
    )
    const isShopping: ComputedRef<boolean> = computed<boolean>(
      () => dealType === DealType.SHOPPING,
    )
    const isRaffle: ComputedRef<boolean> = computed<boolean>(
      () => dealType === DealType.RAFFLE,
    )

    const label: ComputedRef<string> = computed<string>(() => {
      switch (true) {
        case isAuction.value:
          return 'DEAL_CARD.AUCTION.NOW'
        case isShopping.value:
          return 'DEAL_CARD.SHOPPING.PRICE'
        case isRaffle.value:
          return 'DEAL_CARD.RAFFLE.ENTRY'
        default:
          return ''
      }
    })
    const summaryTitles: ComputedRef<any> = computed(() => {
      switch (true) {
        case isAuction.value:
          return {
            first: 'DEAL_CARD.AUCTION.BIDS',
            last: 'DEAL_CARD.AUCTION.LEFT',
          }
        case isShopping.value:
          return {
            first: 'DEAL_CARD.SHOPPING.QUANTITY',
            last: 'DEAL_CARD.SHOPPING.DONATION',
          }
        case isRaffle.value:
          return {
            first: 'DEAL_CARD.RAFFLE.PRIZE',
            last: 'DEAL_CARD.RAFFLE.LEFT',
          }
        default:
          return null
      }
    })

    // TODO: change url on click

    return {
      dealTypeIcon: toRef(dealTypeIcon, 'value'),
      label,
      isAuction,
      isShopping,
      isRaffle,
      summaryTitles,
    }
  },
})
