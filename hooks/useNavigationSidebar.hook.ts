/* eslint-disable import/prefer-default-export */

import { Ref, ref } from '@nuxtjs/composition-api'

import { useModalWindow } from '@lxgic/hooks'

import { IUseModalWindow } from '@lxgic/interfaces'

import { TStringOrNull } from '~/types'

type TDrawerList = Map<number, Ref<any>>

const { isOpen, close, open }: IUseModalWindow = useModalWindow()

const list: Ref<TDrawerList> = ref<TDrawerList>(new Map())

export function useNavigationSidebar() {
  const setList = (
    key: number,
    title: TStringOrNull,
    items: any[],
  ) => list.value.set(key, ref({ title, items }))

  const setNotificationCount = (
    key: number,
    itemKey: number,
    count: number,
  ) => list.value.get(key)?.value.items[itemKey].setContent(count)

  return {
    list,
    isOpen,
    open,
    close,
    setList,
    setNotificationCount,
  }
}
