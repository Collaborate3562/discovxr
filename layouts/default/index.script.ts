import {
  defineComponent,
  toRef,
  useContext,
  useRoute,
  watch,
} from '@nuxtjs/composition-api'

import { useBreadcrumbs, useDealPageFilter } from '~/hooks'

import { IUseBreadcrumbs } from '~/interfaces'

import TheFooter from '~/components/TheFooter'
import TheHeader from '~/components/TheHeader'
import BannerBlock from '~/components/BannerBlock'
import BreadcrumbsBlock from '~/components/BreadcrumbsBlock'
import ItemDetailHeaderBlock from '~/components/ItemDetailHeaderBlock'
import DealPageFilter from '~/components/DealPageFilter'

const MobileNavigationDrawer = () => import('~/components/MobileNavigationDrawer')

export default defineComponent({
  components: {
    TheFooter,
    TheHeader,
    BannerBlock,
    BreadcrumbsBlock,
    ItemDetailHeaderBlock,
    DealPageFilter,
    MobileNavigationDrawer,
  },
  setup() {
    const { i18n }: any = useContext()

    const $route: any = useRoute()

    const { setItems }: IUseBreadcrumbs = useBreadcrumbs()

    setItems($route.value.fullPath, i18n)
    watch(
      () => $route.value.fullPath,
      (fullPath: string) => setItems(fullPath, i18n),
    )

    const { state } = useDealPageFilter()

    return {
      isDealFilterVisible: toRef(state, 'isVisible'),
    }
  },
})
