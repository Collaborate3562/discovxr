import {
  defineComponent,
  toRef,
  useContext,
  watch,
} from '@nuxtjs/composition-api'

import { DealType } from '@lxgic/enums'

import { useBannerBlock, useBreadcrumbs, useSearchFilter } from '~/hooks'

import {
  IUseBannerBlock,
  IUseBreadcrumbs,
  IUseSearchFilter,
} from '~/interfaces'

import SearchFilter from '~/components/SearchFilter'

import colors from '~/assets/scss/colors.scss'

const ProductCard = () => import('~/components/ProductCard')

export default defineComponent({
  components: {
    SearchFilter,
    ProductCard,
  },
  layout: 'default/index',
  setup() {
    const { $vuetify }: any = useContext()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const { filterDrawer, state, loading }: IUseSearchFilter = useSearchFilter()

    watch(
      () => $vuetify.breakpoint.width,
      (value: number) => value >= 768 && filterDrawer.close(),
    )

    // TODO: will be remove (only for design)
    const data: any[] = [
      {
        id: '1',
        image: '/images/item-image.png',
        dealType: DealType.AUCTION,
        price: '¥100,000',
        title: 'COACH Super Cool Wallet Super Clean',
        bids: 196,
        left: '11Hours',
        username: 'David Ramsay',
      },
      {
        id: '2',
        image: '/images/item-image.png',
        dealType: DealType.SHOPPING,
        price: '¥100,000',
        title: 'COACH Super Cool Wallet Super Clean',
        quantity: 196,
        donation: 10,
        username: 'David Ramsay',
      },
      {
        id: '3',
        image: '/images/item-image.png',
        dealType: DealType.RAFFLE,
        price: '¥100,000',
        title: 'COACH Super Cool Wallet Super Clean',
        prize: 196,
        left: '11Hours',
        username: 'David Ramsay',
      },
    ]

    const items: any[] = Array.from({ length: 12 }, (_, id: number) => ({
      ...data[(id + 1) % 3 ? Math.floor(id % 2) : 2],
      id: `${id + 1}`,
    }))

    return {
      keyword: toRef(state, 'value'),
      isOpen: toRef(filterDrawer.isOpen, 'value'),
      loading: toRef(loading, 'value'),
      open: filterDrawer.open,
      lightRed: colors.lightRed,
      items,
    }
  },
})
