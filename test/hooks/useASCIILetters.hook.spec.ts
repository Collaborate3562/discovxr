import { LanguageASCII } from '~/enums'

import { useASCIILetters } from '~/hooks'

import { IUseASCIILetters } from '~/interfaces'

describe('useASCIILetters', () => {
  let wrapper: IUseASCIILetters

  test('is a Function instance', () => {
    expect(useASCIILetters).toBeInstanceOf(Function)

    wrapper = useASCIILetters()
  })

  test('[setASCIILanguage] method', () => {
    expect(wrapper.setASCIILanguage).toBeInstanceOf(Function)
    expect(wrapper.letterCount.value).toBe(0)

    wrapper.setASCIILanguage(LanguageASCII.ENGLISH)

    expect(wrapper.letterCount.value).toBe(26)
  })

  test('[getLetter] method', () => {
    expect(wrapper.getLetter).toBeInstanceOf(Function)

    expect(wrapper.getLetter(1)).toBe('a')
  })
})
