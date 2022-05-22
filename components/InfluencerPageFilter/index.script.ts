import { defineComponent, toRef } from '@nuxtjs/composition-api'

import colors from '~/assets/scss/colors.scss'

import { useInfluencerPageFilter } from '~/hooks'

export default defineComponent({
  name: 'InfluencerPageFilter',
  setup() {
    const { filterDrawer } = useInfluencerPageFilter()

    return {
      isOpen: toRef(filterDrawer, 'isOpen'),
      open: filterDrawer.open,
      close: filterDrawer.close,
      lightRed: colors.lightRed,
    }
  },
})
