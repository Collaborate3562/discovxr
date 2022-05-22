import { defineComponent } from '@nuxtjs/composition-api'

import { IHeaderDropdownMenuItem } from '~/interfaces'

export default defineComponent<IHeaderDropdownMenuItem>({
  name: 'HeaderDropdownMenu',
  props: {
    menu: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    route: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
})
