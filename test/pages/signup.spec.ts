import { beforeEachHelper } from '~/test/helpers'

import Signup from '~/pages/signup'

describe('Signup page', () => {
  let wrapper: any

  const options: any = {
    stubs: {
      AuthBlockWrapper: true,
    },
    mocks: {
      $t: jest.fn(),
      $tc: jest.fn(),
      localePath: jest.fn(),
      $nuxt: {
        context: {
          i18n: {
            t: jest.fn(),
          },
        },
      },
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(Signup, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('[getColor/getComplete] method', () => {
    expect(wrapper.vm.getColor).toBeInstanceOf(Function)
    expect(wrapper.vm.getComplete).toBeInstanceOf(Function)

    const [firstStep]: any[] = [...wrapper.vm.steps.entries()]

    wrapper.vm.getColor(firstStep)
    wrapper.vm.getComplete(firstStep)

    firstStep[1].value.isComplete = true

    wrapper.vm.getColor(firstStep)
    wrapper.vm.getComplete(firstStep)
  })

  test('[setStep] method', () => {
    expect(wrapper.vm.setStep).toBeInstanceOf(Function)

    expect(wrapper.vm.setStep(2)).toBe(2)
  })
})
