import { useBrandFilter } from '~/hooks'

import { IUseBrandFilter } from '~/interfaces'

describe('useBrandFilter', () => {
  let wrapper: IUseBrandFilter

  test('is a Function instance', () => {
    expect(useBrandFilter).toBeInstanceOf(Function)

    wrapper = useBrandFilter()
  })

  test('[toggleShow] method', () => {
    expect(wrapper.toggleShow).toBeInstanceOf(Function)
    expect(wrapper.state.show).toBeFalsy()

    expect(wrapper.toggleShow()).toBeTruthy()

    expect(wrapper.state.show).toBeTruthy()
  })

  test('[icon/transition] computed properties', () => {
    expect(wrapper.icon.value).toBe('mdi-filter-off')
    expect(wrapper.transition.value).toBe('v-slide-y-reverse-transition')

    expect(wrapper.toggleShow()).toBeFalsy()

    expect(wrapper.icon.value).toBe('mdi-filter')
    expect(wrapper.transition.value).toBe('v-slide-y-transition')
  })
})
