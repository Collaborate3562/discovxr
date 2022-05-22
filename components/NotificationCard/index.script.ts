import { defineComponent } from '@nuxtjs/composition-api'

interface INotificationCardProps {
  isRead: boolean
  message: string
  avatar: string
  timestamp: string
}

export default defineComponent<INotificationCardProps>({
  name: 'NotificationCard',
  props: {
    isRead: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      default: '/images/non-avatar.jpg',
    },
    timestamp: {
      type: String,
      default: '',
    },
  },
  setup() {},
})
