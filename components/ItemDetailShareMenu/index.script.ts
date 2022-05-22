import { defineComponent } from '@nuxtjs/composition-api'

import colors from '~/assets/scss/colors.scss'

import ShareRevertIcon from '~/assets/svg/shareRevertIcon.svg?inline'
import LineChatIcon from '~/assets/svg/lineChatIcon.svg?inline'
import TwitterIcon from '~/assets/svg/twitterIcon.svg?inline'

export default defineComponent({
  name: 'ItemDetailShareMenu',
  components: {
    ShareRevertIcon,
    LineChatIcon,
    TwitterIcon,
  },
  setup() {
    const shareData: any[] = [
      {
        text: 'ITEM_DETAIL.SHARE.TWITTER',
        icon: 'TwitterIcon',
      },
      {
        text: 'ITEM_DETAIL.SHARE.LINE',
        icon: 'LineChatIcon',
      },
    ]

    return {
      shareData,
      lightBlack: colors.lightBlack,
    }
  },
})
