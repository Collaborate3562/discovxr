import { beforeEachHelper } from '~/test/helpers'

import AuthResetPasswordForm from '~/components/AuthResetPasswordForm'

describe('AuthResetPasswordForm', () => {
  let wrapper: any

  const options: any = {
    mocks: {
      $t: jest.fn(),
      $tc: jest.fn(),
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(AuthResetPasswordForm, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
