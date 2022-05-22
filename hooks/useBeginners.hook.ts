/* eslint-disable import/prefer-default-export */

import { reactive, Ref, ref } from '@nuxtjs/composition-api'

import { Beginners } from '~/enums'

import { IBeginnersState, IUseBeginners } from '~/interfaces'

export function useBeginners(): IUseBeginners {
  const state: IBeginnersState = reactive<IBeginnersState>({
    tab: Beginners.PURCHASE_ITEMS,
    tabs: new Map(),
  })

  const setTab = (
    key: Beginners,
    text: string,
    count: number = 0,
    items: any[] = [],
  ) => state.tabs.set(key, ref({ text, count, items }))

  const setTabItems = (key: Beginners, items: any[]) => {
    if (state.tabs.has(key)) {
      (<Ref<any>>state.tabs.get(key)).value.items = items
    }
  }

  const getItems = (key: Beginners) => state.tabs.get(key)?.value.items || []

  return {
    state,
    setTab,
    setTabItems,
    getItems,
  }
}
