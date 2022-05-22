/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive, Ref, ref } from '@nuxtjs/composition-api'

import { useBadge } from '@lxgic/hooks'

import { UserFans } from '~/enums'

// TODO: add interfaces

const state: any = reactive({
  tab: UserFans.FOLLOWERS,
  tabs: new Map(),
})

export function useUserFans() {
  const setTab = (
    key: UserFans,
    text: string,
    items: any[] = [],
  ): any => state.tabs.set(key, ref({ text, items, ...useBadge() }))

  const setActiveTab = (key: UserFans): UserFans => (state.tab = key)

  const setNotificationCount = (key: UserFans, count: number): void => {
    if (state.tabs.has(key)) {
      (<Ref<any>>state.tabs.get(key)).value.setContent(count)
    }
  }
  const setTabItems = (key: UserFans, items: any[]): void => {
    if (state.tabs.has(key)) {
      (<Ref<any>>state.tabs.get(key)).value.items = items
    }
  }

  const getItems = (key: UserFans): any[] => state.tabs.get(key)?.value.items || []

  return {
    state,
    setTab,
    setActiveTab,
    setNotificationCount,
    setTabItems,
    getItems,
  }
}
