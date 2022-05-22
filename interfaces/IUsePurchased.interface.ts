/* eslint-disable no-unused-vars */

import { Purchased } from '~/enums'

import { IPurchasedState } from '~/interfaces'

export interface IUsePurchased {
  state: IPurchasedState
  setTab(key: Purchased, text: string, items?: any[]): any
  setNotificationCount(key: Purchased, count: number): void
  setTabItems(key: Purchased, items: any[]): void
  getItems(key: Purchased): any[]
}
