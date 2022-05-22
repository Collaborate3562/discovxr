import {
  computed,
  ComputedRef,
  defineComponent,
  onUnmounted,
  ref,
  Ref,
  useRoute,
} from '@nuxtjs/composition-api'

import { DealType, SnsType } from '@lxgic/enums'

import { useBannerBlock, useBreadcrumbs, useItemDetailHeader } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import ImageCarousel from '~/components/ImageCarousel'
import ItemDetailCommentMessenger from '~/components/ItemDetailCommentMessenger'
import RemainingTimeModal from '~/components/RemainingTimeModal'

import TwitterIcon from '~/assets/svg/twitterIcon.svg?inline'
import LineChatIcon from '~/assets/svg/lineChatIcon.svg?inline'

const UserDetailProductCard = () => import('~/components/UserDetailProductCard')
const ProductCard = () => import('~/components/ProductCard')
const AuctionItemDetail = () => import('~/components/AuctionItemDetail')
const ShoppingItemDetail = () => import('~/components/ShoppingItemDetail')
const RaffleItemDetail = () => import('~/components/RaffleItemDetail')

export default defineComponent({
  components: {
    ImageCarousel,
    TwitterIcon,
    LineChatIcon,
    ItemDetailCommentMessenger,
    RemainingTimeModal,
    UserDetailProductCard,
    ProductCard,
    AuctionItemDetail,
    ShoppingItemDetail,
    RaffleItemDetail,
  },
  layout: 'default/index',
  setup() {
    const $route: ComputedRef<any> = useRoute()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const {
      setIsVisible: setItemDetailHeaderVisibility,
      setUsername,
      setisAnonymous,
      setSnsDetails,
    } = useItemDetailHeader()

    setisAnonymous(!+$route.value.params.id)
    setUsername('David Ramsay')
    setSnsDetails([{ type: SnsType.INSTAGRAM }, { type: SnsType.TWITTER }])

    setItemDetailHeaderVisibility(true)

    onUnmounted(() => setItemDetailHeaderVisibility(false))

    // TODO: will be remove (only for design)
    const item: Ref<any> = ref<any>({
      images: Array(10).fill('/images/item-image.png'),
      username: 'David Ramsay',
    })

    switch (+$route.value.params.id) {
      case 0:
        item.value.dealType = DealType.AUCTION
        item.value.isAnonymous = true
        break
      case 1:
        item.value.dealType = DealType.AUCTION
        break
      case 2:
        item.value.dealType = DealType.SHOPPING
        break
      default:
        item.value.dealType = DealType.RAFFLE
    }

    const isAuction: ComputedRef<boolean> = computed<boolean>(
      () => item.value.dealType === DealType.AUCTION,
    )
    const isShopping: ComputedRef<boolean> = computed<boolean>(
      () => item.value.dealType === DealType.SHOPPING,
    )
    const isRaffle: ComputedRef<boolean> = computed<boolean>(
      () => item.value.dealType === DealType.RAFFLE,
    )

    const data: any[] = [
      {
        id: '1',
        image: '/images/item-image.png',
        dealType: DealType.AUCTION,
        price: '¥100,000',
        title:
          'Gucci crocodile bag with super super harasd Gucci crocodile bag with super super harasd',
        bids: 196,
        left: '11Hours',
        username: 'David Ramsay',
      },
      {
        id: '2',
        image: '/images/item-image.png',
        dealType: DealType.SHOPPING,
        price: '¥100,000',
        title:
          'Gucci crocodile bag with super super harasd Gucci crocodile bag with super super harasd',
        quantity: 196,
        donation: 10,
        username: 'David Ramsay',
      },
      {
        id: '3',
        image: '/images/item-image.png',
        dealType: DealType.RAFFLE,
        price: '¥100,000',
        title:
          'Gucci crocodile bag with super super harasd Gucci crocodile bag with super super harasd',
        prize: 196,
        left: '11Hours',
        username: 'David Ramsay',
      },
    ]

    const otherItems: Ref<any[]> = ref<any[]>([])
    const recommendedItems: Ref<any[]> = ref<any[]>([])
    if (!item.value.isAnonymous) {
      setTimeout(() => {
        otherItems.value = Array.from({ length: 8 }, (_, id: number) => ({
          id: id + 1,
          image: '/images/item-image.png',
          title:
            'Gucci crocodile bag with super super harasd Gucci crocodile bag with super super harasd',
          price: '¥100,000',
        }))
      }, 1500)
    }
    setTimeout(() => {
      recommendedItems.value = Array.from({ length: 8 }, (_, id: number) => ({
        ...data[(id + 1) % 3 ? Math.floor(id % 2) : 2],
        id: `${id + 1}`,
      }))
    }, 2000)

    return {
      item,
      otherItems,
      recommendedItems,
      isAuction,
      isShopping,
      isRaffle,
    }
  },
})
