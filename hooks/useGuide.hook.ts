/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

export function useGuide() {
  const state: any = reactive({
    faq: [],
    beginners: [],
    categories: [],
  })

  const setFaq = (items: any[]) => (state.faq = items)
  const setBeginners = (items: any[]) => (state.beginners = items)
  const setCategories = (items: any[]) => (state.categories = items)

  return {
    state,
    setFaq,
    setBeginners,
    setCategories,
  }
}
