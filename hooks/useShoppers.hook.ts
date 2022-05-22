/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive, Ref, ref } from '@nuxtjs/composition-api'

import { Shopper } from '~/enums'

import { IShoppersState, IUseShoppers } from '~/interfaces'

export function useShoppers(): IUseShoppers {
  const state: IShoppersState = reactive<IShoppersState>({
    tab: Shopper.BIDDERS,
    tabs: new Map(),
  })

  const setTab = (
    key: Shopper,
    text: string,
    items: any[] = [],
  ) => state.tabs.set(key, ref({ text, items, total: 0 }))

  const setActiveTab = (key: Shopper) => (state.tab = key)

  const setTotalCount = (key: Shopper, count: number) => {
    if (state.tabs.has(key)) {
      (<Ref<any>>state.tabs.get(key)).value.total = count
    }
  }

  const setTabItems = (key: Shopper, items: any[]) => {
    if (state.tabs.has(key)) {
      (<Ref<any>>state.tabs.get(key)).value.items = items
    }
  }

  const getItems = (key: Shopper) => state.tabs.get(key)?.value.items || []

  return {
    state,
    getItems,
    setTab,
    setActiveTab,
    setTabItems,
    setTotalCount,
  }
}
