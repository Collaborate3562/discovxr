import { beforeEachHelper } from '~/test/helpers'

import AuthCompleted from '~/components/AuthCompleted'

describe('AuthCompleted', () => {
  let wrapper: any

  const options: any = {
    mocks: {
      $t: jest.fn(),
      $tc: jest.fn(),
      localePath: jest.fn(),
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(AuthCompleted, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
