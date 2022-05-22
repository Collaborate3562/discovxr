/* eslint-disable no-unused-vars */

import { Ref } from '@nuxtjs/composition-api'

import { LanguageASCII } from '~/enums'

export interface IUseASCIILetters {
  letterCount: Ref<number>
  setASCIILanguage(language: LanguageASCII): void
  getLetter(charCode: number): string
}
