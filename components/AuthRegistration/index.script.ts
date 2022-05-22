import { defineComponent, useContext } from '@nuxtjs/composition-api'

import { useSignupRegistration } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'AuthRegistration',
  setup() {
    const { i18n }: any = useContext()

    return {
      ...useSignupRegistration(i18n),
      lightRed: colors.lightRed,
    }
  },
})
