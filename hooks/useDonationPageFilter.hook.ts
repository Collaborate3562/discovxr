/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { useModalWindow } from '@lxgic/hooks'

import { IUseModalWindow } from '@lxgic/interfaces'

const filterDrawer: IUseModalWindow = useModalWindow()

export function useDonationPageFilter() {
  // TODO: filter state and methods

  return {
    filterDrawer,
  }
}
