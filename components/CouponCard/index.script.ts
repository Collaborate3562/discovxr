import {
  computed,
  ComputedRef,
  defineComponent,
  useContext,
} from '@nuxtjs/composition-api'

import { CouponType } from '@lxgic/enums'

interface ICouponCardProps {
  type: CouponType
  title: string
  description: string
  currency: string
  percentage: number
}

export default defineComponent<ICouponCardProps>({
  name: 'CouponCard',
  props: {
    type: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    currency: {
      type: String,
      default: '',
    },
    percentage: {
      type: Number,
      default: 0,
    },
  },
  setup({ type, currency, percentage }: ICouponCardProps) {
    const { i18n }: any = useContext()

    const couponType: ComputedRef<string> = computed<string>(() => {
      switch (type) {
        case CouponType.FLAT:
          return 'coupon-flat'
        case CouponType.PERCENTAGE:
          return 'coupon-percentage'
        case CouponType.FREE_SHIPPING:
          return 'coupon-free'
        default:
          return ''
      }
    })

    const couponValue: ComputedRef<string> = computed<string>(() => {
      switch (type) {
        case CouponType.FLAT:
          // TODO: currency
          return `¥${currency} ${i18n.t('COUPONS.OFF')}`
        case CouponType.PERCENTAGE:
          return `${percentage}% ${i18n.t('COUPONS.OFF')}`
        case CouponType.FREE_SHIPPING:
          return i18n.t('COUPONS.FREE')
        default:
          return ''
      }
    })

    return { couponType, couponValue }
  },
})
