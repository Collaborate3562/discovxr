import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'

import { useCheckboxes } from '@lxgic/hooks'

import { IUseCheckboxes } from '@lxgic/interfaces'

import { DealType, Status } from '@lxgic/enums'

import { useBannerBlock, useBreadcrumbs, useMyDeals } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

const MyPageSidebar = () => import('~/components/MyPageSidebar')
const MyPageActionDropdown = () => import('~/components/MyPageActionDropdown')
const MyPageDealCard = () => import('~/components/MyPageDealCard')

export default defineComponent({
  components: {
    MyPageSidebar,
    MyPageActionDropdown,
    MyPageDealCard,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const { state, setItems } = useMyDeals()

    // TODO: will be remove (only for design)
    const checkboxData: any = reactive({
      checkboxState: null,
      setToggle: () => {},
    })
    const createCheckboxData = () => {
      const { checkboxState, setToggle }: IUseCheckboxes = useCheckboxes(
        state.items,
      )

      checkboxData.checkboxState = checkboxState
      checkboxData.setToggle = setToggle
    }
    setTimeout(() => {
      setItems([
        {
          id: 1,
          title: 'Item title',
          timestamp: '15:40',
          dealType: DealType.AUCTION,
          image: '/images/item-image.png',
        },
        {
          id: 2,
          title:
            'Item title Item title Item title Item title Item title Item title Item title Item titl Item title Item title Item title Item title',
          timestamp: '1 day ago',
          status: Status.ON_DEAL,
          dealType: DealType.RAFFLE,
          image: '/images/item-image.png',
        },
        {
          id: 3,
          title: 'Item title Item title Item title Item title Item title',
          timestamp: '7 days ago',
          status: Status.SOLD,
          dealType: DealType.SHOPPING,
          image: '/images/item-image.png',
        },
        ...Array.from({ length: 7 }, (_, id: number) => ({
          id: id + 4,
          title:
            id % 3
              ? 'Item title Item title Item title Item title Item title Item title Item title Item titl Item title Item title Item title Item title'
              : 'Item title Item title Item title Item title Item title',
          timestamp: '2019-09-15',
          dealType: DealType.AUCTION,
          image: '/images/item-image.png',
        })),
      ])

      createCheckboxData()
    }, 2000)
    createCheckboxData()

    return {
      ...toRefs(state),
      ...toRefs(checkboxData),
      lightRed: colors.lightRed,
    }
  },
})
