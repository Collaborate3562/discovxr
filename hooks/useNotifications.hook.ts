/* eslint-disable import/prefer-default-export */

import { reactive, Ref, ref } from '@nuxtjs/composition-api'

import { useBadge } from '@lxgic/hooks'

import { Notifications } from '~/enums'

import { INotificationsState, IUseNotifications } from '~/interfaces'

export function useNotifications(): IUseNotifications {
  const state: INotificationsState = reactive<INotificationsState>({
    tab: Notifications.DEALS,
    tabs: new Map(),
  })

  const setTab = (
    key: Notifications,
    text: string,
    items: any[] = [],
  ) => state.tabs.set(key, ref({ text, items, ...useBadge() }))

  const setNotificationCount = (key: Notifications, count: number) => {
    if (state.tabs.has(key)) {
      (<Ref<any>>state.tabs.get(key)).value.setContent(count)
    }
  }
  const setTabItems = (key: Notifications, items: any[]) => {
    if (state.tabs.has(key)) {
      (<Ref<any>>state.tabs.get(key)).value.items = items
    }
  }

  const getItems = (key: Notifications) => state.tabs.get(key)?.value.items || []

  return {
    state,
    setTab,
    setNotificationCount,
    setTabItems,
    getItems,
  }
}
