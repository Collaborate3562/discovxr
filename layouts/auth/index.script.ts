import { defineComponent, toRef } from '@nuxtjs/composition-api'

import { usePageLoading } from '@lxgic/hooks'

import { IUsePageLoading } from '@lxgic/interfaces'

import AuthFooter from '~/components/AuthFooter'

export default defineComponent({
  components: {
    AuthFooter,
  },
  setup() {
    const { loading }: IUsePageLoading = usePageLoading(false)

    return {
      loading: toRef(loading, 'value'),
    }
  },
})
