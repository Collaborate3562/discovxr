import { defineComponent, toRef, useContext } from '@nuxtjs/composition-api'

import { PointsLink } from '~/enums'

import { useBannerBlock, useBreadcrumbs, usePoints } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs, IUsePoints } from '~/interfaces'

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

    const { state, setList, setPoint }: IUsePoints = usePoints()

    // TODO: will be remove (only for design)
    setPoint('1,260')
    setTimeout(() => setPoint('1,261'), 1000)
    setTimeout(() => setPoint('1,262'), 2000)

    setList(
      Object.entries(PointsLink).map(([key, route]) => ({
        text: i18n.t(`POINTS.LIST.${key}`),
        route,
      })),
    )

    return {
      items: toRef(state, 'list'),
      points: toRef(state, 'points'),
    }
  },
})
