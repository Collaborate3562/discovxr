/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

const state: any = reactive({
  items: [],
})

export function useMyDeals() {
  const setItems = (items: any[]): any[] => (state.items = items)

  return {
    state,
    setItems,
  }
}
