import { computed, ComputedRef, defineComponent } from '@nuxtjs/composition-api'

interface IMessengerTextMessageProps {
  message: string
  timestamp: string
  isMe: boolean
}

export default defineComponent<IMessengerTextMessageProps>({
  name: 'MessengerTextMessage',
  props: {
    isMe: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
    timestamp: {
      type: String,
      default: '',
    },
  },
  setup({ isMe }: IMessengerTextMessageProps) {
    const color: ComputedRef<string> = computed<string>(() => (isMe ? 'blue lighten-5' : 'grey lighten-4'))

    return { color }
  },
})
