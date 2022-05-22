/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive, watch } from '@nuxtjs/composition-api'

import { useModalWindow } from '@lxgic/hooks'

import { IUseModalWindow } from '@lxgic/interfaces'

import { DateTime, Interval } from 'luxon'

const modal: IUseModalWindow = useModalWindow()

let interval: any = null

const state: any = reactive({
  title: '',
  date: null,
  formatedData: Array(4).fill(0),
})

const getRemainingTime = (): any => {
  interval = setInterval(() => {
    state.formatedData = Interval.fromDateTimes(DateTime.now(), state.date)
      .toDuration(['days', 'hours', 'minutes', 'seconds'])
      .toFormat('d hh mm ss')
      .split(' ')
  }, 1000)
}

watch(
  () => modal.isOpen.value,
  (value: boolean) => (value ? getRemainingTime() : clearInterval(interval)),
)

export function useRemainingTimeModal() {
  const setTitle = (title: string): string => (state.title = title)
  const setRemainingDate = (date: string): DateTime => (state.date = DateTime.fromISO(date))

  return {
    ...modal,
    state,
    setTitle,
    setRemainingDate,
  }
}
