import { usePhoneVerification } from '~/hooks'

import { IUsePhoneVerification } from '~/interfaces'

describe('usePhoneVerification', () => {
  let wrapper: IUsePhoneVerification

  test('is a Function instance', () => {
    expect(usePhoneVerification).toBeInstanceOf(Function)

    wrapper = usePhoneVerification()
  })

  test('[setIsVerification] method', () => {
    expect(wrapper.setIsVerification).toBeInstanceOf(Function)
    expect(wrapper.state.isVerification).toBeFalsy()

    expect(wrapper.setIsVerification(true)).toBeTruthy()

    expect(wrapper.state.isVerification).toBeTruthy()
  })

  test('[getVerificationCode] method', () => {
    expect(wrapper.getVerificationCode).toBeInstanceOf(Function)

    wrapper.getVerificationCode()

    expect(wrapper.state.isVerification).toBeTruthy()
  })
})
