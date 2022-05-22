import { useResetPassword } from '~/hooks'

import { IUseResetPassword } from '~/interfaces'

describe('useResetPassword', () => {
  let wrapper: IUseResetPassword

  test('is a Function instance', () => {
    expect(useResetPassword).toBeInstanceOf(Function)

    wrapper = useResetPassword()
  })

  test('[setIsComplete] method', () => {
    expect(wrapper.setIsComplete).toBeInstanceOf(Function)
    expect(wrapper.isComplete.value).toBeFalsy()

    expect(wrapper.setIsComplete(true)).toBeTruthy()

    expect(wrapper.isComplete.value).toBeTruthy()
  })

  test('[onSubmitHandler] method', () => {
    expect(wrapper.onSubmitHandler).toBeInstanceOf(Function)

    wrapper.onSubmitHandler()

    expect(wrapper.isComplete.value).toBeTruthy()
  })
})
