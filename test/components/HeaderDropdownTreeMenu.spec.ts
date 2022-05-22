import { beforeEachHelper } from '~/test/helpers'

import HeaderDropdownTreeMenu from '~/components/HeaderDropdownTreeMenu'

describe('HeaderDropdownTreeMenu', () => {
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

    wrapper = beforeEachHelper(HeaderDropdownTreeMenu, options)
  }

  beforeEach(() => factory())
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is contain props', () => {
    expect(wrapper.props('items')).toBeInstanceOf(Array)
    expect(wrapper.props('title')).toBe('')
    expect(wrapper.props('route')).toBe('')
  })

  test('set [items] prop', () => {
    factory({
      items: [
        {
          text: 'text',
          route: 'route',
        },
      ],
    })

    expect(wrapper.props('items')).toHaveLength(1)
  })

  test('[onMouseOverHandler/onMouseLeaveHandler] methods', () => {
    expect(wrapper.vm.onMouseOverHandler).toBeInstanceOf(Function)
    expect(wrapper.vm.onMouseLeaveHandler).toBeInstanceOf(Function)

    expect(wrapper.vm.isVisible).toBeFalsy()

    wrapper.vm.onMouseOverHandler()
    expect(wrapper.vm.isVisible).toBeTruthy()

    wrapper.vm.onMouseLeaveHandler()
    expect(wrapper.vm.isVisible).toBeFalsy()
  })
})
