/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

import { useModalWindow } from '@lxgic/hooks'

import { IUseModalWindow } from '@lxgic/interfaces'

const filterDrawer: IUseModalWindow = useModalWindow()

const state: any = reactive({
  isVisible: false,
  isOptionsVisible: false,
})

export function useDealPageFilter() {
  const setIsVisible = (value: boolean): boolean => (state.isVisible = value)
  const setIsOptionsVisible = (value: boolean): boolean => (state.isOptionsVisible = value)

  return {
    state,
    filterDrawer,
    setIsVisible,
    setIsOptionsVisible,
  }
}
