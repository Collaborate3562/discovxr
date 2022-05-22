/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

const state: any = reactive({
  avatar: null,
})

export function useEditProfile() {
  const setAvatat = (src: string) => (state.avatar = src)

  return {
    state,
    setAvatat,
  }
}
