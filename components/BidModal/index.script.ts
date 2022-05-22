import { defineComponent, toRef, toRefs } from '@nuxtjs/composition-api'

import { useBidModal } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'BidModal',
  setup() {
    const {
      isOpen, close, state, setIsConfitmation,
    } = useBidModal()

    const clickHandler = () => {
      if (!state.isConfirmation) {
        return setIsConfitmation(true)
      }
    }

    return {
      ...toRefs(state),
      isOpen: toRef(isOpen, 'value'),
      lightRed: colors.lightRed,
      close,
      clickHandler,
      setIsConfitmation,
    }
  },
})
