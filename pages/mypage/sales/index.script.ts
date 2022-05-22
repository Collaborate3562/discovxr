import { defineComponent, useContext } from '@nuxtjs/composition-api'

import { SalesLink } from '~/enums'

import { useBannerBlock, useBreadcrumbs } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

const MyPageSidebar = () => import('~/components/MyPageSidebar')

export default defineComponent({
  components: {
    MyPageSidebar,
  },
  layout: 'default/index',
  setup() {
    const { i18n }: any = useContext()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const items: any[] = [
      {
        title: i18n.tc('SALES.TITLE', 1),
        list: [
          SalesLink.BALANCE,
          SalesLink.BALANCE_HISTORY,
          SalesLink.SALES,
        ].map((route) => ({
          text: i18n.t(`SALES.${SalesLink[route]}`),
          route,
        })),
      },
      {
        title: i18n.tc('SALES.TITLE', 0),
        list: [
          SalesLink.CURRENT,
          SalesLink.REQUEST_HISTORY,
          SalesLink.SCHEDULE,
        ].map((route) => ({
          text: i18n.t(`SALES.${SalesLink[route]}`),
          route,
        })),
      },
    ]

    return { items }
  },
})
