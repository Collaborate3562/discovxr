/* eslint-disable no-unused-vars */

import { IBannerBlockState } from '~/interfaces'

import { TStringOrNull } from '~/types'

export interface IUseBannerBlock {
  state: IBannerBlockState
  setIsVisible(value: boolean): boolean
  setBanner(src: TStringOrNull): TStringOrNull
}
