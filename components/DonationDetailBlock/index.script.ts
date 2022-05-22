import { defineComponent } from '@vue/composition-api'

import colors from '~/assets/scss/colors.scss'

interface IDonationDetailBlockProps {
  amount: string
  influencers: string
  contributors: string
  leftDays: number
  isProject: boolean
}

export default defineComponent<IDonationDetailBlockProps>({
  name: 'DonationDetailBlock',
  props: {
    amount: {
      type: String,
      default: '',
    },
    influencers: {
      type: String,
      default: '',
    },
    contributors: {
      type: String,
      default: '',
    },
    leftDays: {
      type: Number,
      default: 0,
    },
    isProject: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      lightRed: colors.lightRed,
      lightBlack: colors.lightBlack,
    }
  },
})
