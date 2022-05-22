import { beforeEachHelper } from '~/test/helpers'

import HomePage from '~/pages'

describe('HomePage page', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = beforeEachHelper(HomePage)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
