import { beforeEachHelper } from '~/test/helpers'

import DesktopHeaderNavigationBlock from '~/components/DesktopHeaderNavigationBlock'

describe('DesktopHeaderNavigationBlock', () => {
  let wrapper: any
  const options: any = {
    mocks: {
      localePath: jest.fn(),
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
    wrapper = beforeEachHelper(DesktopHeaderNavigationBlock, options)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
