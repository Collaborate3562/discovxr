import { defineComponent } from '@nuxtjs/composition-api'

import { useDealTypeIcon, useEmotionTypeIcon } from '@lxgic/hooks'

import { AccountType, DealType, EmotionType } from '@lxgic/enums'

import VeryGoodIcon from '~/assets/svg/Emotions/veryGoodIcon.svg?inline'
import GoodIcon from '~/assets/svg/Emotions/goodIcon.svg?inline'
import NormalIcon from '~/assets/svg/Emotions/normalIcon.svg?inline'
import BadIcon from '~/assets/svg/Emotions/badIcon.svg?inline'
import VeryBadIcon from '~/assets/svg/Emotions/veryBadIcon.svg?inline'
import ShoppingIcon from '~/assets/svg/DealType/shoppingIcon.svg?inline'
import AuctionIcon from '~/assets/svg/DealType/auctionIcon.svg?inline'
import RaffleIcon from '~/assets/svg/DealType/raffleIcon.svg?inline'

interface IBuyerDetailReviewCardProps {
  avatar: string
  username: string
  comment: string
  dealName: string
  dealType: DealType
  emotionType: EmotionType
  accountType: AccountType
}

export default defineComponent<IBuyerDetailReviewCardProps>({
  name: 'BuyerDetailReviewCard',
  components: {
    VeryGoodIcon,
    GoodIcon,
    NormalIcon,
    BadIcon,
    VeryBadIcon,
    ShoppingIcon,
    RaffleIcon,
    AuctionIcon,
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
    comment: {
      type: String,
      default: '',
    },
    dealName: {
      type: String,
      default: '',
    },
    dealType: {
      type: String,
      default: '',
    },
    emotionType: {
      type: String,
      default: '',
    },
    accountType: {
      type: String,
      default: '',
    },
  },
  setup({ emotionType, dealType }: IBuyerDetailReviewCardProps) {
    return {
      emotionTypeIcon: useEmotionTypeIcon(emotionType),
      dealTypeIcon: useDealTypeIcon(dealType),
    }
  },
})
