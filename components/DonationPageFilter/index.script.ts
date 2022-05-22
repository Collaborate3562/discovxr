import { defineComponent, toRef } from '@nuxtjs/composition-api'

import colors from '~/assets/scss/colors.scss'

import { useDonationPageFilter } from '~/hooks'

export default defineComponent({
  name: 'DonationPageFilter',
  setup() {
    const { filterDrawer } = useDonationPageFilter()

    return {
      isOpen: toRef(filterDrawer, 'isOpen'),
      open: filterDrawer.open,
      close: filterDrawer.close,
      lightRed: colors.lightRed,
    }
  },
})
