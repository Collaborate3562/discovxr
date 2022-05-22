import { useHeaderNavigation } from '~/hooks'

import { IUseHeaderNavigation } from '~/interfaces'

describe('useHeaderNavigation', () => {
  let wrapper: IUseHeaderNavigation

  test('is a Function instance', () => {
    expect(useHeaderNavigation).toBeInstanceOf(Function)

    wrapper = useHeaderNavigation()
  })

  test('[setMobileList] method', () => {
    expect(wrapper.setMobileList).toBeInstanceOf(Function)
    expect(wrapper.state.mobileList).toHaveLength(0)

    wrapper.setMobileList(Array(2).fill('mobile value'))

    expect(wrapper.state.mobileList).toHaveLength(2)
  })

  test('[setDesktopList] method', () => {
    expect(wrapper.setDesktopList).toBeInstanceOf(Function)
    expect(wrapper.state.desktopList).toHaveLength(0)

    wrapper.setDesktopList(Array(3).fill('desktop value'))

    expect(wrapper.state.desktopList).toHaveLength(3)
  })
})
