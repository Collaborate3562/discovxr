/* eslint-disable no-unused-vars */

import { Beginners } from '~/enums'

import { IBeginnersState } from '~/interfaces'

export interface IUseBeginners {
  state: IBeginnersState
  setTab(key: Beginners, text: string, count?: number, items?: any[]): any
  setTabItems(key: Beginners, items: any[]): void
  getItems(key: Beginners): any[]
}
