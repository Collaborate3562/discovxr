/* eslint-disable no-unused-vars */

import { IBreadcrumbsState } from '~/interfaces'

export interface IUseBreadcrumbs {
  state: IBreadcrumbsState
  setItems(fullPath: string, $i18n: any): void
  setIsVisible(value: boolean): boolean
}
