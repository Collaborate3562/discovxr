import { beforeEachHelper } from '~/test/helpers'

import FooterRegion from '~/components/FooterRegion'

describe('FooterRegion', () => {
  let wrapper: any
  const optoins: any = {
    mocks: {
      $t: jest.fn(),
      $nuxt: {
        context: {
          i18n: {
            t: jest.fn(),
          },
        },
      },
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(FooterRegion, optoins)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
