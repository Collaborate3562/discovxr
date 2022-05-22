import { beforeEachHelper } from '~/test/helpers'

import AuthLoginForm from '~/components/AuthLoginForm'

describe('AuthLoginForm', () => {
  let wrapper: any

  const options: any = {
    mocks: {
      $t: jest.fn(),
      $tc: jest.fn(),
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(AuthLoginForm, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
