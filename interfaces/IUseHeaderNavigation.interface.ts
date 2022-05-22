/* eslint-disable no-unused-vars */
import { IHeaderNavigationState } from '~/interfaces'

export interface IUseHeaderNavigation {
  state: IHeaderNavigationState
  setMobileList(items: any[]): any[]
  setDesktopList(items: any[]): any[]
}
