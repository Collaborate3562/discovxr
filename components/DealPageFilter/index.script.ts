import {
  defineComponent,
  onMounted,
  toRefs,
  useContext,
  watch,
} from '@nuxtjs/composition-api'

import colors from '~/assets/scss/colors.scss'

import { useDealPageFilter } from '~/hooks'

export default defineComponent({
  name: 'DealPageFilter',
  setup() {
    const { $vuetify }: any = useContext()

    const { state, setIsOptionsVisible } = useDealPageFilter()

    onMounted(() => {
      watch(
        () => $vuetify.breakpoint.width,
        (value: number) => setIsOptionsVisible(value < 768),
        { immediate: true },
      )
    })

    return {
      ...toRefs(state),
      setIsOptionsVisible,
      lightRed: colors.lightRed,
    }
  },
})
