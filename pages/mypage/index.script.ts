import {
  computed,
  ComputedRef,
  defineComponent,
  reactive,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'

import { DealType } from '@lxgic/enums'

import { useBannerBlock, useBreadcrumbs, useUserDetail } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import { ProfileDetail } from '~/enums'

import colors from '~/assets/scss/colors.scss'

import UserDetailCard from '~/components/UserDetailCard'

const MyPageSidebar = () => import('~/components/MyPageSidebar')
const ProductCard = () => import('~/components/ProductCard')
const NotificationCard = () => import('~/components/NotificationCard')

export default defineComponent({
  components: {
    MyPageSidebar,
    ProductCard,
    NotificationCard,
    UserDetailCard,
  },
  layout: 'default/index',
  setup() {
    const { i18n, $vuetify }: any = useContext()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    // TODO: will be change (only for design)
    const {
      state: userDetailState,
      setRating,
      setAvatar,
      setUsername,
      addDetail,
      setDetailCount,
      setUserId,
    } = useUserDetail()

    setUserId(Math.floor(Math.random() * 1000).toString(10))
    setRating(4)
    setAvatar('/images/non-avatar.jpg')
    setUsername('David Ramsay')

    Array.prototype.forEach.call(
      [
        ProfileDetail.DEALS,
        ProfileDetail.FOLLOWERS,
        ProfileDetail.FOLLOWINGS,
        ProfileDetail.DONATIONS,
      ],
      (key) => addDetail(key, {
        text: i18n.t(`PROFILE.${key}`),
        count: 0,
      }),
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
    const state: any = reactive({
      items: [],
      notifications: [],
    })
    setTimeout(() => {
      setDetailCount(ProfileDetail.DEALS, 10)
      state.items = Array.from({ length: 8 }, (_, id: number) => ({
        ...data[(id + 1) % 3 ? Math.floor(id % 2) : 2],
        id: `${id + 1}`,
      }))
    }, 1000)
    setTimeout(() => {
      setDetailCount(ProfileDetail.DEALS, 11)
      state.notifications = [
        {
          id: 1,
          message: 'Notification message message message message message',
          timestamp: '15:40',
          read: true,
        },
        {
          id: 2,
          message:
            'Notification message message message message message message abcd Age message message message',
          timestamp: '1 day ago',
          read: true,
        },
        {
          id: 3,
          message: 'Notification message message message message message',
          timestamp: '7 days ago',
          read: true,
        },
        {
          id: 5,
          message:
            'Notification message message message message message message abcd Age message message message',
          timestamp: '2019-09-15',
          read: true,
        },
        {
          id: 6,
          message:
            'Notification message message message message message message abcd Age message message message',
          timestamp: '2019-09-15',
          read: true,
        },
      ]
    }, 1500)

    const nudgeRight: ComputedRef<number> = computed<number>(() => {
      switch (true) {
        case $vuetify.breakpoint.width >= 1264:
          return 255
        case $vuetify.breakpoint.width >= 1164:
          return 205
        case $vuetify.breakpoint.width >= 1024:
          return 150
        case $vuetify.breakpoint.width >= 960:
          return 100
        case $vuetify.breakpoint.width >= 768:
          return 50
        case $vuetify.breakpoint.width >= 600:
          return 48
        default:
          return 0
      }
    })

    return {
      ...toRefs(state),
      ...toRefs(userDetailState),
      nudgeRight,
      darkYellow: colors.darkYellow,
    }
  },
})
