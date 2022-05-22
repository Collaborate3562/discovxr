/* eslint-disable no-return-assign */

import { defineComponent, Ref, ref } from '@nuxtjs/composition-api'

import HeaderDropdownTreeMenuLevel from '~/components/HeaderDropdownTreeMenuLevel'

interface IHeaderDropdownTreeMenuProps {
  title: string
  route: string
  items: any[]
}

export default defineComponent<IHeaderDropdownTreeMenuProps>({
  name: 'HeaderDropdownTreeMenu',
  components: {
    HeaderDropdownTreeMenuLevel,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    route: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const isVisible: Ref<boolean> = ref<boolean>(false)

    const onMouseOverHandler = () => (isVisible.value = true)
    const onMouseLeaveHandler = () => (isVisible.value = false)

    return {
      isVisible,
      onMouseOverHandler,
      onMouseLeaveHandler,
    }
  },
})
