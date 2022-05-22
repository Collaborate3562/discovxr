import { defineComponent } from '@nuxtjs/composition-api'

import { useResetPassword } from '~/hooks'

import { IUseResetPassword } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

import AuthBlockWrapper from '~/components/AuthBlockWrapper'

const AuthResetPasswordForm = () => import('~/components/AuthResetPasswordForm')

export default defineComponent({
  components: {
    AuthBlockWrapper,
    AuthResetPasswordForm,
  },
  layout: 'auth/index',
  setup() {
    const { isComplete }: IUseResetPassword = useResetPassword()

    return {
      isComplete,
      buttonColor: colors.lightRed,
    }
  },
})
