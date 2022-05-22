/* eslint-disable no-unused-vars */
import { Ref } from '@nuxtjs/composition-api'

import { SnsType } from '@lxgic/enums'

export interface IUseLogin {
  isLoginForm: Ref<boolean>
  setIsLoginForm(value: boolean): boolean
  snsButtonClickHandler(type: SnsType): void
}
