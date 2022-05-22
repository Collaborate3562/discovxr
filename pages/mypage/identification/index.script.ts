import { defineComponent, toRef, useContext } from '@nuxtjs/composition-api'

import { PersonalIdentificationHelpLink } from '~/enums'

import {
  useBannerBlock,
  useBreadcrumbs,
  usePersonalIdentification,
} from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

import PersonalIdentification from '~/components/PersonalIdentification'
import PersonalIdentificationAddress from '~/components/PersonalIdentificationAddress'
import PersonalIdentificationDocument from '~/components/PersonalIdentificationDocument'

const MyPageSidebar = () => import('~/components/MyPageSidebar')

export default defineComponent({
  components: {
    PersonalIdentificationDocument,
    PersonalIdentificationAddress,
    PersonalIdentification,
    MyPageSidebar,
  },
  layout: 'default/index',
  setup() {
    const { i18n }: any = useContext()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const { state, setHelpItems, setIsVerified } = usePersonalIdentification()

    setHelpItems(
      Object.entries(PersonalIdentificationHelpLink).map(([key, route]) => ({
        text: i18n.t(`PERSONAL_IDENTIFICATION.HELP.${key}`),
        route,
      })),
    )

    return {
      helpItems: toRef(state, 'helpItems'),
      lightBlack: colors.lightBlack,
      setIsVerified,
    }
  },
})
