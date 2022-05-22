import {
  computed,
  ComputedRef,
  defineComponent,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'

import { ContactUsPattern } from '@lxgic/enums'

import { useBannerBlock, useBreadcrumbs, useContactUs } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs, IUseContactUs } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

const MyPageSidebar = () => import('~/components/MyPageSidebar')
const ContactUsRefundPattern = () => import('~/components/ContactUsRefundPattern')
const ContactUsPersonalIdPattern = () => import('~/components/ContactUsPersonalIdPattern')

export default defineComponent({
  components: {
    MyPageSidebar,
    ContactUsRefundPattern,
    ContactUsPersonalIdPattern,
  },
  layout: 'default/index',
  setup() {
    const { i18n }: any = useContext()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const { state, addPattern }: IUseContactUs = useContactUs()

    Object.entries(ContactUsPattern).forEach(([key, value]) => {
      addPattern({
        text: i18n.t(`CONTACT_US.PATTERN.${key}`),
        value,
      })
    })

    const patternComponent: ComputedRef<string> = computed<string>(() => {
      switch (state.pattern) {
        case ContactUsPattern.REFUND:
          return 'ContactUsRefundPattern'
        case ContactUsPattern.PERSONAL_ID:
          return 'ContactUsPersonalIdPattern'
        default:
          return ''
      }
    })

    return {
      ...toRefs(state),
      patternComponent,
      lightBlack: colors.lightBlack,
    }
  },
})
