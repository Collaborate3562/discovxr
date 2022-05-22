import { Ref } from '@nuxtjs/composition-api'

import { Shopper } from '~/enums'

export interface IShoppersState {
  tab: Shopper
  tabs: Map<Shopper, Ref<any>>
}
