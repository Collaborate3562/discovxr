import { defineComponent } from '@nuxtjs/composition-api'

import { useBannerBlock, useBreadcrumbs } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

const MyPageSidebar = () => import('~/components/MyPageSidebar')
const CouponCard = () => import('~/components/CouponCard')

export default defineComponent({
  components: {
    MyPageSidebar,
    CouponCard,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const items: any[] = [
      {
        id: '1',
        type: 'FLAT',
        title: 'Coupon title',
        description:
          'Coupon description coupon description coup on description coupon description coupon de scription coupon description coupon descript coupon description coupon description co description coupon descript coupon description coupon description co',
        currency: '10,000',
      },
      {
        id: '2',
        type: 'PERCENTAGE',
        title: 'Coupon title',
        description:
          'Coupon description coupon description coup on description coupon description coupon de scription coupon description coupon descript coupon description coupon description co description coupon descript coupon description coupon description co',
        percentage: 30,
      },
      {
        id: '3',
        type: 'FREE_SHIPPING',
        title: 'Coupon title',
        description:
          'Coupon description coupon description coup on description coupon description coupon de scription coupon description coupon descript coupon description coupon description co description coupon descript coupon description coupon description co',
      },
      {
        id: '4',
        type: 'FLAT',
        title: 'Coupon title',
        description:
          'Coupon description coupon description coup on description coupon description coupon de scription coupon description coupon descript coupon description coupon description co description coupon descript coupon description coupon description co',
        currency: '10,000',
      },
    ]

    return { items }
  },
})
