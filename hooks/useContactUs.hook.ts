/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

import { ContactUsPattern } from '@lxgic/enums'

import { IContactUsState, IUseContactUs } from '~/interfaces'

export function useContactUs(): IUseContactUs {
  const state: IContactUsState = reactive<IContactUsState>({
    pattern: ContactUsPattern.REFUND,
    items: [],
  })

  const addPattern = (pattern: any) => state.items.push(pattern)

  return {
    state,
    addPattern,
  }
}
