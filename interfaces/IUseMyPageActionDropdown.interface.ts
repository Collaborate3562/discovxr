/* eslint-disable no-unused-vars */

import { IMyPageActionDropdownState } from '~/interfaces'

import { TStringOrNull } from '~/types'

export interface IUseMyPageActionDropdown {
  state: IMyPageActionDropdownState
  setList(list?: any[]): any[]
  setSelected(value: TStringOrNull): TStringOrNull
}
