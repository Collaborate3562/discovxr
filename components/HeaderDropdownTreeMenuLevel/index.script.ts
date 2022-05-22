/* eslint-disable no-return-assign */

import { defineComponent, Ref, ref } from '@nuxtjs/composition-api'

interface IHeaderDropdownTreeMenuLevelProps {
  items: any[]
}

export default defineComponent<IHeaderDropdownTreeMenuLevelProps>({
  name: 'HeaderDropdownTreeMenuLevel',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup({ items }: IHeaderDropdownTreeMenuLevelProps) {
    const visibilityMap: Map<number, Ref<boolean>> = new Map(
      Array.from({ length: items.length }, (_, idx: number) => [
        idx,
        ref<boolean>(false),
      ]),
    )

    const onMouseOverHandler = (key: number) => (
      (<Ref<boolean>>visibilityMap.get(key)).value = true
    )
    const onMouseLeaveHandler = (key: number) => (
      (<Ref<boolean>>visibilityMap.get(key)).value = false
    )

    return {
      visibilityMap,
      onMouseOverHandler,
      onMouseLeaveHandler,
    }
  },
})
