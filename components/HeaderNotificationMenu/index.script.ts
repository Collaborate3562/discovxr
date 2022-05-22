import { defineComponent, onMounted, toRefs } from '@vue/composition-api'

import { useBadge } from '@lxgic/hooks'

import { IUseBadge } from '@lxgic/interfaces'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'HeaderNotificationMenu',
  setup() {
    const { state, setContent }: IUseBadge = useBadge()

    // TODO: will be remove (only for design)
    const pause = (ms: number): Promise<any> => new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
    onMounted(async () => {
      await pause(3000)
      setContent(1)
      await pause(4000)
      setContent(2)
    })

    return {
      ...toRefs(state),
      lightRed: colors.lightRed,
    }
  },
})
