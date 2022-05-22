import { defineComponent, toRef } from '@vue/composition-api'

import { usePersonalIdentification } from '~/hooks'

export default defineComponent({
  name: 'PersonalIdentification',
  setup() {
    const { state, setIsVerified } = usePersonalIdentification()

    // TODO: will be remove (only for design)
    setTimeout(() => setIsVerified(true), 1000)

    return {
      isVerified: toRef(state, 'isVerified'),
    }
  },
})
