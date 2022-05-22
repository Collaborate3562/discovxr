/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { computed, ComputedRef, reactive } from '@nuxtjs/composition-api'

import { useModalWindow, usePageLoading } from '@lxgic/hooks'

import { IUseModalWindow, IUsePageLoading } from '@lxgic/interfaces'

import { ISearchFilterState, IUseSearchFilter } from '~/interfaces'

const { loading, setLoading }: IUsePageLoading = usePageLoading()

const filterDrawer: IUseModalWindow = useModalWindow()

const state: ISearchFilterState = reactive<ISearchFilterState>({
  value: '',
  isVisible: false,
})

export function useSearchFilter(): IUseSearchFilter {
  const setIsVisible = (value: boolean): boolean => (state.isVisible = value)

  const icon: ComputedRef<string> = computed<string>(() => (state.isVisible ? 'mdi-close' : 'mdi-magnify'))
  const iconTransitionMode: ComputedRef<string> = computed<string>(() => (state.isVisible ? 'v-slide-y-reverse-transition' : 'v-slide-y-transition'))

  const searchHandler = () => {
    if (!state.value) {
      throw new Error('Empty value')
    }

    // TODO: will be remove (only for design)
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return {
    state,
    icon,
    loading,
    iconTransitionMode,
    filterDrawer,
    setIsVisible,
    searchHandler,
  }
}
