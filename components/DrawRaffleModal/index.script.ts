import { defineComponent, toRef, toRefs } from '@nuxtjs/composition-api'

import { useDrawRaffleModal } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'DrawRaffleModal',
  setup() {
    const {
      isOpen, close, state, setIsConfitmation,
    } = useDrawRaffleModal()

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
