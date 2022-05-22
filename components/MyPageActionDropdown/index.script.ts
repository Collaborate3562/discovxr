import { defineComponent, onUnmounted, toRefs } from '@nuxtjs/composition-api'

import { useMyPageActionDropdown } from '~/hooks'

import { IUseMyPageActionDropdown } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

interface IMyPageActionDropdownProps {
  items: any[]
}

export default defineComponent<IMyPageActionDropdownProps>({
  name: 'MyPageActionDropdown',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup({ items }: IMyPageActionDropdownProps) {
    const { state, setList }: IUseMyPageActionDropdown = useMyPageActionDropdown()

    setList(items)

    onUnmounted(() => setList())

    return {
      ...toRefs(state),
      myPageAction: colors.myPageAction,
      lightRed: colors.lightRed,
    }
  },
})
