import { beforeEachHelper } from '~/test/helpers'

import BannerBlock from '~/components/BannerBlock'

describe('BannerBlock', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = beforeEachHelper(BannerBlock)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
