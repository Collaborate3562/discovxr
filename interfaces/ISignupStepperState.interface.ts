import { Ref } from '@nuxtjs/composition-api'

import { ISignupStep } from '~/interfaces'

export interface ISignupStepperState {
  step: number
  transitionMode: string
  steps: Map<number, Ref<ISignupStep>>
}
