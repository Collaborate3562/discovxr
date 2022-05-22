/* eslint-disable import/prefer-default-export */

import { computed, ComputedRef, Ref } from '@nuxtjs/composition-api'

import { usePasswordField, useRegionAndLanguage } from '@lxgic/hooks'

import { FileExtension, Region, SnsType } from '@lxgic/enums'

import { IUseRegionAndLanguage } from '@lxgic/interfaces'

import { useSignupStepper } from '~/hooks'

import { ISignupStep, IUseSignupStepper } from '~/interfaces'

export function useSignupRegistration($i18n: any) {
  const accept: FileExtension[] = [
    FileExtension.PNG,
    FileExtension.JPEG,
    FileExtension.JPG,
  ]

  const { state }: IUseRegionAndLanguage = useRegionAndLanguage()

  const {
    state: stepperState,
    setIsComplete,
    setStep,
  }: IUseSignupStepper = useSignupStepper($i18n)

  const isBlog: ComputedRef<boolean> = computed<boolean>(
    () => (<Ref<ISignupStep>>stepperState.steps.get(1)).value.data?.snsType
      === SnsType.BLOG,
  )
  const isJapanRegion: ComputedRef<boolean> = computed<boolean>(
    () => state.region === Region.JAPAN,
  )

  // TODO: will be change
  const onNextHandler = () => {
    setIsComplete(true)
    setStep(stepperState.step + 1)
  }

  return {
    accept,
    isBlog,
    isJapanRegion,
    password: {
      current: usePasswordField(),
      confirm: usePasswordField(),
    },
    onNextHandler,
  }
}
