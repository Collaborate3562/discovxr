/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import {
  computed,
  ComputedRef,
  reactive,
  Ref,
  ref,
  watch,
} from '@nuxtjs/composition-api'

import { useSnackbar } from '@lxgic/hooks'

import { IUseSnackbar } from '@lxgic/interfaces'

import { ToastColor } from '@lxgic/enums'

import {
  ISignupStep,
  ISignupStepperState,
  IUseSignupStepper,
} from '~/interfaces'

import { SignupStep } from '~/enums'

const state: ISignupStepperState = reactive<ISignupStepperState>({
  step: 1,
  transitionMode: 'v-slide-x-transition',
  steps: new Map(
    Object.entries(SignupStep).map(([key, value], i) => [
      i + 1,
      ref<ISignupStep>({
        isComplete: false,
        component: value,
        label: `SIGNUP.${key}.LABEL`,
        title: `SIGNUP.${key}.TITLE`,
        subtitle: !i && `SIGNUP.${key}.SUBTITLE`,
        data: null,
      }),
    ]),
  ),
})

watch(
  () => state.step,
  (old, value) => (state.transitionMode = `v-slide-${
    value > old ? 'x-reverse' : 'x'
  }-transition`),
)

const activeStep: ComputedRef<ISignupStep> = computed<ISignupStep>(
  () => (<Ref<ISignupStep>>state.steps.get(state.step)).value,
)

export function useSignupStepper($i18n: any): IUseSignupStepper {
  const { $open }: IUseSnackbar = useSnackbar()

  const checkStepChange = (step: number): any => {
    if (step === state.step) {
      return false
    }

    if (!state.steps.get(step > 1 ? step - 1 : step)?.value?.isComplete) {
      return $open(ToastColor.WARNING, $i18n.t('SNACKBAR.NOT_COMPLETED_STEP'))
    }

    return true
  }

  const setStep = (step: number): any => checkStepChange(step) && (state.step = step)

  const setStepData = (step: number, data: any): void => {
    if (state.steps.has(step)) {
      (<Ref<ISignupStep>>state.steps.get(step)).value.data = data
    }
  }

  const setIsComplete = (value: boolean): boolean => (activeStep.value.isComplete = value)

  return {
    state,
    activeStep,
    setStep,
    setStepData,
    setIsComplete,
  }
}
