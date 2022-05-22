import { computed, ComputedRef, defineComponent } from '@nuxtjs/composition-api'

import colors from '~/assets/scss/colors.scss'

import { ISnsButton } from '~/interfaces'

export default defineComponent<ISnsButton>({
  name: 'SnsButton',
  props: {
    type: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    connected: {
      type: Boolean,
      default: undefined,
    },
  },
  setup({ connected }: ISnsButton) {
    const isConnectedDefined: ComputedRef<boolean> = computed<boolean>(
      () => connected !== undefined,
    )

    return {
      isConnectedDefined,
      lightRed: colors.lightRed,
    }
  },
})
