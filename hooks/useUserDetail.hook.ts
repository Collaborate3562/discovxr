/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive, ref } from '@nuxtjs/composition-api'

import { EmotionType } from '@lxgic/enums'

import { ProfileDetail } from '~/enums'

import { TStringOrNull } from '~/types'

export function useUserDetail() {
  const state: any = reactive({
    userId: '',
    isBuyer: false,
    rating: 0,
    avatar: null,
    username: '',
    details: new Map(),
    emotions: new Map(),
  })

  const setIsBuyer = (value: boolean): boolean => (state.isBuyer = value)
  const setUserId = (value: string): string => (state.userId = value)
  const setRating = (value: number): number => (state.rating = value)
  const setAvatar = (src: TStringOrNull): TStringOrNull => (state.avatar = src)
  const setUsername = (username: string): string => (state.username = username)
  const addDetail = (key: ProfileDetail, data: any): any => state.details.set(key, ref(data))
  const setDetailCount = (
    key: ProfileDetail,
    count: number,
  ): any => (state.details.get(key).value.count = count)
  const addEmotion = (key: EmotionType, data: any): any => state.emotions.set(key, ref(data))
  const setEmotionCount = (
    key: EmotionType,
    count: number,
  ): any => (state.emotions.get(key).value.count = count)

  return {
    state,
    setUserId,
    setRating,
    setAvatar,
    setUsername,
    addDetail,
    setDetailCount,
    setIsBuyer,
    addEmotion,
    setEmotionCount,
  }
}
