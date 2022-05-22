import { defineComponent, toRef, toRefs } from '@nuxtjs/composition-api'

import { useShoppingModal } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

import ColorSelection from '~/components/ColorSelection'
import SizeSelection from '~/components/SizeSelection'

export default defineComponent({
  name: 'ShoppingModal',
  components: {
    ColorSelection,
    SizeSelection,
  },
  setup() {
    const {
      isOpen,
      state,
      badgeState,
      close,
      addToCart,
      removeCart,
      setIsViewCart,
    } = useShoppingModal()

    // TODO: will be remove (only for design)
    const colorSelectionData: string[] = Array.from(
      { length: 12 },
      () => `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    )
    const sizeSelectionData: string[] = Array.from({ length: 9 }, (_, id) => (id ? `${id + 1}S` : 'S'))

    const clickHandler = () => {
      if (!state.isViewCart) {
        return addToCart()
      }
    }

    return {
      ...toRefs(state),
      ...toRefs(badgeState),
      isOpen: toRef(isOpen, 'value'),
      lightRed: colors.lightRed,
      lightBlack: colors.lightBlack,
      colorSelectionData,
      sizeSelectionData,
      close,
      removeCart,
      clickHandler,
      setIsViewCart,
    }
  },
})
