import { Ref } from '@nuxtjs/composition-api'

import { Beginners } from '~/enums'

export interface IBeginnersState {
  tab: Beginners
  tabs: Map<Beginners, Ref<any>>
}
