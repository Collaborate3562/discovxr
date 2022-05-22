import {
  computed,
  ComputedRef,
  defineComponent,
  toRef,
  useContext,
  useRouter,
} from '@nuxtjs/composition-api'

import { useDealTypeIcon } from '@lxgic/hooks'

import { DealType, Status } from '@lxgic/enums'

import { useMessenger } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

import ShoppingIcon from '~/assets/svg/DealType/shoppingIcon.svg?inline'
import AuctionIcon from '~/assets/svg/DealType/auctionIcon.svg?inline'
import RaffleIcon from '~/assets/svg/DealType/raffleIcon.svg?inline'

interface IInboxCardProps {
  inbox: string
  status: Status
  dealType: DealType
  image: string
  username: string
  title: string
  lastMessage: string
  timestamp: string
}

export default defineComponent<IInboxCardProps>({
  name: 'InboxCard',
  components: {
    ShoppingIcon,
    AuctionIcon,
    RaffleIcon,
  },
  props: {
    inbox: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: '',
    },
    dealType: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '/images/empty.png',
    },
    username: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    lastMessage: {
      type: String,
      default: '',
    },
    timestamp: {
      type: String,
      default: '',
    },
  },
  setup({
    status, dealType, inbox, username, title,
  }: IInboxCardProps) {
    const $router: any = useRouter()
    const { localePath }: any = useContext()

    const dealTypeIcon: any = useDealTypeIcon(dealType)

    const button: ComputedRef<any> = computed(() => {
      switch (status) {
        case Status.MAKE_PAYMENT:
          return {
            text: 'INBOX.MAKE_PAYMENT',
            color: colors.lightPurple,
          }
        case Status.REPORT_RECEIVED:
          return {
            text: 'INBOX.REPORT_RECEIVED',
            color: colors.lightPurple,
          }
        case Status.REVIEW:
          return {
            text: 'INBOX.REVIEW',
            color: colors.lightPurple,
          }
        case Status.WAITING_SHIPMENT:
          return {
            text: 'INBOX.WAITING_SHIPMENT',
            color: colors.darkYellow,
          }
        case Status.COMPLETE:
          return {
            text: 'INBOX.COMPLETE',
            color: 'black',
          }
        default:
          return null
      }
    })

    const { setDetails } = useMessenger()

    const onClickHandler = () => {
      switch (status) {
        case Status.REVIEW:
          // TODO: add user id instead of random id
          return $router.push(
            localePath(`/u/${Math.floor(Math.random() * 1000)}/rating`),
          )
        default:
          setDetails({
            username,
            title,
            dealType,
          })

          return $router.push(localePath(`/mypage/inbox/${inbox}`))
      }
    }

    return {
      dealTypeIcon: toRef(dealTypeIcon, 'value'),
      button,
      onClickHandler,
    }
  },
})
