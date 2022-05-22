/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

const state: any = reactive({
  isVisible: false,
  isAnonymous: false,
  username: '',
  avatar: '/images/non-avatar.jpg',
  snsDetails: [],
})

export function useItemDetailHeader() {
  const setIsVisible = (value: boolean): boolean => (state.isVisible = value)
  const setisAnonymous = (value: boolean): boolean => (state.isAnonymous = value)
  const setUsername = (name: string): string => (state.username = name)
  const setAvatar = (src: string): string => (state.avatar = src)
  const setSnsDetails = (sns: any[]): any[] => (state.snsDetails = sns)

  return {
    state,
    setAvatar,
    setUsername,
    setIsVisible,
    setSnsDetails,
    setisAnonymous,
  }
}
