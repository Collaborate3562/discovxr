import {
  computed,
  ComputedRef,
  defineComponent,
  reactive,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'

import { useCheckboxes } from '@lxgic/hooks'

import { IUseCheckboxes } from '@lxgic/interfaces'

import { useBannerBlock, useBreadcrumbs, useShoppers } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs, IUseShoppers } from '~/interfaces'

import { Shopper } from '~/enums'

import colors from '~/assets/scss/colors.scss'

const MyPageSidebar = () => import('~/components/MyPageSidebar')
const MyPageActionDropdown = () => import('~/components/MyPageActionDropdown')
const ShopperCard = () => import('~/components/ShopperCard')

export default defineComponent({
  components: {
    MyPageSidebar,
    MyPageActionDropdown,
    ShopperCard,
  },
  layout: 'default/index',
  setup() {
    const { i18n }: any = useContext()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const {
      state,
      setTab,
      getItems,
      setTabItems,
      setTotalCount,
      setActiveTab,
    }: IUseShoppers = useShoppers()

    // TODO: will be remove (only for design)
    setTab(Shopper.BUYERS, i18n.t('BUYERS.TABS'))
    setActiveTab(Shopper.BUYERS)

    const items: ComputedRef<any[]> = computed<any[]>(() => getItems(state.tab))

    const checkboxData: any = reactive({
      checkboxState: null,
      setToggle: () => {},
    })
    const createCheckboxData = () => {
      const { checkboxState, setToggle }: IUseCheckboxes = useCheckboxes(
        items.value,
      )

      checkboxData.checkboxState = checkboxState
      checkboxData.setToggle = setToggle
    }
    setTimeout(() => {
      setTotalCount(Shopper.BUYERS, 30)
      setTabItems(
        Shopper.BUYERS,
        Array.from({ length: 15 }, (_, id: number) => ({
          id: id + 1,
          username: 'Buyer username',
          timestamp: '2019-12-21 10:35:24',
          price: '¥400,000,000',
          rating: 3.5,
        })),
      )

      createCheckboxData()
    }, 1000)
    createCheckboxData()

    return {
      ...toRefs(state),
      ...toRefs(checkboxData),
      items,
      lightRed: colors.lightRed,
    }
  },
})
