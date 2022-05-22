import { useSearchFilter } from '~/hooks'

import { IUseSearchFilter } from '~/interfaces'

describe('useSearchFilter', () => {
  let wrapper: IUseSearchFilter

  test('is a Function instance', () => {
    expect(useSearchFilter).toBeInstanceOf(Function)

    wrapper = useSearchFilter()
  })

  test('[setIsVisible] method', () => {
    expect(wrapper.setIsVisible).toBeInstanceOf(Function)
    expect(wrapper.state.isVisible).toBeFalsy()

    expect(wrapper.setIsVisible(true)).toBeTruthy()

    expect(wrapper.state.isVisible).toBeTruthy()
  })

  test('[icon] computed property', () => {
    expect(wrapper.icon.value).toBe('mdi-close')

    expect(wrapper.setIsVisible(false)).toBeFalsy()

    expect(wrapper.icon.value).toBe('mdi-magnify')
  })

  test('[iconTransitionMode] computed property', () => {
    expect(wrapper.iconTransitionMode.value).toBe('v-slide-y-transition')

    expect(wrapper.setIsVisible(true)).toBeTruthy()

    expect(wrapper.iconTransitionMode.value).toBe(
      'v-slide-y-reverse-transition',
    )
  })
})
