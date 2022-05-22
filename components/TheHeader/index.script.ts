import {
  defineComponent,
  ref,
  Ref,
  useContext,
  useRouter,
  watch,
} from '@nuxtjs/composition-api'

import { isSequence } from '@lxgic/utils'

import { useBadge } from '@lxgic/hooks'

import { SidebarLink } from '~/enums'

import { useSearchFilter, useNavigationSidebar } from '~/hooks'

import { IUseSearchFilter } from '~/interfaces'

const HeaderAuthButton = () => import('~/components/HeaderAuthButton')
const HeaderUserBlock = () => import('~/components/HeaderUserBlock')
const MobileHeaderNavigationBlock = () => import('~/components/MobileHeaderNavigationBlock')
const DesktopHeaderNavigationBlock = () => import('~/components/DesktopHeaderNavigationBlock')

export default defineComponent({
  name: 'TheHeader',
  components: {
    HeaderAuthButton,
    HeaderUserBlock,
    MobileHeaderNavigationBlock,
    DesktopHeaderNavigationBlock,
  },
  setup(_, { refs }: any) {
    const generateKey: any = isSequence()

    const { i18n, $vuetify, localePath }: any = useContext()

    const $router: any = useRouter()

    const {
      state: searchState,
      setIsVisible,
      searchHandler,
      ...rest
    }: IUseSearchFilter = useSearchFilter()

    watch(
      () => $vuetify.breakpoint.xsOnly,
      (value) => setIsVisible(!value),
    )

    const onSearchHandler = () => {
      try {
        searchHandler()

        $router.push(localePath('/search'))
      } catch (e) {}
    }

    const isSticky: Ref<boolean> = ref<boolean>(false)

    const onScrollHandler = (event: any) => {
      isSticky.value = event.target.scrollingElement.scrollTop > refs.header.offsetHeight
    }

    const { open, setList } = useNavigationSidebar()

    const getSidebarItem = (route: SidebarLink) => ({
      ...useBadge(),
      text: i18n.t(`SIDEBAR.${SidebarLink[route]}`),
      route,
    })

    setList(
      generateKey.next().value,
      null,
      [
        SidebarLink.PROFILE,
        SidebarLink.EDIT_PROFILE,
        SidebarLink.NOTIFICATION,
        SidebarLink.LIKED_ITEMS,
        SidebarLink.COMMENTED_ITEMS,
        SidebarLink.RECENTLY_VIEWED,
        SidebarLink.PURCHASED_ITEMS,
        SidebarLink.MESSAGES,
      ].map(getSidebarItem),
    )
    setList(
      generateKey.next().value,
      i18n.t('SIDEBAR.TITLES.DEALS'),
      [
        SidebarLink.CREATE_DEALS_SELL,
        SidebarLink.DRAFT_ITEMS,
        SidebarLink.SOLD_ITEMS,
        SidebarLink.CHECK_ITEMS,
      ].map(getSidebarItem),
    )
    setList(
      generateKey.next().value,
      i18n.t('SIDEBAR.TITLES.PAYMENT'),
      [SidebarLink.BALANCE, SidebarLink.POINTS, SidebarLink.COUPONS].map(
        getSidebarItem,
      ),
    )
    setList(
      generateKey.next().value,
      i18n.t('SIDEBAR.TITLES.SETTINGS'),
      [
        SidebarLink.SHIPMENT,
        SidebarLink.PAYMENT_METHOD,
        SidebarLink.LOGIN_SETTINGS,
        SidebarLink.PERSONAL_IDENTIFICATION,
        SidebarLink.PHONE_VERIFY,
      ].map(getSidebarItem),
    )
    setList(
      generateKey.next().value,
      i18n.t('SIDEBAR.TITLES.OTHER'),
      [
        SidebarLink.CONTACT_US,
        SidebarLink.GUIDE,
        SidebarLink.BEGINNERS,
        SidebarLink.LOGOUT,
      ].map(getSidebarItem),
    )

    return {
      ...rest,
      isSticky,
      searchState,
      open,
      setIsVisible,
      onScrollHandler,
      onSearchHandler,
    }
  },
})
