import { beforeEachHelper } from '~/test/helpers'

import MobileHeaderNavigationBlock from '~/components/MobileHeaderNavigationBlock'

describe('MobileHeaderNavigationBlock', () => {
  let wrapper: any
  const options: any = {
    mocks: {
      $t: jest.fn(),
      localePath: jest.fn(),
      $nuxt: {
        context: {
          $vuetify: {
            breakpoint: {
              xsOnly: false,
            },
          },
        },
      },
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(MobileHeaderNavigationBlock, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
