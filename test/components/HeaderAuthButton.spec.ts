import { beforeEachHelper } from '~/test/helpers'

import HeaderAuthButton from '~/components/HeaderAuthButton'

describe('HeaderAuthButton', () => {
  let wrapper: any
  const options: any = {
    mocks: {
      $tc: jest.fn(),
      localePath: jest.fn(),
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(HeaderAuthButton, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
