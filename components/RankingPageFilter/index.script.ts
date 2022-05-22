import { defineComponent, toRef } from '@nuxtjs/composition-api'

import colors from '~/assets/scss/colors.scss'

import { useRankingPageFilter } from '~/hooks'

export default defineComponent({
  name: 'RankingPageFilter',
  setup() {
    const { filterDrawer } = useRankingPageFilter()

    return {
      isOpen: toRef(filterDrawer, 'isOpen'),
      open: filterDrawer.open,
      close: filterDrawer.close,
      lightRed: colors.lightRed,
    }
  },
})
