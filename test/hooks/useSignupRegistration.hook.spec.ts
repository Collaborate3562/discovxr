import { Region, SnsType } from '@lxgic/enums'

import { IUseRegionAndLanguage } from '@lxgic/interfaces'

import { useRegionAndLanguage } from '@lxgic/hooks'

import { useSignupRegistration, useSignupStepper } from '~/hooks'

import { IUseSignupStepper } from '~/interfaces'

describe('useSignupRegistration', () => {
  let wrapper: any
  const $i18n: any = {
    t: jest.fn(),
  }

  test('is a Function instance', () => {
    expect(useSignupRegistration).toBeInstanceOf(Function)

    wrapper = useSignupRegistration($i18n)
  })

  test('[onNextHandler] method', () => {
    expect(wrapper.onNextHandler).toBeInstanceOf(Function)

    wrapper.onNextHandler()
  })

  test('[isBlog] computed property', () => {
    const { setStepData }: IUseSignupStepper = useSignupStepper($i18n)

    setStepData(1, null)
    expect(wrapper.isBlog.value).toBeFalsy()

    setStepData(1, { snsType: SnsType.BLOG })
    expect(wrapper.isBlog.value).toBeTruthy()
  })

  test('[isJapanRegion] computed property', () => {
    const { setRegion }: IUseRegionAndLanguage = useRegionAndLanguage()

    setRegion(Region.JAPAN)

    expect(wrapper.isJapanRegion.value).toBeTruthy()
  })
})
