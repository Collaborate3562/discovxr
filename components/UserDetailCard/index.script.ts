import { defineComponent, useContext, useRouter } from '@nuxtjs/composition-api'

import { ProfileDetail, UserFans } from '~/enums'

import { useUserFans } from '~/hooks'

interface IUserDetailCardProps {
  id: string
  username: string
  avatar: string
  details: Map<ProfileDetail, any>
}

export default defineComponent<IUserDetailCardProps>({
  name: 'UserDetailCard',
  props: {
    id: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      default: '',
    },
    details: {
      type: Map,
      default: null,
    },
  },
  setup({ id }: IUserDetailCardProps) {
    const { localePath }: any = useContext()
    const $router: any = useRouter()

    const getRoute = (type: ProfileDetail) => {
      switch (type) {
        case ProfileDetail.FOLLOWERS:
        case ProfileDetail.FOLLOWINGS:
          return `/u/${id}/fans`
        default:
          return null
      }
    }

    const { setActiveTab } = useUserFans()

    const clickHandler = (type: ProfileDetail) => {
      switch (type) {
        case ProfileDetail.FOLLOWERS:
        case ProfileDetail.FOLLOWINGS:
          setActiveTab(UserFans[type] as any)
          break
        default:
      }

      $router.push(localePath(getRoute(type)))
    }

    return {
      getRoute,
      clickHandler,
    }
  },
})
