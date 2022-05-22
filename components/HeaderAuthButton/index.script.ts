import { defineComponent } from '@nuxtjs/composition-api'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'HeaderAuthButton',
  setup() {
    return {
      lightRed: colors.lightRed,
    }
  },
})
