import { defineComponent } from '@nuxtjs/composition-api'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'AuthCompleted',
  setup() {
    return {
      lightRed: colors.lightRed,
    }
  },
})
