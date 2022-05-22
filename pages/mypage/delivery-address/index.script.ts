import { computed, ComputedRef, defineComponent } from '@nuxtjs/composition-api'

import { useRegionAndLanguage } from '@lxgic/hooks'

import { Region } from '@lxgic/enums'

import { IUseRegionAndLanguage } from '@lxgic/interfaces'

import { useBannerBlock, useBreadcrumbs } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

const MyPageSidebar = () => import('~/components/MyPageSidebar')

export default defineComponent({
  components: {
    MyPageSidebar,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const { state }: IUseRegionAndLanguage = useRegionAndLanguage()

    const isJapan: ComputedRef<boolean> = computed<boolean>(
      () => state.region === Region.JAPAN,
    )

    return {
      isJapan,
      lightBlack: colors.lightBlack,
    }
  },
})
