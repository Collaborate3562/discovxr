import { useBreadcrumbs } from '~/hooks'

import { IUseBreadcrumbs } from '~/interfaces'

describe('useBreadcrumbs', () => {
  let wrapper: IUseBreadcrumbs
  const $i18n: any = {
    t: jest.fn(),
  }

  test('is a Function instance', () => {
    expect(useBreadcrumbs).toBeInstanceOf(Function)

    wrapper = useBreadcrumbs()
  })

  test('[setIsVisible] method', () => {
    expect(wrapper.setIsVisible).toBeInstanceOf(Function)
    expect(wrapper.state.isVisible).toBeFalsy()

    expect(wrapper.setIsVisible(true)).toBeTruthy()

    expect(wrapper.state.isVisible).toBeTruthy()
  })

  test('[setItems] method', () => {
    expect(wrapper.setIsVisible).toBeInstanceOf(Function)
    expect(wrapper.state.items).toHaveLength(0)

    const fullPath: string = '/lang/param'

    wrapper.setItems(fullPath, $i18n)

    expect(wrapper.state.items).toHaveLength(2)
  })
})
