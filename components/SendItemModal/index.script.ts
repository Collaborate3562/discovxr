import { defineComponent } from '@nuxtjs/composition-api'

import { useSendItemModal } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

export default defineComponent<{ modal: boolean }>({
  name: 'SendItemModal',
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { close } = useSendItemModal()

    return {
      close,
      lightRed: colors.lightRed,
    }
  },
})
