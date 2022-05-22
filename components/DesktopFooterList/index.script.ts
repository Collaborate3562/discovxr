import { defineComponent } from '@nuxtjs/composition-api'

import { useFooter } from '~/hooks'

import { IUseFooter } from '~/interfaces'

export default defineComponent({
  name: 'DesktopFooterList',
  setup() {
    const { state }: IUseFooter = useFooter()

    return {
      list: state.list,
    }
  },
})
