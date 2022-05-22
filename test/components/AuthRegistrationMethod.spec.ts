import { beforeEachHelper } from '~/test/helpers'

import AuthRegistrationMethod from '~/components/AuthRegistrationMethod'

describe('AuthRegistrationMethod', () => {
  let wrapper: any

  const options: any = {
    mocks: {
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
    wrapper = beforeEachHelper(AuthRegistrationMethod, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('[snsButtonClickHandler] method', () => {
    expect(wrapper.vm.snsButtonClickHandler).toBeInstanceOf(Function)

    wrapper.vm.snsButtonClickHandler()
  })
})
