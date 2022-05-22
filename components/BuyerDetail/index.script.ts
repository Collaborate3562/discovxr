import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'

import { AccountType, DealType, EmotionType } from '@lxgic/enums'

const BuyerDetailReviewCard = () => import('~/components/BuyerDetailReviewCard')

export default defineComponent({
  name: 'BuyerDetail',
  components: {
    BuyerDetailReviewCard,
  },
  setup() {
    // TODO: will be remove (only for design)
    const items: Ref<any[]> = ref<any[]>([])
    setTimeout(() => {
      items.value = Array.from({ length: 7 }, (_, id: number) => ({
        id: id + 1,
        username: 'David Ramsay',
        accountType: AccountType.SELLER,
        emotionType: EmotionType.VERY_GOOD,
        dealType: DealType.AUCTION,
        dealName: 'Deal name deal name',
        comment:
          'Seller comment Seller comment Seller comment Seller comment Seller comment Seller comment Seller comment Seller comment Seller comment Seller co Seller comment Seller comment Seller comment Seller comment Seller comment Seller comment Seller comment Seller comment',
      }))
    }, 1500)

    return {
      items,
    }
  },
})
