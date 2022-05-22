import { defineComponent } from '@nuxtjs/composition-api'

import { useSnsDetails } from '~/hooks'

import InstagramIcon from '~/assets/svg/instagramIcon.svg?inline'
import TwitterIcon from '~/assets/svg/twitterIcon.svg?inline'

interface IRankingListCardProps {
  snsDetails: any[]
  rankLevel: number
  avatar: string
  username: string
  purchase: string
  deals: string
  contribution: string
  donation: string
}

export default defineComponent<IRankingListCardProps>({
  name: 'RankingListCard',
  components: {
    InstagramIcon,
    TwitterIcon,
  },
  props: {
    snsDetails: {
      type: Array,
      default: () => [],
    },
    rankLevel: {
      type: Number,
      default: 0,
    },
    avatar: {
      type: String,
      default: '/images/non-avatar.jpg',
    },
    username: {
      type: String,
      default: '',
    },
    purchase: {
      type: String,
      default: '',
    },
    contribution: {
      type: String,
      default: '',
    },
    deals: {
      type: String,
      default: '',
    },
    donation: {
      type: String,
      default: '',
    },
  },
  setup({ snsDetails }: IRankingListCardProps) {
    return {
      ...useSnsDetails(snsDetails),
    }
  },
})
