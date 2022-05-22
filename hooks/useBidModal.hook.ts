/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive, watch } from '@nuxtjs/composition-api'

import { useModalWindow } from '@lxgic/hooks'

import { IUseModalWindow } from '@lxgic/interfaces'

const modal: IUseModalWindow = useModalWindow()

export function useBidModal() {
  const state: any = reactive({
    isConfirmation: false,
  })

  const setIsConfitmation = (value: boolean): boolean => (state.isConfirmation = value)

  watch(
    () => modal.isOpen.value,
    (value) => !value && setIsConfitmation(false),
  )

  return {
    ...modal,
    state,
    setIsConfitmation,
  }
}
