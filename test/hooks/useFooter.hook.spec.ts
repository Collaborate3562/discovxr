import { FooterList } from '~/enums'

import { useFooter } from '~/hooks'

import { IUseFooter } from '~/interfaces'

describe('useFooter', () => {
  let wrapper: IUseFooter

  test('is a Function instance', () => {
    expect(useFooter).toBeInstanceOf(Function)

    wrapper = useFooter()
  })

  test('[setBanner] method', () => {
    expect(wrapper.setBanner).toBeInstanceOf(Function)
    expect(wrapper.state.banner).toBeNull()

    const src: string = '/path/to/image'

    expect(wrapper.setBanner(src)).toBe(src)

    expect(wrapper.state.banner).toBe(src)
  })

  test('[setList] method', () => {
    expect(wrapper.setList).toBeInstanceOf(Function)
    expect(wrapper.state.list.size).toBe(0)

    wrapper.setList(FooterList.SUPPORT, 'i18n path', [
      {
        text: 'title text',
        route: 'path',
      },
    ])

    expect(wrapper.state.list.size).toBe(1)
  })

  test('[setList] method without [items]', () => {
    expect(wrapper.state.list.size).toBe(1)

    wrapper.setList(FooterList.TERMS, 'i18n path')

    expect(wrapper.state.list.size).toBe(2)
  })
})
