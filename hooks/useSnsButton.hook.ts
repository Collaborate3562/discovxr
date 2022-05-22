/* eslint-disable import/prefer-default-export */

import {
  computed,
  ComputedRef,
  reactive,
  Ref,
  ref,
} from '@nuxtjs/composition-api'

import { SnsType } from '@lxgic/enums'

import { ISnsButton, IUseSnsButton } from '~/interfaces'

import { TBooleanOrVoid } from '~/types'

import colors from '~/assets/scss/colors.scss'

type TSnsButtonOrNull = ISnsButton | null

export function useSnsButton(): IUseSnsButton {
  const state: Map<SnsType, Ref<ISnsButton>> = reactive<
    Map<SnsType, Ref<ISnsButton>>
  >(new Map())

  const createButton = (
    type: SnsType,
    icon: string,
    color: string,
  ): ISnsButton => ({
    type,
    icon,
    color,
    text: '',
    loading: false,
    connected: false,
  })

  const getDefault = (type: SnsType): TSnsButtonOrNull => {
    switch (type) {
      case SnsType.INSTAGRAM:
        return createButton(type, 'mdi-instagram', colors.instagram)
      case SnsType.TWITTER:
        return createButton(type, 'mdi-twitter', colors.twitter)
      case SnsType.FACEBOOK:
        return createButton(type, 'mdi-facebook', colors.facebook)
      case SnsType.YOUTUBE:
        return createButton(type, 'mdi-youtube', colors.youtube)
      case SnsType.BLOG:
        return createButton(type, 'mdi-file-edit', colors.blog)
      case SnsType.EMAIL:
        return createButton(type, 'mdi-email', colors.email)
      default:
        return null
    }
  }

  const add = (
    type: SnsType,
    details?: Partial<ISnsButton>,
  ): TBooleanOrVoid => {
    const snsButton: TSnsButtonOrNull = getDefault(type)

    if (!snsButton) {
      return false
    }

    state.set(
      type,
      ref<ISnsButton>({
        ...snsButton,
        ...details,
      }),
    )
  }

  const edit = (
    type: SnsType,
    details: Partial<ISnsButton>,
  ): TBooleanOrVoid => {
    if (!state.has(type)) {
      return false
    }

    const button: Ref<ISnsButton> = state.get(type) as Ref<ISnsButton>

    Object.entries(details as Extract<ISnsButton, string>).forEach(
      ([key, value]) => {
        (<any>button.value)[key] = value
      },
    )
  }

  const buttons: ComputedRef<Ref<ISnsButton>[]> = computed<Ref<ISnsButton>[]>(
    () => [...state.values()],
  )

  return { buttons, add, edit }
}
