/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

const state: any = reactive({
  message: '',
  messages: [],
  details: null,
  isFullSize: false,
})

export function useMessenger() {
  const setDetails = (details: any): any => (state.details = details)
  const setMessageValue = (value: string = ''): string => (state.message = value)
  const setMessages = (messages: any[]): any[] => (state.messages = messages)
  const addMessage = (message: any): any => state.messages.push(message)
  const setFullSize = (value: boolean): boolean => (state.isFullSize = value)

  return {
    state,
    addMessage,
    setDetails,
    setMessages,
    setMessageValue,
    setFullSize,
  }
}
