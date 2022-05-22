import { defineComponent } from '@nuxtjs/composition-api'

import { useBannerBlock, useBreadcrumbs } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import PopularListBlock from '~/components/PopularListBlock'

export default defineComponent({
  components: {
    PopularListBlock,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    // TODO: level routes
  },
})
