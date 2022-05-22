/* eslint-disable no-return-assign */

import { defineComponent, onUnmounted, toRef } from '@nuxtjs/composition-api'

import { DealType } from '@lxgic/enums'

import { usePagination } from '@lxgic/hooks'

import { IUsePagination } from '@lxgic/interfaces'

import { useBannerBlock, useBreadcrumbs, useDealPageFilter } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

import DealPageFilter from '~/components/DealPageFilter'

const ProductCard = () => import('~/components/ProductCard')

export default defineComponent({
  components: {
    DealPageFilter,
    ProductCard,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const { setIsVisible: setDealFilterVisibility, filterDrawer } = useDealPageFilter()
    setDealFilterVisibility(true)

    onUnmounted(() => setDealFilterVisibility(false))

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

    const items: any[] = Array.from({ length: 25 }, (_, id: number) => ({
      ...data[(id + 1) % 3 ? Math.floor(id % 2) : 2],
      id: `${id + 1}`,
    }))

    const { page }: IUsePagination = usePagination()

    return {
      page: toRef(page, 'value'),
      isOpen: toRef(filterDrawer, 'isOpen'),
      lightRed: colors.lightRed,
      open: filterDrawer.open,
      items,
    }
  },
})
