/* eslint-disable no-unused-vars */

import { Ref } from '@nuxtjs/composition-api'

export interface IUseResetPassword {
  isComplete: Ref<boolean>
  setIsComplete(value: boolean): boolean
  onSubmitHandler(): void
}
