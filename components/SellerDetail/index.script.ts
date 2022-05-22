import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'

import TwitterIcon from '~/assets/svg/twitterIcon.svg?inline'
import LineChatIcon from '~/assets/svg/lineChatIcon.svg?inline'

export default defineComponent({
  name: 'SellerDetail',
  components: {
    TwitterIcon,
    LineChatIcon,
  },
  setup() {
    // TODO: will be remove (only for design)
    const items: Ref<any[]> = ref<any[]>([])
    setTimeout(() => {
      items.value = Array.from({ length: 12 }, (_, id: number) => ({
        id: id + 1,
        sold: id === 2,
        image: '/images/item-image.png',
        title:
          'Gucci crocodile bag with super super harasd Gucci crocodile bag with super super harasd',
        price: '¥100,000',
      }))
    }, 1500)

    setTimeout(() => {
      items.value[0].sold = true
    }, 2500)
    setTimeout(() => {
      items.value[5].sold = true
    }, 3000)
    setTimeout(() => {
      items.value[7].sold = true
    }, 3200)

    return {
      items,
    }
  },
})
