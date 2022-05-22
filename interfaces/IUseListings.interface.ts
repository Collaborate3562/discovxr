/* eslint-disable no-unused-vars */

import { Listings } from '~/enums'

import { IListingsState } from '~/interfaces'

export interface IUseListings {
  state: IListingsState
  setTab(key: Listings, text: string, items?: any[]): any
  setNotificationCount(key: Listings, count: number): void
  setTabItems(key: Listings, items: any[]): void
  getItems(key: Listings): any[]
}
