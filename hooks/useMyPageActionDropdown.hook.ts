/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

import {
  IMyPageActionDropdownState,
  IUseMyPageActionDropdown,
} from '~/interfaces'

import { TStringOrNull } from '~/types'

export function useMyPageActionDropdown(): IUseMyPageActionDropdown {
  const state: IMyPageActionDropdownState = reactive<IMyPageActionDropdownState>({
    menu: false,
    selected: null,
    list: [],
  })

  const setList = (list: any[] = []): any[] => (state.list = list)
  const setSelected = (value: TStringOrNull): TStringOrNull => (state.selected = value)

  return {
    state,
    setList,
    setSelected,
  }
}
