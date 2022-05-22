import { CategoryLevel } from '@lxgic/enums'

import { beforeEachHelper } from '~/test/helpers'

import CategoryLevelList from '~/components/CategoryLevelList'

describe('CategoryLevelList', () => {
  let wrapper: any
  const options: any = {
    mocks: {
      localePath: jest.fn(),
    },
  }

  const factory = (item?: any) => {
    if (item) {
      options.propsData = { item }
    }

    wrapper = beforeEachHelper(CategoryLevelList, options)
  }

  beforeEach(() => factory())
  afterEach(() => wrapper.destroy())

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is contain props', () => {
    expect(wrapper.props('items')).toBeFalsy()
  })

  test('[item] prop [BIG] level', () => {
    factory({ level: CategoryLevel.BIG })

    expect(wrapper.vm.color).toBeNull()
    expect(wrapper.vm.titleClass).toBe(
      'text-h6 grey--text font-weight-medium text--darken-2',
    )
  })

  test('[item] prop [MIDDLE] level', () => {
    factory({ level: CategoryLevel.MIDDLE })

    expect(wrapper.vm.color).toBe('grey lighten-4')
    expect(wrapper.vm.titleClass).toBe('black--text')
  })

  test('[item] prop [SMALL] level', () => {
    factory({ level: CategoryLevel.SMALL })

    expect(wrapper.vm.color).toBe('grey lighten-2')
    expect(wrapper.vm.titleClass).toBe('black--text')
  })
})
