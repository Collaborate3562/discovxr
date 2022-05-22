import { beforeEachHelper } from '~/test/helpers'

import BrandRow from '~/components/BrandRow'

describe('BrandRow', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = beforeEachHelper(BrandRow)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is contain props', () => {
    expect(wrapper.props('items')).toBeInstanceOf(Array)
    expect(wrapper.props('title')).toBe('')
  })
})
