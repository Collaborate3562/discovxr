import { SnsType } from '@lxgic/enums'

import { TBooleanOrUndefined } from '~/types'

export interface ISnsButton {
  type: SnsType
  icon: string
  text: string
  color: string
  loading: boolean
  connected: TBooleanOrUndefined
}
