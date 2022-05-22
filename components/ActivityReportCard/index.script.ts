import { defineComponent } from '@nuxtjs/composition-api'

interface IActivityReportCardProps {
  image: string
  title: string
  description: string
  timestamp: string
}

export default defineComponent<IActivityReportCardProps>({
  name: 'ActivityReportCard',
  props: {
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    timestamp: {
      type: String,
      default: '',
    },
  },
})
