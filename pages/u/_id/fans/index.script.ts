import {
  defineComponent,
  toRefs,
  useContext,
  useRoute,
} from '@nuxtjs/composition-api'

import { EmotionType, SnsType } from '@lxgic/enums'

import { ProfileDetail, UserFans } from '~/enums'

import {
  useBannerBlock,
  useBreadcrumbs,
  useUserDetail,
  useUserFans,
} from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import UserDetailCard from '~/components/UserDetailCard'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  components: {
    UserDetailCard,
  },
  layout: 'default/index',
  setup() {
    const { i18n }: any = useContext()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    // TODO: will be change (only for design)

    const {
      state, setAvatar, setUsername, addDetail, setUserId,
    } = useUserDetail()

    const $route: any = useRoute()

    setUserId($route.value.params.id)
    setAvatar('/images/non-avatar.jpg')
    setUsername('David Ramsay')

    Array.prototype.forEach.call(
      [
        ProfileDetail.DEALS,
        ProfileDetail.FOLLOWERS,
        ProfileDetail.FOLLOWINGS,
        ProfileDetail.DONATIONS,
      ],
      (key) => addDetail(key, {
        text: i18n.t(`USER_FANS.${key}`),
        count: 0,
      }),
    )

    const {
      state: fansState,
      setTab,
      setNotificationCount,
      getItems,
      setTabItems,
    } = useUserFans()

    Array.prototype.forEach.call(
      [UserFans.FOLLOWERS, UserFans.FOLLOWINGS],
      (key: UserFans) => setTab(key, i18n.tc('USER_FANS.TABS', key)),
    )

    setTimeout(() => {
      setNotificationCount(UserFans.FOLLOWERS, 1)

      setTimeout(() => setNotificationCount(UserFans.FOLLOWERS, 2), 1000)

      setTabItems(UserFans.FOLLOWERS, [
        ...Array.from({ length: 4 }, (_, id: number) => ({
          id: id + 1,
          username: 'David Ramsay',
          introduction:
            'Introduction introduction introduction introduction introduction introduction introduction introduction introduction intl Introduction introduction introduction introduction Introduction introduction introduction introduction introduction int roduction introduction introduction introduction intlIntroduction introduction introduction introduction.',
          snsDetails: [
            {
              type: SnsType.INSTAGRAM,
              min: '10K',
              max: '15K',
            },
            {
              type: SnsType.TWITTER,
              min: '25K',
              max: '30K',
            },
          ],
          deals: 0,
          donations: 0,
          isFollow: false,
        })),
        ...Array.from({ length: 3 }, (_, id: number) => ({
          id: id + 5,
          username: 'David Ramsay',
          introduction:
            'Introduction introduction introduction introduction introduction introduction introduction introduction introduction intl Introduction introduction introduction introduction Introduction introduction introduction introduction introduction int roduction introduction introduction introduction intlIntroduction introduction introduction introduction.',
          deals: 0,
          donations: 0,
          rating: Array.prototype.map.call(
            [
              EmotionType.VERY_GOOD,
              EmotionType.GOOD,
              EmotionType.NORMAL,
              EmotionType.BAD,
              EmotionType.VERY_BAD,
            ],
            (type: EmotionType) => ({
              type,
              count: 105,
            }),
          ),
          isFollow: true,
        })),
      ])
    }, 1000)

    return {
      ...toRefs(state),
      ...toRefs(fansState),
      getItems,
      lightRed: colors.lightRed,
    }
  },
})
