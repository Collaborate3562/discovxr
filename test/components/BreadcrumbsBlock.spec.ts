import { beforeEachHelper } from '~/test/helpers'

import BreadcrumbsBlock from '~/components/BreadcrumbsBlock'

describe('BreadcrumbsBlock', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = beforeEachHelper(BreadcrumbsBlock)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
