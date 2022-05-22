/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive, watch } from '@nuxtjs/composition-api'

import { useBadge, useModalWindow } from '@lxgic/hooks'

import { IUseBadge, IUseModalWindow } from '@lxgic/interfaces'

const modal: IUseModalWindow = useModalWindow()

export function useShoppingModal() {
  const state: any = reactive({
    carts: new Map(),
    isViewCart: false,
  })

  const { state: badgeState, setContent }: IUseBadge = useBadge()

  const setIsViewCart = (value: boolean): boolean => (state.isViewCart = value)

  const addToCart = () => {
    // TODO: will be change
    state.carts.set(state.carts.size + 1, {})

    setContent(state.carts.size)
  }

  const removeCart = (key: number) => {
    state.carts.delete(key)

    setContent(state.carts.size)
  }

  watch(
    () => modal.isOpen.value,
    (value) => !value && setIsViewCart(false),
  )

  return {
    ...modal,
    state,
    badgeState,
    addToCart,
    removeCart,
    setIsViewCart,
  }
}
