import { beforeEachHelper } from '~/test/helpers'

import HeaderDropdownMenu from '~/components/HeaderDropdownMenu'

describe('HeaderDropdownMenu', () => {
  let wrapper: any
  const options: any = {
    mocks: {
      localePath: jest.fn(),
    },
  }

  const factory = (props?: any) => {
    if (props) {
      options.propsData = props
    }

    wrapper = beforeEachHelper(HeaderDropdownMenu, options)
  }

  beforeEach(() => factory())
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is contain props', () => {
    expect(wrapper.props('items')).toBeInstanceOf(Array)
    expect(wrapper.props('menu')).toBeFalsy()
    expect(wrapper.props('title')).toBe('')
    expect(wrapper.props('route')).toBe('')
  })

  test('set [menu] prop', () => {
    factory({ menu: true })

    expect(wrapper.props('menu')).toBeTruthy()
  })
})
