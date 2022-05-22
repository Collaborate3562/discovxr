/* eslint-disable import/prefer-default-export */

import { ref, Ref } from '@nuxtjs/composition-api'

import { useModalWindow } from '@lxgic/hooks'
import { IUseModalWindow } from '@lxgic/interfaces'

const isAllowed: Ref<boolean> = ref(false)

export function useCannotPostModal() {
  const modal: IUseModalWindow = useModalWindow()

  return {
    modal,
    isAllowed,
  }
}
