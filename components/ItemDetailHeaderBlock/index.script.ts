import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'

import { useItemDetailHeader, useSnsDetails } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

import InstagramIcon from '~/assets/svg/instagramIcon.svg?inline'
import TwitterIcon from '~/assets/svg/twitterIcon.svg?inline'

export default defineComponent({
  name: 'ItemDetailHeaderBlock',
  components: {
    InstagramIcon,
    TwitterIcon,
  },
  setup() {
    const { state } = useItemDetailHeader()

    const sns = computed(() => useSnsDetails(state.snsDetails).sns)

    return {
      ...toRefs(state),
      sns,
      lightRed: colors.lightRed,
      lightBlack: colors.lightBlack,
    }
  },
})
