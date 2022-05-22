/* eslint-disable no-return-assign */

import {
  defineComponent, ref, Ref, toRef,
} from '@nuxtjs/composition-api'

import { DealType } from '@lxgic/enums'

import { useDealTypeIcon } from '@lxgic/hooks'

import ShoppingIcon from '~/assets/svg/DealType/shoppingIcon.svg?inline'
import AuctionIcon from '~/assets/svg/DealType/auctionIcon.svg?inline'
import RaffleIcon from '~/assets/svg/DealType/raffleIcon.svg?inline'

interface IImageCarouselProps {
  images: string[]
  dealType: DealType
}

export default defineComponent<IImageCarouselProps>({
  name: 'ImageCarousel',
  components: {
    ShoppingIcon,
    RaffleIcon,
    AuctionIcon,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    dealType: {
      type: String,
      default: '',
    },
  },
  setup({ dealType }: IImageCarouselProps) {
    const dealTypeIcon: any = useDealTypeIcon(dealType)

    const active: Ref<number> = ref<number>(0)

    const setImage = (index: number) => (active.value = index)

    return {
      dealTypeIcon: toRef(dealTypeIcon, 'value'),
      active,
      setImage,
    }
  },
})
