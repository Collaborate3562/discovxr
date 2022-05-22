import {
  defineComponent,
  toRef,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'

import { DealType, Status } from '@lxgic/enums'

import {
  useBannerBlock,
  useBreadcrumbs,
  useListings,
  useSendItemModal,
} from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs, IUseListings } from '~/interfaces'

import { Listings } from '~/enums'

import colors from '~/assets/scss/colors.scss'

const MyPageSidebar = () => import('~/components/MyPageSidebar')
const InProgressCard = () => import('~/components/InProgressCard')
const CommentCard = () => import('~/components/CommentCard')
const CompletedCard = () => import('~/components/CompletedCard')
const SendItemModal = () => import('~/components/SendItemModal')

export default defineComponent({
  components: {
    MyPageSidebar,
    SendItemModal,
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
    }: IUseListings = useListings()

    Array.prototype.forEach.call(
      [Listings.ON_DEAL, Listings.COMMENTS, Listings.SOLD],
      (key: Listings) => setTab(key, i18n.tc('SOLD_ITEMS.TABS', key)),
    )

    // TODO: will be remove (only for design)
    setTimeout(() => {
      setNotificationCount(Listings.COMMENTS, 1)

      setTimeout(() => setNotificationCount(Listings.COMMENTS, 2), 2000)
    }, 2000)
    setTimeout(() => {
      setTabItems(Listings.ON_DEAL, [
        {
          id: 1,
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
      setTabItems(Listings.COMMENTS, [
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
      setTabItems(Listings.SOLD, [
        {
          id: 1,
          title: 'Item title',
          timestamp: '15:40',
          dealType: DealType.AUCTION,
          image: '/images/item-image.png',
          status: Status.WAITING_PAYMENT,
        },
        {
          id: 2,
          title:
            'Item title Item title Item title Item title Item title Item title Item title Item title as Item title Item title Item title Item title',
          timestamp: '1 day ago',
          dealType: DealType.SHOPPING,
          image: '/images/item-image.png',
          status: Status.SEND_ITEM,
        },
        {
          id: 3,
          title: 'Item title Item title Item title Item title Item title',
          timestamp: '7 days ago',
          dealType: DealType.RAFFLE,
          image: '/images/item-image.png',
          status: Status.WAITING_PAYMENT,
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
          status: Status.SEND_ITEM,
        })),
      ])
    }, 2500)

    const isInProgress = (type: Listings): boolean => type === Listings.ON_DEAL
    const isComments = (type: Listings): boolean => type === Listings.COMMENTS

    const { isOpen } = useSendItemModal()

    return {
      ...toRefs(state),
      isOpen: toRef(isOpen, 'value'),
      getItems,
      isInProgress,
      isComments,
      lightRed: colors.lightRed,
    }
  },
})
