/* eslint-disable no-unused-vars */

import { IPhoneVerificationState } from '~/interfaces'

export interface IUsePhoneVerification {
  state: IPhoneVerificationState
  setIsVerification(value: boolean): boolean
  getVerificationCode(): void
}
