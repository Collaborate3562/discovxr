import { Ref } from '@nuxtjs/composition-api'

import { Listings } from '~/enums'

export interface IListingsState {
  tab: Listings
  tabs: Map<Listings, Ref<any>>
}
