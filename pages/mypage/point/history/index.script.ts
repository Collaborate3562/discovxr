import { defineComponent, toRef } from '@nuxtjs/composition-api'

import { PointType } from '@lxgic/enums'

import { useBannerBlock, useBreadcrumbs, usePoints } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs, IUsePoints } from '~/interfaces'

const MyPageSidebar = () => import('~/components/MyPageSidebar')
const PointCard = () => import('~/components/PointCard')

export default defineComponent({
  components: {
    MyPageSidebar,
    PointCard,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const { state, setHistory }: IUsePoints = usePoints()

    // TODO: will be remove (only for design)
    setTimeout(() => {
      setHistory([
        {
          id: 1,
          title: 'Notification message message message message message',
          date: '15:40',
          point: 20000,
          type: PointType.ADDED,
        },
        {
          id: 2,
          title:
            'Notification message message message message message mes Age message message message',
          date: '1 day ago',
          point: 20000,
          type: PointType.ADDED,
        },
        {
          id: 3,
          title: 'Notification message message message message message',
          date: '7 days ago',
          point: 100,
          type: PointType.CHARGED,
        },
        ...Array.from({ length: 10 }, (_, id: number) => ({
          id: id + 4,
          title:
            'Notification message message message message message mes Age message message message',
          date: '2019-09-15',
          point: 100,
          type: PointType.CHARGED,
        })),
      ])
    }, 2000)

    return {
      items: toRef(state, 'history'),
    }
  },
})
