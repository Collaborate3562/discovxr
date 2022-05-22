import { beforeEachHelper } from '~/test/helpers'

import BrandsPage from '~/pages/brands'

describe('BrandsPage page', () => {
  let wrapper: any
  const optinos: any = {
    stubs: {
      AppAdvancedSelect: true,
      AppEmptyData: true,
    },
    mocks: {
      $t: jest.fn(),
      $tc: jest.fn(),
      $nuxt: {
        context: {
          $vuetify: {
            breakpoint: {
              smAndDown: false,
            },
            goTo: jest.fn(),
          },
        },
      },
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(BrandsPage, optinos)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
