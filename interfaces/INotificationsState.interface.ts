import { Ref } from '@nuxtjs/composition-api'

import { Notifications } from '~/enums'

export interface INotificationsState {
  tab: Notifications
  tabs: Map<Notifications, Ref<any>>
}
