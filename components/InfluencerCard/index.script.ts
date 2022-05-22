import { defineComponent } from '@nuxtjs/composition-api'

import { useSnsDetails } from '~/hooks'

import InstagramIcon from '~/assets/svg/instagramIcon.svg?inline'
import TwitterIcon from '~/assets/svg/twitterIcon.svg?inline'

interface IInfluencerCardProps {
  avatar: string
  username: string
  sold: string
  amount: string
  snsDetails: any[]
}

export default defineComponent<IInfluencerCardProps>({
  name: 'InfluencerCard',
  components: {
    InstagramIcon,
    TwitterIcon,
  },
  props: {
    avatar: {
      type: String,
      default: '/images/non-avatar.jpg',
    },
    username: {
      type: String,
      default: '',
    },
    sold: {
      type: String,
      default: '',
    },
    amount: {
      type: String,
      default: '',
    },
    snsDetails: {
      type: Array,
      default: () => [],
    },
  },
  setup({ snsDetails }: IInfluencerCardProps) {
    return {
      ...useSnsDetails(snsDetails),
    }
  },
})
