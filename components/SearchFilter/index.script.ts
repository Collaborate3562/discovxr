import { defineComponent, toRefs } from '@nuxtjs/composition-api'

import { useSearchFilter } from '~/hooks'

import { IUseSearchFilter } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'SearchFilter',
  setup() {
    const { state, searchHandler }: IUseSearchFilter = useSearchFilter()

    const onSearchHandler = () => {
      try {
        searchHandler()
      } catch (e) {}
    }

    return {
      ...toRefs(state),
      onSearchHandler,
      lightRed: colors.lightRed,
    }
  },
})
