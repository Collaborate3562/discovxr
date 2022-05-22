import { beforeEachHelper } from '~/test/helpers'

import ResetPassword from '~/pages/password/reset'

describe('ResetPassword page', () => {
  let wrapper: any

  const options: any = {
    mocks: {
      $t: jest.fn(),
      $tc: jest.fn(),
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(ResetPassword, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
