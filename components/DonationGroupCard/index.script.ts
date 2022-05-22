import { defineComponent } from '@nuxtjs/composition-api'

interface IDonationGroupCardProps {
  image: string
  title: string
  groupName: string
  amount: string
  donatedCount: number
}

export default defineComponent<IDonationGroupCardProps>({
  name: 'DonationGroupCard',
  props: {
    image: {
      type: String,
      default: '/images/empty.png',
    },
    title: {
      type: String,
      default: '',
    },
    groupName: {
      type: String,
      default: '',
    },
    amount: {
      type: String,
      default: '',
    },
    donatedCount: {
      type: Number,
      default: 0,
    },
  },
  setup() {},
})
