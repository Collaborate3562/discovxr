import { Ref } from '@nuxtjs/composition-api'

import { Purchased } from '~/enums'

export interface IPurchasedState {
  tab: Purchased
  tabs: Map<Purchased, Ref<any>>
}
