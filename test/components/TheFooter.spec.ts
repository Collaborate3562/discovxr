import { beforeEachHelper } from '~/test/helpers'

import TheFooter from '~/components/TheFooter'

describe('TheFooter', () => {
  let wrapper: any
  const optoins: any = {
    mocks: {
      $t: jest.fn(),
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
    wrapper = beforeEachHelper(TheFooter, optoins)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('set beakpoint', () => {
    expect(wrapper.vm.$vuetify.breakpoint.smAndDown).toBeFalsy()

    wrapper.vm.$vuetify.breakpoint.smAndDown = true

    expect(wrapper.vm.$vuetify.breakpoint.smAndDown).toBeTruthy()
  })
})
