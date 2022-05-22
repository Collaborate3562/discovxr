import { defineComponent, toRefs, useContext } from '@nuxtjs/composition-api'

import { Notifications } from '~/enums'

import { useBannerBlock, useBreadcrumbs, useNotifications } from '~/hooks'

import {
  IUseBannerBlock,
  IUseNotifications,
  IUseBreadcrumbs,
} from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

const MyPageSidebar = () => import('~/components/MyPageSidebar')
const NotificationCard = () => import('~/components/NotificationCard')

export default defineComponent({
  components: {
    MyPageSidebar,
    NotificationCard,
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
      setTab,
      setTabItems,
      setNotificationCount,
      getItems,
    }: IUseNotifications = useNotifications()

    Array.prototype.forEach.call(
      [Notifications.DEALS, Notifications.DISCOVXR],
      (key: Notifications) => setTab(key, i18n.tc('NOTIFICATION.TABS', key)),
    )

    // TODO: will be change (only for desing)
    setTabItems(
      Notifications.DISCOVXR,
      Array.from({ length: 11 }, (_, id: number) => ({
        id,
        message:
          id % 2 || id % 3
            ? 'Notification message message message message message message abcd Age message message message Notification message '
            : 'Notification message message message message message message abcd Age message message message Notification message message message message message message abcd Age message message message Notification message message message message message message abcd Age message message message Notification message message message message message message abcd Age mess',
        timestamp: '2019-09-15',
        read: id > 1,
      })),
    )

    setTimeout(() => {
      setNotificationCount(Notifications.DISCOVXR, 1)

      setTimeout(() => setNotificationCount(Notifications.DISCOVXR, 2), 2000)
    }, 2000)

    return {
      ...toRefs(state),
      getItems,
      lightRed: colors.lightRed,
    }
  },
})
