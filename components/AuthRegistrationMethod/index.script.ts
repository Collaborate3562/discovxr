import { defineComponent, useContext } from '@nuxtjs/composition-api'

import { SnsType } from '@lxgic/enums'

import { useSignupStepper, useSnsButton } from '~/hooks'

import { IUseSignupStepper, IUseSnsButton } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

import SnsButton from '~/components/SnsButton'

export default defineComponent({
  name: 'AuthRegistrationMethod',
  components: {
    SnsButton,
  },
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
        text: i18n.t(`SIGNUP.REGISTRATION_METHOD.SNS.${type}`),
      }),
    )

    const {
      state, setIsComplete, setStep, setStepData,
    }: IUseSignupStepper = useSignupStepper(i18n)

    // TODO: will be change
    const snsButtonClickHandler = (snsType: SnsType) => {
      setStepData(state.step, { snsType })

      setIsComplete(true)

      setStep(state.step + 1)
    }

    return {
      buttons,
      snsButtonClickHandler,
      lightRed: colors.lightRed,
    }
  },
})
