/* eslint-disable no-unused-vars */

import { Shopper } from '~/enums'

import { IShoppersState } from '~/interfaces'

export interface IUseShoppers {
  state: IShoppersState
  setTab(key: Shopper, text: string, items?: any[]): any
  setActiveTab(key: Shopper): Shopper
  setTotalCount(key: Shopper, count: number): void
  setTabItems(key: Shopper, items: any[]): void
  getItems(key: Shopper): any[]
}
