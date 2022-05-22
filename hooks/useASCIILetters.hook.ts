/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { ref, Ref } from '@nuxtjs/composition-api'

import { LanguageASCII } from '~/enums'

import { IUseASCIILetters } from '~/interfaces'

export function useASCIILetters(): IUseASCIILetters {
  const startCode: Ref<number> = ref<number>(0)
  const letterCount: Ref<number> = ref<number>(0)

  const setASCIILanguage = (language: LanguageASCII): void => {
    const [start, count] = language.split('|')

    startCode.value = +start
    letterCount.value = +count
  }

  const getLetter = (charCode: number): string => String.fromCharCode(charCode + startCode.value)

  return {
    letterCount,
    getLetter,
    setASCIILanguage,
  }
}
