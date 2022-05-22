import { computed, ComputedRef, defineComponent } from '@nuxtjs/composition-api'

import { PointType } from '@lxgic/enums'

import colors from '~/assets/scss/colors.scss'

interface IPointCardProps {
  type: PointType
  title: string
  point: number
  timestamp: string
}

export default defineComponent<IPointCardProps>({
  name: 'PointCard',
  props: {
    type: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    point: {
      type: Number,
      default: 0,
    },
    timestamp: {
      type: String,
      default: '',
    },
  },
  setup({ type }: IPointCardProps) {
    const pointData: ComputedRef<any> = computed(() => {
      switch (type) {
        case PointType.ADDED:
          return {
            text: colors.pointAddedText,
            bg: colors.pointAdded,
            icon: '&#43;',
          }
        case PointType.CHARGED:
          return {
            text: colors.pointChargedText,
            bg: colors.pointCharged,
            icon: '&#8722;',
          }
        default:
          return null
      }
    })

    return { pointData }
  },
})
