import { defineComponent, toRefs, useContext } from '@nuxtjs/composition-api'

import { usePhoneVerification, useSignupStepper } from '~/hooks'

import { IUsePhoneVerification, IUseSignupStepper } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'AuthPhoneVerification',
  setup() {
    const { i18n }: any = useContext()

    const {
      state: verificationState,
      getVerificationCode,
    }: IUsePhoneVerification = usePhoneVerification()

    const { state, setStep, setIsComplete }: IUseSignupStepper = useSignupStepper(i18n)

    const onNextHandler = () => {
      setIsComplete(true)

      setStep(state.step + 1)

      setIsComplete(true)
    }

    return {
      ...toRefs(verificationState),
      onNextHandler,
      getVerificationCode,
      lightRed: colors.lightRed,
      buttonColor: colors.navigationDrawer,
    }
  },
})
