import { defineComponent } from '@nuxtjs/composition-api'

import { useRejectModal } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

export default defineComponent<{ modal: boolean }>({
  name: 'RejectModal',
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { close } = useRejectModal()

    return {
      close,
      lightRed: colors.lightRed,
    }
  },
})
