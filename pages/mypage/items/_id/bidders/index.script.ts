import {
  computed,
  ComputedRef,
  defineComponent,
  reactive,
  toRef,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'

import { useCheckboxes } from '@lxgic/hooks'

import { IUseCheckboxes } from '@lxgic/interfaces'

import {
  useBannerBlock,
  useBreadcrumbs,
  useRejectModal,
  useShoppers,
} from '~/hooks'

import { IUseBannerBlock, IUseShoppers, IUseBreadcrumbs } from '~/interfaces'

import { Shopper } from '~/enums'

import colors from '~/assets/scss/colors.scss'

const MyPageSidebar = () => import('~/components/MyPageSidebar')
const MyPageActionDropdown = () => import('~/components/MyPageActionDropdown')
const ShopperCard = () => import('~/components/ShopperCard')
const RejectModal = () => import('~/components/RejectModal')

export default defineComponent({
  components: {
    MyPageSidebar,
    MyPageActionDropdown,
    ShopperCard,
    RejectModal,
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
    }: IUseShoppers = useShoppers()

    // TODO: will be remove (only for design)
    Array.prototype.forEach.call(
      [Shopper.BIDDERS, Shopper.HISTORY],
      (key: Shopper) => setTab(key, i18n.tc('BIDDERS.TABS', key)),
    )

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
      setTotalCount(Shopper.BIDDERS, 35)
      setTotalCount(Shopper.HISTORY, 56)
      setTabItems(
        Shopper.BIDDERS,
        Array.from({ length: 15 }, (_, id: number) => ({
          id: id + 1,
          username: 'Bidder username',
          timestamp: '2019-12-21 10:35:24',
          price: '¥400,000,000',
          rating: 3.5,
        })),
      )
      setTabItems(
        Shopper.HISTORY,
        Array.from({ length: 15 }, (_, id: number) => ({
          id: id + 1,
          username: 'Bidder username',
          timestamp: '2019-12-21 10:35:24',
          price: '¥400,000,000',
          rating: 3.5,
        })),
      )

      createCheckboxData()
    }, 1000)
    createCheckboxData()

    const { isOpen } = useRejectModal()

    return {
      ...toRefs(state),
      ...toRefs(checkboxData),
      isOpen: toRef(isOpen, 'value'),
      items,
      lightRed: colors.lightRed,
    }
  },
})
