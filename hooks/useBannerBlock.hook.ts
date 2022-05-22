/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

import { IBannerBlockState, IUseBannerBlock } from '~/interfaces'

import { TStringOrNull } from '~/types'

const state: IBannerBlockState = reactive<IBannerBlockState>({
  src: null,
  isVisible: false,
})

export function useBannerBlock(): IUseBannerBlock {
  const setBanner = (src: TStringOrNull): TStringOrNull => (state.src = src)

  const setIsVisible = (value: boolean): boolean => (state.isVisible = value)

  return {
    state,
    setBanner,
    setIsVisible,
  }
}
