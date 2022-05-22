/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { reactive } from '@nuxtjs/composition-api'

import { IPhoneVerificationState, IUsePhoneVerification } from '~/interfaces'

export function usePhoneVerification(): IUsePhoneVerification {
  const state: IPhoneVerificationState = reactive<IPhoneVerificationState>({
    isVerification: false,
  })

  const setIsVerification = (value: boolean): boolean => (state.isVerification = value)

  const getVerificationCode = () => {
    // TODO: API call
    setIsVerification(true)
  }

  return {
    state,
    setIsVerification,
    getVerificationCode,
  }
}
