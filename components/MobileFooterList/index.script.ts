import {
  defineComponent, reactive, ref, Ref,
} from '@nuxtjs/composition-api'

import { useFooter } from '~/hooks'

import { IUseFooter } from '~/interfaces'

export default defineComponent({
  name: 'MobileFooterList',
  setup() {
    const { state }: IUseFooter = useFooter()

    const markers: Map<number, Ref<boolean>> = reactive<
      Map<number, Ref<boolean>>
    >(new Map())

    const toggleMarker = (key: number): any => {
      markers.set(key, ref(!markers.get(key)?.value))

      markers.forEach((_, markerKey: number) => {
        if (markerKey !== key) {
          markers.set(markerKey, ref(false))
        }
      })
    }

    const getIcon = (key: number): string => {
      switch (true) {
        case markers.get(key)?.value:
          return 'mdi-minus'
        default:
          return 'mdi-plus'
      }
    }

    return {
      list: state.list,
      toggleMarker,
      getIcon,
    }
  },
})
