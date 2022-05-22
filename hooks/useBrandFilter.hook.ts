/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { computed, ComputedRef, reactive } from '@nuxtjs/composition-api'

import { IBrandFilterState, IUseBrandFilter } from '~/interfaces'

export function useBrandFilter(): IUseBrandFilter {
  const state: IBrandFilterState = reactive<IBrandFilterState>({
    show: false,
  })

  const toggleShow = (): boolean => (state.show = !state.show)

  const icon: ComputedRef<string> = computed<string>(() => (state.show ? 'mdi-filter-off' : 'mdi-filter'))
  const transition: ComputedRef<string> = computed<string>(() => (state.show ? 'v-slide-y-reverse-transition' : 'v-slide-y-transition'))

  return {
    state,
    icon,
    transition,
    toggleShow,
  }
}
