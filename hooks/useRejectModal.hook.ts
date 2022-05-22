/* eslint-disable import/prefer-default-export */

import { useModalWindow } from '@lxgic/hooks'

import { IUseModalWindow } from '@lxgic/interfaces'

const { isOpen, open, close }: IUseModalWindow = useModalWindow()

export function useRejectModal() {
  return {
    isOpen,
    open,
    close,
  }
}
