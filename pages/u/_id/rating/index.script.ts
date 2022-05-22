import { defineComponent, toRef } from '@nuxtjs/composition-api'

import { EmotionType } from '@lxgic/enums'

import { useEmotionTypeIcon } from '@lxgic/hooks'

import { useBannerBlock, useBreadcrumbs } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

import VeryGoodIcon from '~/assets/svg/Emotions/veryGoodIcon.svg?inline'
import GoodIcon from '~/assets/svg/Emotions/goodIcon.svg?inline'
import NormalIcon from '~/assets/svg/Emotions/normalIcon.svg?inline'
import BadIcon from '~/assets/svg/Emotions/badIcon.svg?inline'
import VeryBadIcon from '~/assets/svg/Emotions/veryBadIcon.svg?inline'

const MyPageSidebar = () => import('~/components/MyPageSidebar')

export default defineComponent({
  components: {
    MyPageSidebar,
    VeryGoodIcon,
    GoodIcon,
    NormalIcon,
    BadIcon,
    VeryBadIcon,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    // TODO: will be change (only for design)
    const emotionItems: any[] = Array.prototype.map.call(
      [
        EmotionType.VERY_GOOD,
        EmotionType.GOOD,
        EmotionType.NORMAL,
        EmotionType.BAD,
        EmotionType.VERY_BAD,
      ],
      (type: EmotionType) => ({
        text: `EMOTION.${type}`,
        value: type,
        icon: toRef(useEmotionTypeIcon(type), 'value'),
      }),
    )
    const item: any = {
      image: '/images/item-image.png',
      title:
        'Item title Item title Item title Item title Item title Item title Item title Item title Item Item title Item title Item title Item title',
      price: '¥ 9,000',
      coupons: 'None',
      pointUsage: '¥ 9,000',
      deliveryCosts: 'Included (paid by the customer)',
      startDate: '2019-06-15 15:04',
      endDate: '2019-07-15 16:05',
    }

    return {
      item,
      emotionItems,
      lightBlack: colors.lightBlack,
      lightRed: colors.lightRed,
      alertLightRed: colors.alertLightRed,
    }
  },
})
