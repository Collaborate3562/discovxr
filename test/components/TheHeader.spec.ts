import { beforeEachHelper } from '~/test/helpers'

import TheHeader from '~/components/TheHeader'

describe('TheHeader', () => {
  let wrapper: any
  const optoins: any = {
    stubs: {
      ClientOnly: true,
    },
    mocks: {
      $t: jest.fn(),
      $tc: jest.fn(),
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
    wrapper = beforeEachHelper(TheHeader, optoins)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('[onScrollHandler] method', () => {
    expect(wrapper.vm.onScrollHandler).toBeInstanceOf(Function)
    expect(wrapper.vm.isSticky).toBeFalsy()

    wrapper.vm.onScrollHandler({
      target: {
        scrollingElement: {
          scrollTop: 300,
        },
      },
    })

    expect(wrapper.vm.isSticky).toBeTruthy()
  })
})
