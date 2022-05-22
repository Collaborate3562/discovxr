/* eslint-disable import/prefer-default-export */

import { reactive, Ref, ref } from '@nuxtjs/composition-api'

import { useBadge } from '@lxgic/hooks'

import { Listings } from '~/enums'

import { IListingsState, IUseListings } from '~/interfaces'

export function useListings(): IUseListings {
  const state: IListingsState = reactive<IListingsState>({
    tab: Listings.ON_DEAL,
    tabs: new Map(),
  })

  const setTab = (
    key: Listings,
    text: string,
    items: any[] = [],
  ) => state.tabs.set(key, ref({ text, items, ...useBadge() }))

  const setNotificationCount = (key: Listings, count: number) => {
    if (state.tabs.has(key)) {
      (<Ref<any>>state.tabs.get(key)).value.setContent(count)
    }
  }

  const setTabItems = (key: Listings, items: any[]) => {
    if (state.tabs.has(key)) {
      (<Ref<any>>state.tabs.get(key)).value.items = items
    }
  }

  const getItems = (key: Listings) => state.tabs.get(key)?.value.items || []

  return {
    state,
    getItems,
    setTab,
    setTabItems,
    setNotificationCount,
  }
}
