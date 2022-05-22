import { SnsType } from '@lxgic/enums'

import { useSnsButton } from '~/hooks'

import { IUseSnsButton } from '~/interfaces'

describe('useSnsButton', () => {
  let wrapper: IUseSnsButton

  test('is a Function instance', () => {
    expect(useSnsButton).toBeInstanceOf(Function)

    wrapper = useSnsButton()
  })

  test('[add] method and [other type]', () => {
    expect(wrapper.add).toBeInstanceOf(Function)

    expect(wrapper.add('other type' as SnsType)).toBeFalsy()
  })

  test('[add] method and type [FACEBOOK]', () => {
    wrapper.add(SnsType.FACEBOOK)

    expect(wrapper.buttons.value).toHaveLength(1)
  })

  test('[edit] method', () => {
    expect(wrapper.edit).toBeInstanceOf(Function)

    const text: string = 'some text'

    expect(wrapper.edit(SnsType.INSTAGRAM, { text })).toBeFalsy()

    wrapper.edit(SnsType.FACEBOOK, { text })

    expect(wrapper.buttons.value[0].value.text).toBe(text)
  })

  test('[add] method with types', () => {
    wrapper.add(SnsType.INSTAGRAM)
    wrapper.add(SnsType.TWITTER)
    wrapper.add(SnsType.YOUTUBE)
    wrapper.add(SnsType.BLOG)
    wrapper.add(SnsType.EMAIL)
  })
})
