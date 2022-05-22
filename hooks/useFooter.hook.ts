/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

import { FooterList } from '~/enums'

import { IFooterState, IUseFooter } from '~/interfaces'

const state: IFooterState = reactive<IFooterState>({
  banner: null,
  list: new Map(),
})

export function useFooter(): IUseFooter {
  const setBanner = (src: string): string => (state.banner = src)

  const setList = (key: FooterList, title: string, items: any[] = []): any => state.list.set(key, {
    title,
    items,
  })

  return {
    state,
    setList,
    setBanner,
  }
}
