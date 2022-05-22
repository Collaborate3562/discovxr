import { defineComponent, useContext } from '@nuxtjs/composition-api'

import { SnsType } from '@lxgic/enums'

import { useLogin, useSnsButton } from '~/hooks'

import { IUseLogin, IUseSnsButton } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

import AuthBlockWrapper from '~/components/AuthBlockWrapper'
import SnsButton from '~/components/SnsButton'

const AuthLoginForm = () => import('~/components/AuthLoginForm')

export default defineComponent({
  components: {
    AuthBlockWrapper,
    SnsButton,
    AuthLoginForm,
  },
  layout: 'auth/index',
  setup() {
    const { i18n }: any = useContext()

    const { buttons, add }: IUseSnsButton = useSnsButton()

    Array.prototype.forEach.call(
      [
        SnsType.INSTAGRAM,
        SnsType.TWITTER,
        SnsType.YOUTUBE,
        SnsType.FACEBOOK,
        SnsType.BLOG,
        SnsType.EMAIL,
      ],
      (type: SnsType) => add(type, {
        text: i18n.t(`LOGIN.SNS.${type}`),
      }),
    )

    const { isLoginForm, snsButtonClickHandler }: IUseLogin = useLogin()

    return {
      lightRed: colors.lightRed,
      buttons,
      isLoginForm,
      snsButtonClickHandler,
    }
  },
})
