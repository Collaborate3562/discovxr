import { defineComponent, useContext } from '@nuxtjs/composition-api'

import { SnsType } from '@lxgic/enums'

import { useSnsButton } from '~/hooks'

import { IUseSnsButton } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

import SnsButton from '~/components/SnsButton'

export default defineComponent({
  name: 'EditProfileSnsAccounts',
  components: {
    SnsButton,
  },
  setup() {
    const { i18n }: any = useContext()

    const { buttons, add }: IUseSnsButton = useSnsButton()

    Array.prototype.forEach.call(
      [
        SnsType.BLOG,
        SnsType.INSTAGRAM,
        SnsType.TWITTER,
        SnsType.YOUTUBE,
        SnsType.FACEBOOK,
      ],
      (type: SnsType) => add(type, {
        text:
            type !== SnsType.BLOG ? i18n.t(`EDIT_PROFILE.BUTTON.${type}`) : '',
        connected: type !== SnsType.INSTAGRAM && type !== SnsType.BLOG,
      }),
    )

    return {
      buttons,
      lightRed: colors.lightRed,
    }
  },
})
