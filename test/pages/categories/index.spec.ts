import { beforeEachHelper } from '~/test/helpers'

import CategoriesPage from '~/pages/categories'

describe('CategoriesPage page', () => {
  let wrapper: any
  const optinos: any = {
    stubs: {
      AppAdvancedSelect: true,
      AppEmptyData: true,
    },
    mocks: {
      $tc: jest.fn(),
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(CategoriesPage, optinos)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
