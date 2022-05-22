import { beforeEachHelper } from '~/test/helpers'

import AuthPhoneVerification from '~/components/AuthPhoneVerification'

describe('AuthPhoneVerification', () => {
  let wrapper: any

  const options: any = {
    mocks: {
      $t: jest.fn(),
      $tc: jest.fn(),
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(AuthPhoneVerification, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('[onNextHandler] method', () => {
    expect(wrapper.vm.onNextHandler).toBeInstanceOf(Function)

    wrapper.vm.onNextHandler()
  })
})
