import { beforeEachHelper } from '~/test/helpers'

import HeaderDropdownTreeMenuLevel from '~/components/HeaderDropdownTreeMenuLevel'

describe('HeaderDropdownTreeMenuLevel', () => {
  let wrapper: any
  const options: any = {
    mocks: {
      localePath: jest.fn(),
    },
  }

  const factory = (items?: any[]) => {
    if (items) {
      options.propsData = { items }
    }

    wrapper = beforeEachHelper(HeaderDropdownTreeMenuLevel, options)
  }

  beforeEach(() => factory())
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is contain props', () => {
    expect(wrapper.props('items')).toBeInstanceOf(Array)
  })

  test('set [items] prop', () => {
    factory([
      {
        text: 'text',
        route: 'route',
      },
    ])

    expect(wrapper.props('items')).toHaveLength(1)
  })

  test('[onMouseOverHandler/onMouseLeaveHandler] methods', () => {
    expect(wrapper.vm.onMouseOverHandler).toBeInstanceOf(Function)
    expect(wrapper.vm.onMouseLeaveHandler).toBeInstanceOf(Function)

    expect(wrapper.vm.visibilityMap.get(0).value).toBeFalsy()

    wrapper.vm.onMouseOverHandler(0)
    expect(wrapper.vm.visibilityMap.get(0).value).toBeTruthy()

    wrapper.vm.onMouseLeaveHandler(0)
    expect(wrapper.vm.visibilityMap.get(0).value).toBeFalsy()
  })
})
