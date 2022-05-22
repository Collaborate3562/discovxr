import { defineComponent } from '@nuxtjs/composition-api'

import { useNavigationSidebar } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'MobileNavigationDrawer',
  setup() {
    const { isOpen, list, setNotificationCount } = useNavigationSidebar()

    // TODO: will be remove (only for design)
    setTimeout(() => setNotificationCount(0, 2, 1), 2000)
    setTimeout(() => setNotificationCount(0, 2, 2), 3000)
    setTimeout(() => setNotificationCount(0, 7, 1), 4000)
    setTimeout(() => setNotificationCount(0, 7, 7), 5000)

    return {
      list,
      isOpen,
      lightRed: colors.lightRed,
    }
  },
})
