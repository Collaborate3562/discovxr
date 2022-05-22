import { computed, ComputedRef, defineComponent } from '@nuxtjs/composition-api'

import { CategoryLevel } from '@lxgic/enums'

import { TStringOrNull } from '~/types'

interface ICategoryLevelListProps {
  item: any
}

export default defineComponent<ICategoryLevelListProps>({
  name: 'CategoryLevelList',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup({ item }: ICategoryLevelListProps) {
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
    const titleClass: ComputedRef<string> = computed<string>(() => (item.level === CategoryLevel.BIG
      ? 'text-h6 grey--text font-weight-medium text--darken-2'
      : 'black--text'))

    return {
      color,
      titleClass,
    }
  },
})
