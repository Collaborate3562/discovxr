import { defineComponent } from '@nuxtjs/composition-api'

import { usePasswordField } from '@lxgic/hooks'

import { useLogin } from '~/hooks'

import { IUseLogin } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'AuthLoginForm',
  setup() {
    const { setIsLoginForm }: IUseLogin = useLogin()

    return {
      ...usePasswordField(),
      setIsLoginForm,
      buttonColor: colors.navigationDrawer,
    }
  },
})
