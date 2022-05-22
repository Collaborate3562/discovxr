import { defineComponent, toRefs } from '@nuxtjs/composition-api'

import { useBannerBlock } from '~/hooks'

import { IUseBannerBlock } from '~/interfaces'

export default defineComponent({
  name: 'BannerBlock',
  setup() {
    const { state, setBanner }: IUseBannerBlock = useBannerBlock()

    setBanner('/images/slide-image-section.png')

    return {
      ...toRefs(state),
    }
  },
})
