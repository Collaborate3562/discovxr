import { beforeEachHelper } from '~/test/helpers'

import BrandCategoryPage from '~/pages/brands/_id/_cid'

describe('BrandCategoryPage page', () => {
  let wrapper: any
  const optinos: any = {
    mocks: {
      $tc: jest.fn(),
      $route: {
        params: {
          id: 1,
          cid: 2,
        },
      },
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(BrandCategoryPage, optinos)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
