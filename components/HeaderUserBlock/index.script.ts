import { defineComponent } from '@nuxtjs/composition-api'

import HeaderLikesBlock from '~/components/HeaderLikesBlock'
import HeaderNotificationMenu from '~/components/HeaderNotificationMenu'
import HeaderProfileMenu from '~/components/HeaderProfileMenu'

export default defineComponent({
  name: 'HeaderUserBlock',
  components: {
    HeaderLikesBlock,
    HeaderNotificationMenu,
    HeaderProfileMenu,
  },
})
