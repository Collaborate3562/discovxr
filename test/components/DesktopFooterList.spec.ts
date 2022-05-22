import { beforeEachHelper } from '~/test/helpers'

import DesktopFooterList from '~/components/DesktopFooterList'

describe('DesktopFooterList', () => {
  let wrapper: any
  const optoins: any = {
    mocks: {
      $t: jest.fn(),
      localePath: jest.fn(),
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(DesktopFooterList, optoins)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
