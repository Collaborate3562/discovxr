import { SnsType } from '@lxgic/enums'

import { useSignupStepper } from '~/hooks'

import { IUseSignupStepper } from '~/interfaces'

describe('useSignupStepper', () => {
  let wrapper: IUseSignupStepper
  const $i18n: any = {
    t: jest.fn(),
  }

  test('is a Function instance', () => {
    expect(useSignupStepper).toBeInstanceOf(Function)

    wrapper = useSignupStepper($i18n)
  })

  test('[setStep/checkStepChange] method', () => {
    expect(wrapper.setStep).toBeInstanceOf(Function)
    expect(wrapper.state.step).toBe(1)

    expect(wrapper.setStep(0)).toBeFalsy()
    expect(wrapper.setStep(1)).toBeFalsy()
    expect(wrapper.setStep(2)).toBeFalsy()
  })

  test('[setIsComplete/checkStepChange] method', () => {
    expect(wrapper.setIsComplete).toBeInstanceOf(Function)
    expect(wrapper.state.step).toBe(1)

    expect(wrapper.setIsComplete(true)).toBeTruthy()
    expect(wrapper.setStep(2)).toBeTruthy()
  })

  test('[setStepData] method', () => {
    expect(wrapper.setStepData).toBeInstanceOf(Function)

    wrapper.setStepData(1, { snsType: SnsType.BLOG })
  })

  test('[step] watcher and [transitionMode] property', () => {
    expect(wrapper.state.transitionMode).toBe('v-slide-x-transition')

    wrapper.setStep(1)
  })
})
