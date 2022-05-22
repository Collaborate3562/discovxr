import { defineComponent } from '@nuxtjs/composition-api'

import { useBannerBlock, useBreadcrumbs } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

import EditProfile from '~/components/EditProfile'
import EditProfileSnsAccounts from '~/components/EditProfileSnsAccounts'

const MyPageSidebar = () => import('~/components/MyPageSidebar')

export default defineComponent({
  components: {
    MyPageSidebar,
    EditProfile,
    EditProfileSnsAccounts,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    return {
      lightBlack: colors.lightBlack,
    }
  },
})
