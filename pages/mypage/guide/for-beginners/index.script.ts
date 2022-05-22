import { defineComponent, toRefs, useContext } from '@nuxtjs/composition-api'

import { Beginners } from '~/enums'

import { useBannerBlock, useBeginners, useBreadcrumbs } from '~/hooks'

import { IUseBannerBlock, IUseBeginners, IUseBreadcrumbs } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

const MyPageSidebar = () => import('~/components/MyPageSidebar')

export default defineComponent({
  components: {
    MyPageSidebar,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const { i18n }: any = useContext()

    const {
      state, setTab, setTabItems, getItems,
    }: IUseBeginners = useBeginners()

    Array.prototype.forEach.call(
      [Beginners.PURCHASE_ITEMS, Beginners.START_DEALS],
      (key: Beginners) => setTab(key, i18n.tc('BEGINNERS.TABS', key)),
    )

    // TODO: will be change
    setTabItems(Beginners.START_DEALS, [
      {
        title: 'Put up your items on auction',
        image: '/images/auth-footer-logo.png',
        route: '/#',
      },
      {
        title: 'Save your auction data into draft or edit',
        image: '/images/auth-footer-logo.png',
        route: '/#',
      },
      {
        title: 'Accept or reject purchase from bidders',
        image: '/images/auth-footer-logo.png',
        route: '/#',
      },
      {
        title: 'Ship an item',
        image: '/images/auth-footer-logo.png',
        route: '/#',
      },
      {
        title: 'Ask discovxr to ship an item for seller',
        image: '/images/auth-footer-logo.png',
        route: '/#',
      },
      {
        title: 'Rate bidders',
        image: '/images/auth-footer-logo.png',
        route: '/#',
      },
      {
        title: 'Receive payment',
        image: '/images/auth-footer-logo.png',
        route: '/#',
      },
    ])

    return {
      ...toRefs(state),
      getItems,
      lightRed: colors.lightRed,
    }
  },
})
