/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

import { IPointsState, IUsePoints } from '~/interfaces'

const state: IPointsState = reactive<IPointsState>({
  points: '',
  list: [],
  history: [],
})

export function usePoints(): IUsePoints {
  const setList = (items: any[]): any[] => (state.list = items)
  const setHistory = (items: any[]): any[] => (state.history = items)
  const setPoint = (value: string): string => (state.points = value)

  return {
    state,
    setList,
    setHistory,
    setPoint,
  }
}
