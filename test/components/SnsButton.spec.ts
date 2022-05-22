import { beforeEachHelper } from '~/test/helpers'

import SnsButton from '~/components/SnsButton'

describe('SnsButton', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = beforeEachHelper(SnsButton)
  })
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is contain props', () => {
    expect(wrapper.props('type')).toBe('')
    expect(wrapper.props('text')).toBe('')
    expect(wrapper.props('color')).toBe('')
    expect(wrapper.props('icon')).toBe('')
    expect(wrapper.props('loading')).toBeFalsy()
    expect(wrapper.props('connected')).toBeFalsy()
  })
})
