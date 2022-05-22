/* eslint-disable no-unused-vars */

import { ComputedRef } from '@nuxtjs/composition-api'

import { ISignupStep, ISignupStepperState } from '~/interfaces'

export interface IUseSignupStepper {
  state: ISignupStepperState
  activeStep: ComputedRef<ISignupStep>
  setStep(step: number): any
  setStepData(step: number, data: any): void
  setIsComplete(value: boolean): boolean
}
