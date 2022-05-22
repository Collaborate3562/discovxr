import { defineComponent, useContext } from '@nuxtjs/composition-api'

import { SnsType } from '@lxgic/enums'

import colors from '~/assets/scss/colors.scss'

export default defineComponent<{ modal: boolean }>({
  name: 'CannotPostModal',
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { i18n }: any = useContext()

    const list: string[] = [
      SnsType.INSTAGRAM,
      SnsType.TWITTER,
      SnsType.FACEBOOK,
      SnsType.YOUTUBE,
    ].map((type: SnsType) => i18n.t(`HOME.CANNOT_MODAL.${type}`, { count: 5 }))

    return {
      list,
      lightRed: colors.lightRed,
    }
  },
})
