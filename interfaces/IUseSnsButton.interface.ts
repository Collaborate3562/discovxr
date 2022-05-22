/* eslint-disable no-unused-vars */

import { ComputedRef, Ref } from '@nuxtjs/composition-api'

import { SnsType } from '@lxgic/enums'

import { ISnsButton } from '~/interfaces'

import { TBooleanOrVoid } from '~/types'

export interface IUseSnsButton {
  buttons: ComputedRef<Ref<ISnsButton>[]>
  add(type: SnsType, details?: Partial<ISnsButton>): TBooleanOrVoid
  edit(type: SnsType, details?: Partial<ISnsButton>): TBooleanOrVoid
}
