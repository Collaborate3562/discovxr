/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { Ref, ref } from '@nuxtjs/composition-api'

import { SnsType } from '@lxgic/enums'

import { IUseLogin } from '~/interfaces'

const isLoginForm: Ref<boolean> = ref<boolean>(false)

export function useLogin(): IUseLogin {
  const setIsLoginForm = (value: boolean): boolean => (isLoginForm.value = value)

  const snsButtonClickHandler = (type: SnsType): void => {
    switch (type) {
      case SnsType.BLOG:
      case SnsType.EMAIL:
        setIsLoginForm(true)
        break
      default:
        setIsLoginForm(false)
    }
  }

  return {
    isLoginForm,
    setIsLoginForm,
    snsButtonClickHandler,
  }
}
