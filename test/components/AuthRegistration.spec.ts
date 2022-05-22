import { beforeEachHelper } from '~/test/helpers'

import AuthRegistration from '~/components/AuthRegistration'

describe('AuthRegistration', () => {
  let wrapper: any

  const options: any = {
    mocks: {
      $t: jest.fn(),
      $tc: jest.fn(),
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(AuthRegistration, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
