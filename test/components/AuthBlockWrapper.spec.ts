import { beforeEachHelper } from '~/test/helpers'

import AuthBlockWrapper from '~/components/AuthBlockWrapper'

describe('AuthBlockWrapper', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = beforeEachHelper(AuthBlockWrapper)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
