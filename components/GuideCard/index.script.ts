import { defineComponent } from '@nuxtjs/composition-api'

import GuideLevelList from '~/components/GuideLevelList'

export default defineComponent<{ items: any[] }>({
  name: 'GuideCard',
  components: {
    GuideLevelList,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
})
