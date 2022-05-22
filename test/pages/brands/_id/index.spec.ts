import { beforeEachHelper } from '~/test/helpers'

import BrandPage from '~/pages/brands/_id'

describe('BrandPage page', () => {
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
    wrapper = beforeEachHelper(BrandPage, optinos)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
