/* eslint-disable no-unused-vars */

import { FooterList } from '~/enums'

import { IFooterState } from '~/interfaces'

export interface IUseFooter {
  state: IFooterState
  setList(key: FooterList, title: string, items?: any[]): any
  setBanner(src: string): string
}
