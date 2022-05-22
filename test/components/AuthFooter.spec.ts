import { beforeEachHelper } from '~/test/helpers'

import { AuthFooterButton } from '~/enums'

import AuthFooter from '~/components/AuthFooter'

describe('AuthFooter', () => {
  let wrapper: any

  const options: any = {
    mocks: {
      $t: jest.fn(),
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(AuthFooter, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('[onButtonHandler] method [JAPAN]', () => {
    expect(wrapper.vm.onButtonHandler).toBeInstanceOf(Function)

    wrapper.vm.onButtonHandler(AuthFooterButton.JAPAN)
  })

  test('[onButtonHandler] method [JAPANESE]', () => {
    wrapper.vm.onButtonHandler(AuthFooterButton.JAPANESE)
  })
})
