/* eslint-disable no-unused-vars */

import { IPointsState } from '~/interfaces'

export interface IUsePoints {
  state: IPointsState
  setList(items: any[]): any[]
  setHistory(items: any[]): any[]
  setPoint(value: string): string
}
