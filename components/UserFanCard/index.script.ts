import {
  defineComponent, reactive, ref, Ref,
} from '@nuxtjs/composition-api'

import { EmotionType } from '@lxgic/enums'

import { useEmotionTypeIcon } from '@lxgic/hooks'

import { useSnsDetails } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

import VeryGoodIcon from '~/assets/svg/Emotions/veryGoodIcon.svg?inline'
import GoodIcon from '~/assets/svg/Emotions/goodIcon.svg?inline'
import NormalIcon from '~/assets/svg/Emotions/normalIcon.svg?inline'
import BadIcon from '~/assets/svg/Emotions/badIcon.svg?inline'
import VeryBadIcon from '~/assets/svg/Emotions/veryBadIcon.svg?inline'
import InstagramIcon from '~/assets/svg/instagramIcon.svg?inline'
import TwitterIcon from '~/assets/svg/twitterIcon.svg?inline'

interface IUserFanCardProps {
  isFollow: boolean
  avatar: string
  username: string
  introduction: string
  deals: number
  donations: number
  rating: any[]
  snsDetails: any[]
}

export default defineComponent<IUserFanCardProps>({
  name: 'UserFanCard',
  components: {
    VeryGoodIcon,
    GoodIcon,
    NormalIcon,
    BadIcon,
    VeryBadIcon,
    InstagramIcon,
    TwitterIcon,
  },
  props: {
    isFollow: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: '/images/non-avatar.jpg',
    },
    username: {
      type: String,
      default: '',
    },
    introduction: {
      type: String,
      default: '',
    },
    deals: {
      type: Number,
      default: 0,
    },
    donations: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Array,
      default: () => [],
    },
    snsDetails: {
      type: Array,
      default: () => [],
    },
  },
  setup({ rating, snsDetails }: IUserFanCardProps) {
    const emotions: Map<EmotionType, Ref<any>> = reactive<
      Map<EmotionType, Ref<any>>
    >(new Map())

    rating.forEach(({ type, count }: any) => emotions.set(
      type,
      ref({
        icon: useEmotionTypeIcon(type),
        count,
      }),
    ))

    return {
      ...useSnsDetails(snsDetails),
      emotions,
      lightRed: colors.lightRed,
    }
  },
})
