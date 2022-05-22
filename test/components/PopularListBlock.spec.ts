import { beforeEachHelper } from '~/test/helpers'

import PopularListBlock from '~/components/PopularListBlock'

describe('PopularListBlock', () => {
  let wrapper: any
  const options: any = {
    mocks: {
      localePath: jest.fn(),
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(PopularListBlock, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is contain props', () => {
    expect(wrapper.props('prefix')).toBe('')
  })
})
