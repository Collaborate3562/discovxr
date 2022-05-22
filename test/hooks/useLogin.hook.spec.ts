import { SnsType } from '@lxgic/enums'

import { useLogin } from '~/hooks'

import { IUseLogin } from '~/interfaces'

describe('useLogin', () => {
  let wrapper: IUseLogin

  test('is a Function instance', () => {
    expect(useLogin).toBeInstanceOf(Function)

    wrapper = useLogin()
  })

  test('[setIsLoginForm] method', () => {
    expect(wrapper.setIsLoginForm).toBeInstanceOf(Function)
    expect(wrapper.isLoginForm.value).toBeFalsy()

    expect(wrapper.setIsLoginForm(true)).toBeTruthy()

    expect(wrapper.isLoginForm.value).toBeTruthy()
  })

  test('[snsButtonClickHandler] method', () => {
    expect(wrapper.snsButtonClickHandler).toBeInstanceOf(Function)

    wrapper.snsButtonClickHandler(SnsType.INSTAGRAM)

    expect(wrapper.isLoginForm.value).toBeFalsy()

    wrapper.snsButtonClickHandler(SnsType.BLOG)
    wrapper.snsButtonClickHandler(SnsType.EMAIL)

    expect(wrapper.isLoginForm.value).toBeTruthy()
  })
})
