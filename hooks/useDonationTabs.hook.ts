/* eslint-disable import/prefer-default-export */

import { reactive, Ref, ref } from '@nuxtjs/composition-api'

import { DonationTab } from '~/enums'

export function useDonationTabs() {
  const state: any = reactive({
    tab: DonationTab.DETAIL,
    tabs: new Map(),
  })

  const setTab = (
    key: DonationTab,
    text: string,
    items: any[] = [],
  ) => state.tabs.set(key, ref({ text, items }))

  const setTabItems = (key: DonationTab, items: any[]) => {
    if (state.tabs.has(key)) {
      (<Ref<any>>state.tabs.get(key)).value.items = items
    }
  }

  const getItems = (key: DonationTab) => state.tabs.get(key)?.value.items || []

  return {
    state,
    setTab,
    setTabItems,
    getItems,
  }
}
