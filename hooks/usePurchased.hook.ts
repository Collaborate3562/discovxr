/* eslint-disable import/prefer-default-export */

import { reactive, Ref, ref } from '@nuxtjs/composition-api'

import { useBadge } from '@lxgic/hooks'

import { Purchased } from '~/enums'

import { IPurchasedState, IUsePurchased } from '~/interfaces'

export function usePurchased(): IUsePurchased {
  const state: IPurchasedState = reactive<IPurchasedState>({
    tab: Purchased.ON_DEAL,
    tabs: new Map(),
  })

  const setTab = (
    key: Purchased,
    text: string,
    items: any[] = [],
  ) => state.tabs.set(key, ref({ text, items, ...useBadge() }))

  const setNotificationCount = (key: Purchased, count: number) => {
    if (state.tabs.has(key)) {
      (<Ref<any>>state.tabs.get(key)).value.setContent(count)
    }
  }

  const setTabItems = (key: Purchased, items: any[]) => {
    if (state.tabs.has(key)) {
      (<Ref<any>>state.tabs.get(key)).value.items = items
    }
  }

  const getItems = (key: Purchased) => state.tabs.get(key)?.value.items || []

  return {
    state,
    getItems,
    setTab,
    setTabItems,
    setNotificationCount,
  }
}
