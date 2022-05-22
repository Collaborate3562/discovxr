/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

import { IBreadcrumbsState, IUseBreadcrumbs } from '~/interfaces'

const state: IBreadcrumbsState = reactive<IBreadcrumbsState>({
  items: [],
  isVisible: false,
})

export function useBreadcrumbs(): IUseBreadcrumbs {
  const setItems = (fullPath: string, $i18n: any) => {
    let tmpPath: string = '/'

    state.items = [
      {
        text: $i18n.t('META.LXGIC'),
        href: tmpPath,
        disabled: false,
      },
    ]

    fullPath
      .split('/')
      .slice(2)
      .forEach((param: string, i: number, paths: string[]) => {
        tmpPath += `${param}/`

        state.items.push({
          text: param,
          href: tmpPath,
          disabled: i === paths.length - 1,
        })
      })
  }

  const setIsVisible = (value: boolean): boolean => (state.isVisible = value)

  return {
    state,
    setItems,
    setIsVisible,
  }
}
