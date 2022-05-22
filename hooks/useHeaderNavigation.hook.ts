/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

import { IHeaderNavigationState, IUseHeaderNavigation } from '~/interfaces'

export function useHeaderNavigation(): IUseHeaderNavigation {
  const state: IHeaderNavigationState = reactive<IHeaderNavigationState>({
    mobileList: [],
    desktopList: [],
  })

  const setMobileList = (items: any[]): any[] => (state.mobileList = items)
  const setDesktopList = (items: any[]): any[] => (state.desktopList = items)

  return {
    state,
    setMobileList,
    setDesktopList,
  }
}
