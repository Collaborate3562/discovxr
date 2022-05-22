/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { Ref, ref } from '@nuxtjs/composition-api'

import { IUseResetPassword } from '~/interfaces'

const isComplete: Ref<boolean> = ref<boolean>(false)

export function useResetPassword(): IUseResetPassword {
  const setIsComplete = (value: boolean): boolean => (isComplete.value = value)

  const onSubmitHandler = () => {
    // TODO: call API
    setIsComplete(true)
  }

  return {
    isComplete,
    setIsComplete,
    onSubmitHandler,
  }
}
