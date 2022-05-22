import {
  computed,
  ComputedRef,
  defineComponent,
  onMounted,
  onUnmounted,
  toRef,
  useContext,
  watch,
} from '@nuxtjs/composition-api'

import { useDealTypeIcon } from '@lxgic/hooks'

import { useBannerBlock, useBreadcrumbs, useMessenger } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import { MessageType } from '~/enums'

import colors from '~/assets/scss/colors.scss'

import ShoppingIcon from '~/assets/svg/DealType/shoppingIcon.svg?inline'
import AuctionIcon from '~/assets/svg/DealType/auctionIcon.svg?inline'
import RaffleIcon from '~/assets/svg/DealType/raffleIcon.svg?inline'

const MyPageSidebar = () => import('~/components/MyPageSidebar')
const MessengerTextMessage = () => import('~/components/MessengerTextMessage')

export default defineComponent({
  components: {
    MyPageSidebar,
    MessengerTextMessage,
    ShoppingIcon,
    AuctionIcon,
    RaffleIcon,
  },
  layout: 'default/index',
  setup(_, { refs, root }: any) {
    const { $vuetify }: any = useContext()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const {
      state,
      setMessageValue,
      setMessages,
      addMessage,
      setDetails,
      setFullSize,
    } = useMessenger()

    // TODO: will be change (only for design)
    if (!state.details) {
      setDetails({
        username: 'Visitor 1',
        title: 'Item title',
        dealType: 'AUCTION',
      })
    }

    const dealTypeIcon: any = useDealTypeIcon(state.details?.dealType)
    const avatar: ComputedRef<string> = computed<string>(
      () => state.details?.avatar || '/images/non-avatar.jpg',
    )
    const username: ComputedRef<string> = computed<string>(
      () => state.details?.username || '',
    )
    const title: ComputedRef<string> = computed<string>(
      () => state.details?.title || '',
    )

    // TODO: will be remove (only for design)
    setTimeout(() => {
      setMessages([
        {
          id: 1,
          type: MessageType.TEXT,
          message:
            'Message text message text Message text message text Message text message text Message text message text dddl Message text message text11 Message text message tex',
          timestamp: '2019/12/24 10:53',
          isMe: false,
        },
        ...Array.from({ length: 4 }, (__, id: number) => ({
          id: id + 2,
          type: MessageType.TEXT,
          message: 'Message text message text Message text message?',
          timestamp: '2019/12/24 10:53',
          isMe: !!id,
        })),
      ])
    }, 2000)

    const scrollToEnd = () => {
      root.$nextTick(() => refs.chatBox?.$el?.scroll({
        top: refs.chatBox.$el.scrollHeight,
        behavior: 'smooth',
      }))
    }

    const onSendMessage = () => {
      if (!state.message) {
        return false
      }

      addMessage({
        id: state.messages.length + 1,
        type: MessageType.TEXT,
        message: state.message,
        timestamp: '2019/12/24 10:53',
        isMe: true,
      })

      setMessageValue()
      scrollToEnd()

      // TODO: will be remove (only for design)
      setTimeout(() => {
        addMessage({
          id: state.messages.length + 1,
          type: MessageType.TEXT,
          message:
            (state.messages.length + 1) % 3
              ? 'Message text message text Message text message text Message text message text Message text message text dddl Message text message text11 Message text message tex'
              : 'Message text message text Message text message?',
          timestamp: '2019/12/24 10:53',
          isMe: false,
        })
        scrollToEnd()
      }, 500)
    }

    const transitionMode: ComputedRef<string> = computed<string>(
      () => `v-scroll-${state.isFullSize ? 'x' : 'y'}-transition`,
    )

    const maxHeight: ComputedRef<any> = computed(() => (state.isFullSize
      ? `calc(100vh - ${$vuetify.breakpoint.xsOnly ? 200 : 150}px)`
      : 468))

    onMounted(() => {
      watch(
        () => state.isFullSize,
        (value: boolean) => document.children[0].classList[value ? 'add' : 'remove'](
          'overflow-y-hidden',
        ),
      )
    })

    onUnmounted(() => setFullSize(false))

    return {
      isFullSize: toRef(state, 'isFullSize'),
      items: toRef(state, 'messages'),
      message: toRef(state, 'message'),
      dealTypeIcon: toRef(dealTypeIcon, 'value'),
      title,
      avatar,
      username,
      transitionMode,
      color: colors.lightPurple,
      onSendMessage,
      setFullSize,
      maxHeight,
    }
  },
})
