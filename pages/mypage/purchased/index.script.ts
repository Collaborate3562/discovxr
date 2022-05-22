import { defineComponent, toRefs, useContext } from '@nuxtjs/composition-api'

import { DealType, Status } from '@lxgic/enums'

import { useBannerBlock, useBreadcrumbs, usePurchased } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs, IUsePurchased } from '~/interfaces'

import { Purchased } from '~/enums'

import colors from '~/assets/scss/colors.scss'

const MyPageSidebar = () => import('~/components/MyPageSidebar')
const InProgressCard = () => import('~/components/InProgressCard')
const CommentCard = () => import('~/components/CommentCard')
const CompletedCard = () => import('~/components/CompletedCard')

export default defineComponent({
  components: {
    MyPageSidebar,
    InProgressCard,
    CommentCard,
    CompletedCard,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const { i18n }: any = useContext()

    const {
      state,
      getItems,
      setTab,
      setTabItems,
      setNotificationCount,
    }: IUsePurchased = usePurchased()

    Array.prototype.forEach.call(
      [Purchased.ON_DEAL, Purchased.COMMENTS, Purchased.PURCHASED],
      (key: Purchased) => setTab(key, i18n.tc('PURCHASED_ITEMS.TABS', key)),
    )

    // TODO: will be remove (only for design)
    setTimeout(() => {
      setNotificationCount(Purchased.COMMENTS, 1)

      setTimeout(() => setNotificationCount(Purchased.COMMENTS, 2), 2000)
    }, 2000)
    setTimeout(() => {
      setTabItems(Purchased.ON_DEAL, [
        {
          id: 0,
          title: 'Item title',
          timestamp: '15:40',
          dealType: DealType.AUCTION,
          image: '/images/item-image.png',
        },
        {
          id: 2,
          title:
            'Item title Item title Item title Item title Item title Item title Item title Item titl Item title Item title Item title Item title',
          timestamp: '1 day ago',
          dealType: DealType.SHOPPING,
          image: '/images/item-image.png',
        },
        {
          id: 3,
          title: 'Item title Item title Item title Item title Item title',
          timestamp: '7 days ago',
          dealType: DealType.RAFFLE,
          image: '/images/item-image.png',
        },
        ...Array.from({ length: 7 }, (_, id: number) => ({
          id: id + 4,
          title:
            id % 3
              ? 'Item title Item title Item title Item title Item title Item title Item title Item titl Item title Item title Item title Item title'
              : 'Item title Item title Item title Item title Item title',
          timestamp: '2019-09-15',
          dealType: DealType.RAFFLE,
          image: '/images/item-image.png',
        })),
      ])
    }, 1500)
    setTimeout(() => {
      setTabItems(Purchased.COMMENTS, [
        {
          id: 1,
          title: 'Item title',
          timestamp: '15:40',
          dealType: DealType.AUCTION,
          image: '/images/item-image.png',
          username: 'Visitor username',
          message:
            'Message from visitor, message from visitor, message from visitor message ii from visitor, message from visitor fdasklii Fdasjd flsaf sdlkjal.f fkja lklklkdjf fdsafd sajfldksjf klakjfdlasa.',
          replied: true,
        },
        {
          id: 2,
          title:
            'Item title Item title Item title Item title Item title Item title Item title Item titl Item title Item title Item title Item title',
          timestamp: '7 days ago',
          dealType: DealType.SHOPPING,
          image: '/images/item-image.png',
          username: 'Visitor username',
          message:
            'Message from visitor, message from visitor, message from visitor mes?',
          replied: true,
        },
        {
          id: 3,
          title: 'Item title ',
          timestamp: '7 days ago',
          dealType: DealType.RAFFLE,
          image: '/images/item-image.png',
          username: 'Visitor username',
          message:
            'Message from visitor, message from visitor, message from visitor message ii from visitor, message from visitor fdasklii Fdasj dflsafsd lkjal.f fkja lklklkdjf fdsafdsaj fl dksjfklakjfdlasa.',
          replied: false,
        },
        {
          id: 4,
          title:
            'Item title Item title Item title Item title Item title Item title Item title Item titl Item title Item title Item title Item title',
          timestamp: '7 days ago',
          dealType: DealType.SHOPPING,
          image: '/images/item-image.png',
          username: 'Visitor username',
          message:
            'Message from visitor, message from visitor, message from visitor mes?',
          replied: true,
        },
        {
          id: 5,
          title:
            'Item title Item title Item title Item title Item title Item title Item title Item titl Item title Item title Item title Item title',
          timestamp: '7 days ago',
          dealType: DealType.SHOPPING,
          image: '/images/item-image.png',
          username: 'Visitor username',
          message:
            'Message from visitor, message from visitor, message from visitor mes?',
          replied: true,
        },
      ])
    }, 2000)
    setTimeout(() => {
      setTabItems(Purchased.PURCHASED, [
        {
          id: 1,
          title: 'Item title',
          timestamp: '15:40',
          dealType: DealType.AUCTION,
          image: '/images/item-image.png',
          status: Status.MAKE_PAYMENT,
        },
        {
          id: 2,
          title:
            'Item title Item title Item title Item title Item title Item title Item title Item title as Item title Item title Item title Item title',
          timestamp: '1 day ago',
          dealType: DealType.SHOPPING,
          image: '/images/item-image.png',
          status: Status.WAITING_SHIPMENT,
        },
        {
          id: 3,
          title: 'Item title Item title Item title Item title Item title',
          timestamp: '7 days ago',
          dealType: DealType.RAFFLE,
          image: '/images/item-image.png',
          status: Status.REPORT_RECEIVED,
        },
        {
          id: 4,
          title:
            'Item title Item title Item title Item title Item title Item title Item title Item title as Item title Item title Item title Item title',
          timestamp: '2019-09-15',
          dealType: DealType.AUCTION,
          image: '/images/item-image.png',
          status: Status.REVIEW,
        },
        {
          id: 5,
          title:
            'Item title Item title Item title Item title Item title Item title Item title Item title as Item title Item title Item title Item title',
          timestamp: '2019-09-15',
          dealType: DealType.AUCTION,
          image: '/images/item-image.png',
          status: Status.COMPLETE,
        },
        ...Array.from({ length: 5 }, (_, id: number) => ({
          id: id + 6,
          title:
            'Item title Item title Item title Item title Item title Item title Item title Item title as Item title Item title Item title Item title',
          timestamp: '2019-09-15',
          dealType: DealType.AUCTION,
          image: '/images/item-image.png',
          status: Status.MAKE_PAYMENT,
        })),
      ])
    }, 2500)

    const isInProgress = (type: Purchased): boolean => type === Purchased.ON_DEAL
    const isComments = (type: Purchased): boolean => type === Purchased.COMMENTS

    return {
      ...toRefs(state),
      getItems,
      isInProgress,
      isComments,
      lightRed: colors.lightRed,
    }
  },
})
