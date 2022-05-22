import { defineComponent } from '@nuxtjs/composition-api'

import { usePasswordField } from '@lxgic/hooks'

import { useResetPassword } from '~/hooks'

import { IUseResetPassword } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'AuthResetPasswordForm',
  setup() {
    const { onSubmitHandler }: IUseResetPassword = useResetPassword()

    return {
      password: {
        new: usePasswordField(),
        confirm: usePasswordField(),
      },
      onSubmitHandler,
      buttonColor: colors.navigationDrawer,
    }
  },
})
