import { defineComponent, toRefs } from '@nuxtjs/composition-api'

import { useBreadcrumbs } from '~/hooks'

import { IUseBreadcrumbs } from '~/interfaces'

export default defineComponent({
  name: 'BreadcrumbsBlock',
  setup() {
    const { state }: IUseBreadcrumbs = useBreadcrumbs()

    return {
      ...toRefs(state),
    }
  },
})
