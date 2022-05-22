import {
  computed,
  ComputedRef,
  defineComponent,
  useContext,
} from '@nuxtjs/composition-api'

import colors from '~/assets/scss/colors.scss'

import {
  useBannerBlock,
  useBreadcrumbs,
  useCannotPostModal,
  useHomePage,
} from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import { TNumberOrNull } from '~/types'

import ShareIcon from '~/assets/svg/shareIcon.svg?inline'

const CannotPostModal = () => import('~/components/CannotPostModal')
const ProductCard = () => import('~/components/ProductCard')
const HomeRoundedSectionCard = () => import('~/components/HomeRoundedSectionCard')

export default defineComponent({
  components: {
    ShareIcon,
    ProductCard,
    CannotPostModal,
    HomeRoundedSectionCard,
  },
  layout: 'default/index',
  setup() {
    const { $vuetify }: any = useContext()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(true)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(false)

    const iconSize: ComputedRef<number> = computed<number>(
      () => ($vuetify.breakpoint.xsOnly ? 25 : 40),
    )

    const buttonSize: ComputedRef<TNumberOrNull> = computed<TNumberOrNull>(
      () => ($vuetify.breakpoint.xsOnly ? null : 100),
    )

    const { modal } = useCannotPostModal()

    const actionHandler = () => {
      // TODO: change page
      modal.open()
    }

    return {
      ...useHomePage(),
      modal,
      iconSize,
      buttonSize,
      actionHandler,
      lightRed: colors.lightRed,
    }
  },
})
