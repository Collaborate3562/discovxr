import { defineComponent } from '@vue/composition-api'

import { HeaderProfileMenuLink } from '~/enums'

export default defineComponent({
  name: 'HeaderProfileMenu',
  setup() {
    const items: any[] = Object.entries(HeaderProfileMenuLink).map(
      ([key, route]) => ({
        text: `HEADER.PROFILE_DIALOG.ITEMS.${key}`,
        route,
      }),
    )

    return { items }
  },
})
