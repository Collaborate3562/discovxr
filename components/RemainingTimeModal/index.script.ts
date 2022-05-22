import { defineComponent, toRef, toRefs } from '@nuxtjs/composition-api'

import { useRemainingTimeModal } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'RemainingTimeModal',
  setup() {
    const { isOpen, close, state } = useRemainingTimeModal()

    return {
      ...toRefs(state),
      isOpen: toRef(isOpen, 'value'),
      close,
      lightRed: colors.lightRed,
    }
  },
})
