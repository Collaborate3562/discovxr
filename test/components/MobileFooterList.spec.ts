import { beforeEachHelper } from '~/test/helpers'

import MobileFooterList from '~/components/MobileFooterList'

describe('MobileFooterList', () => {
  let wrapper: any
  const optoins: any = {
    mocks: {
      $t: jest.fn(),
      localePath: jest.fn(),
    },
  }

  beforeEach(() => {
    wrapper = beforeEachHelper(MobileFooterList, optoins)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('[toggleMarker] method', () => {
    expect(wrapper.vm.toggleMarker).toBeInstanceOf(Function)

    wrapper.vm.toggleMarker(1)
    wrapper.vm.toggleMarker(2)
  })

  test('[getIcon] method', () => {
    expect(wrapper.vm.getIcon).toBeInstanceOf(Function)

    wrapper.vm.toggleMarker(1)

    expect(wrapper.vm.getIcon(1)).toBe('mdi-minus')
    expect(wrapper.vm.getIcon(3)).toBe('mdi-plus')
  })
})
