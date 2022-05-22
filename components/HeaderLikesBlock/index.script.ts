import { defineComponent, onMounted, toRefs } from '@vue/composition-api'

import { useBadge } from '@lxgic/hooks'

import { IUseBadge } from '@lxgic/interfaces'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'HeaderLikesBlock',
  setup() {
    const { state, setContent }: IUseBadge = useBadge()

    // TODO: will be remove (only for design)
    const pause = (ms: number): Promise<any> => new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
    onMounted(async () => {
      await pause(2000)
      setContent(1)
      await pause(1000)
      setContent(2)
      await pause(1500)
      setContent(3)
    })

    return {
      ...toRefs(state),
      lightRed: colors.lightRed,
    }
  },
})
