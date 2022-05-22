/* eslint-disable no-unused-vars */

import { ComputedRef, Ref } from '@nuxtjs/composition-api'

import { IUseModalWindow } from '@lxgic/interfaces'

import { ISearchFilterState } from '~/interfaces'

export interface IUseSearchFilter {
  loading: Partial<Ref<boolean>>
  filterDrawer: IUseModalWindow
  state: ISearchFilterState
  icon: ComputedRef<string>
  iconTransitionMode: ComputedRef<string>
  setIsVisible(value: boolean): boolean
  // TODO: will be change
  searchHandler(): void
}
