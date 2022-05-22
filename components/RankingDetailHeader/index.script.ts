import { defineComponent } from '@nuxtjs/composition-api'

interface IRankingDetailHeaderProps {
  deals: string
  donation: string
  sold: string
}

export default defineComponent<IRankingDetailHeaderProps>({
  name: 'RankingDetailHeader',
  props: {
    deals: {
      type: String,
      default: '',
    },
    donation: {
      type: String,
      default: '',
    },
    sold: {
      type: String,
      default: '',
    },
  },
  setup() {},
})
