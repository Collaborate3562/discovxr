import { computed, ComputedRef, defineComponent } from '@nuxtjs/composition-api'

import { CategoryLevel } from '@lxgic/enums'

import { TStringOrNull } from '~/types'

interface IGuideLevelListProps {
  item: any
}

export default defineComponent<IGuideLevelListProps>({
  name: 'GuideLevelList',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup({ item }: IGuideLevelListProps) {
    const color: ComputedRef<TStringOrNull> = computed<TStringOrNull>(() => {
      switch (item.level) {
        case CategoryLevel.MIDDLE:
          return 'grey lighten-4'
        case CategoryLevel.SMALL:
          return 'grey lighten-2'
        default:
          return null
      }
    })

    return { color }
  },
})
