import { SnsType } from '@lxgic/enums'

import { beforeEachHelper } from '~/test/helpers'

import Login from '~/pages/login'

describe('Login page', () => {
  let wrapper: any

  const options: any = {
    mocks: {
      $t: jest.fn(),
      $tc: jest.fn(),
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
    wrapper = beforeEachHelper(Login, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('[snsButtonClickHandler] method', () => {
    expect(wrapper.vm.snsButtonClickHandler).toBeInstanceOf(Function)

    wrapper.vm.snsButtonClickHandler(SnsType.BLOG)

    expect(wrapper.vm.isLoginForm).toBeTruthy()
  })
})
