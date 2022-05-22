import { defineComponent, toRefs } from '@nuxtjs/composition-api'

import { DealType, Status } from '@lxgic/enums'

import { useBannerBlock, useBreadcrumbs, useInbox } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

const MyPageSidebar = () => import('~/components/MyPageSidebar')
const InboxCard = () => import('~/components/InboxCard')

export default defineComponent({
  components: {
    MyPageSidebar,
    InboxCard,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const { state, setItems } = useInbox()

    // TODO: will be remove (only for design)
    setTimeout(() => {
      setItems([
        {
          id: 1,
          inbox: '1243657',
          image: '/images/item-image.png',
          username: 'David Ramsay',
          title: 'Item title',
          lastMessage:
            'Latest message Latest message Latest message Latest message Latest message Latest',
          timestamp: '15:40',
          status: Status.MAKE_PAYMENT,
          dealType: DealType.AUCTION,
        },
        {
          id: 2,
          inbox: '2243657',
          image: '/images/item-image.png',
          username: 'David Ramsay',
          title: 'Item title',
          lastMessage:
            'Latest message Latest message Latest message Latest message Latest message Latest',
          timestamp: '1 day ago',
          status: Status.WAITING_SHIPMENT,
          dealType: DealType.SHOPPING,
        },
        {
          id: 3,
          inbox: '3243657',
          image: '/images/item-image.png',
          username: 'David Ramsay',
          title: 'Item title',
          lastMessage:
            'Latest message Latest message Latest message Latest message Latest message Latest',
          timestamp: '7 days ago',
          status: Status.REPORT_RECEIVED,
          dealType: DealType.RAFFLE,
        },
        {
          id: 4,
          inbox: '4243657',
          image: '/images/item-image.png',
          username: 'David Ramsay',
          title: 'Item title',
          lastMessage:
            'Latest message Latest message Latest message Latest message Latest message Latest',
          timestamp: '2019-09-15',
          status: Status.REVIEW,
          dealType: DealType.AUCTION,
        },
        {
          id: 5,
          inbox: '5243657',
          image: '/images/item-image.png',
          username: 'David Ramsay',
          title: 'Item title',
          lastMessage:
            'Latest message Latest message Latest message Latest message Latest message Latest',
          timestamp: '2019-09-15',
          status: Status.COMPLETE,
          dealType: DealType.AUCTION,
        },
        ...Array.from({ length: 5 }, (_, id: number) => ({
          id: id + 6,
          inbox: `${id + 6}243657`,
          username: 'David Ramsay',
          title: 'Item title',
          lastMessage:
            'Latest message Latest message Latest message Latest message Latest message Latest',
          timestamp: '2019-09-15',
          status: Status.MAKE_PAYMENT,
          dealType: DealType.AUCTION,
        })),
      ])
    }, 1000)

    return {
      ...toRefs(state),
    }
  },
})
