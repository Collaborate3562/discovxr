import { beforeEachHelper } from '~/test/helpers'

import CategoryPage from '~/pages/categories/_id'

describe('CategoryPage page', () => {
  let wrapper: any
  const optinos: any = {
    mocks: {
      $tc: jest.fn(),
      $route: {
        params: {
          id: 1,
        },
      },
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(CategoryPage, optinos)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
