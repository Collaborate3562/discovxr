/* eslint-disable no-unused-vars */

import { Notifications } from '~/enums'

import { INotificationsState } from '~/interfaces'

export interface IUseNotifications {
  state: INotificationsState
  setTab(key: Notifications, text: string, items?: any[]): any
  setNotificationCount(key: Notifications, count: number): void
  setTabItems(key: Notifications, items: any[]): void
  getItems(key: Notifications): any[]
}
