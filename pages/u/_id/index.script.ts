import {
  defineComponent,
  toRef,
  toRefs,
  useContext,
  useRoute,
} from '@nuxtjs/composition-api'

import { useEmotionTypeIcon } from '@lxgic/hooks'

import { EmotionType } from '@lxgic/enums'

import { ProfileDetail } from '~/enums'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import { useBannerBlock, useBreadcrumbs, useUserDetail } from '~/hooks'

import VeryGoodIcon from '~/assets/svg/Emotions/veryGoodIcon.svg?inline'
import GoodIcon from '~/assets/svg/Emotions/goodIcon.svg?inline'
import NormalIcon from '~/assets/svg/Emotions/normalIcon.svg?inline'
import BadIcon from '~/assets/svg/Emotions/badIcon.svg?inline'
import VeryBadIcon from '~/assets/svg/Emotions/veryBadIcon.svg?inline'

import UserDetailCard from '~/components/UserDetailCard'

const UserDetailProductCard = () => import('~/components/UserDetailProductCard')
const SellerDetail = () => import('~/components/SellerDetail')
const BuyerDetail = () => import('~/components/BuyerDetail')

export default defineComponent({
  components: {
    BuyerDetail,
    SellerDetail,
    UserDetailProductCard,
    UserDetailCard,
    VeryGoodIcon,
    GoodIcon,
    NormalIcon,
    BadIcon,
    VeryBadIcon,
  },
  layout: 'default/index',
  setup() {
    const { i18n }: any = useContext()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    // TODO: will be change (only for design)
    const {
      state,
      setAvatar,
      setUsername,
      addDetail,
      setIsBuyer,
      addEmotion,
      setUserId,
    } = useUserDetail()

    setAvatar('/images/non-avatar.jpg')
    setUsername('David Ramsay')

    const $route: any = useRoute()

    setUserId($route.value.params.id)
    setIsBuyer(!+$route.value.params.id)

    if (state.isBuyer) {
      Array.prototype.forEach.call(
        [
          EmotionType.VERY_GOOD,
          EmotionType.GOOD,
          EmotionType.NORMAL,
          EmotionType.BAD,
          EmotionType.VERY_BAD,
        ],
        (key: EmotionType) => addEmotion(key, {
          text: i18n.t(`EMOTION.${key}`),
          icon: toRef(useEmotionTypeIcon(key), 'value'),
          count: 0,
        }),
      )
    }

    const detailTypes: ProfileDetail[] = state.isBuyer
      ? [
        ProfileDetail.DEALS_PARTICIPATION,
        ProfileDetail.PURCHASES,
        ProfileDetail.FOLLOWINGS,
      ]
      : [
        ProfileDetail.DEALS,
        ProfileDetail.FOLLOWERS,
        ProfileDetail.FOLLOWINGS,
        ProfileDetail.DONATIONS,
      ]

    Array.prototype.forEach.call(detailTypes, (key) => addDetail(key, {
      text: i18n.t(`USER_DETAIL.${key}`),
      count: 0,
    }))

    return {
      ...toRefs(state),
    }
  },
})
