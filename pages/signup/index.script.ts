import { defineComponent, toRefs, useContext } from '@nuxtjs/composition-api'

import { useSignupStepper } from '~/hooks'

import { IUseSignupStepper } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

import AuthBlockWrapper from '~/components/AuthBlockWrapper'

const AuthRegistrationMethod = () => import('~/components/AuthRegistrationMethod')
const AuthRegistration = () => import('~/components/AuthRegistration')
const AuthPhoneVerification = () => import('~/components/AuthPhoneVerification')
const AuthCompleted = () => import('~/components/AuthCompleted')

export default defineComponent({
  components: {
    AuthBlockWrapper,
    AuthRegistrationMethod,
    AuthRegistration,
    AuthPhoneVerification,
    AuthCompleted,
  },
  layout: 'auth/index',
  setup() {
    const { i18n }: any = useContext()

    const { state, activeStep, setStep }: IUseSignupStepper = useSignupStepper(i18n)

    const getComplete = ([step, { value }]: any[]) => value.isComplete
      && (state.step !== step || state.step === state.steps.size)
    const getColor = ([, { value }]: any[]) => (
      value.isComplete ? colors.lightGreen : colors.lightRed
    )

    return {
      ...toRefs(state),
      activeStep,
      setStep,
      getColor,
      getComplete,
    }
  },
})
