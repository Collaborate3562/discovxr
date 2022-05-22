import { useBannerBlock } from '~/hooks'

import { IUseBannerBlock } from '~/interfaces'

describe('useBannerBlock', () => {
  let wrapper: IUseBannerBlock

  test('is a Function instance', () => {
    expect(useBannerBlock).toBeInstanceOf(Function)

    wrapper = useBannerBlock()
  })

  test('[setBanner] method', () => {
    expect(wrapper.setBanner).toBeInstanceOf(Function)
    expect(wrapper.state.src).toBeNull()

    const src: string = '/path/to/banner'

    wrapper.setBanner(src)

    expect(wrapper.state.src).toBe(src)
  })

  test('[setIsVisible] method', () => {
    expect(wrapper.setIsVisible).toBeInstanceOf(Function)
    expect(wrapper.state.isVisible).toBeFalsy()

    expect(wrapper.setIsVisible(true)).toBeTruthy()

    expect(wrapper.state.isVisible).toBeTruthy()
  })
})
