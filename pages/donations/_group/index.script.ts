import {
  computed,
  ComputedRef,
  defineComponent,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'

import { useBannerBlock, useBreadcrumbs, useDonationTabs } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import { DonationTab } from '~/enums'

import colors from '~/assets/scss/colors.scss'

import DonationDetailBlock from '~/components/DonationDetailBlock'

const DonatoinGroupCard = () => import('~/components/DonationGroupCard')
const ActivityReportCard = () => import('~/components/ActivityReportCard')

const InstagramSnsIcon = () => import('~/assets/svg/Sns/instagramIcon.svg?inline')
const TwitterSnsIcon = () => import('~/assets/svg/Sns/twitterIcon.svg?inline')
const FacebookSnsIcon = () => import('~/assets/svg/Sns/facebookIcon.svg?inline')
const YoutubeSnsIcon = () => import('~/assets/svg/Sns/youtubeIcon.svg?inline')
const BlogSnsIcon = () => import('~/assets/svg/Sns/blogIcon.svg?inline')

export default defineComponent({
  components: {
    DonationDetailBlock,
    DonatoinGroupCard,
    ActivityReportCard,
    InstagramSnsIcon,
    TwitterSnsIcon,
    FacebookSnsIcon,
    YoutubeSnsIcon,
    BlogSnsIcon,
  },
  layout: 'default/index',
  setup() {
    const { i18n }: any = useContext()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const {
      state, setTab, setTabItems, getItems,
    } = useDonationTabs()

    Array.prototype.forEach.call(
      [DonationTab.PROJECTS, DonationTab.ACTIVITY_REPORTS],
      (key: DonationTab) => setTab(key, i18n.tc('DONATION.TABS', key)),
    )

    const isActivityReports: ComputedRef<boolean> = computed<boolean>(
      () => state.tab === DonationTab.ACTIVITY_REPORTS,
    )

    // TODO: will be remove (only for design)
    const donationGroup: any = {
      image: '/images/donations/1.png',
      groupName: 'Donation Group Name',
      sns: ['INSTAGRAM', 'TWITTER', 'YOUTUBE', 'FACEBOOK', 'BLOG'],
      url: 'https://expaus.in',
      tags: Array.from({ length: 11 }, (_, i: number) => (i % 2 ? 'Fashion' : 'Entertainment')),
      tweets: Array(4).fill('tweet'),
      description:
        'Introduction message introduction message introduction message introduc tion message introduction message introduction message introduction mes i introduction message introduction message introduction message introdu introduction message introduction message introduction message introduc A introduction message introduction message introduction message introd S introduction message introduction message introduction message introd',
    }
    setTimeout(() => {
      setTabItems(
        DonationTab.PROJECTS,
        Array.from({ length: 8 }, (_, id: number) => ({
          id: id + 1,
          image: `/images/donations/${id + 1}.png`,
          title:
            'Charles Harris leads the team with 7 years crowdfunding dd raising nearly $2 million dollars USD with support from over 50,000 crowdfunding backers worldwide! See his asd',
          amount: '¥100,000',
          donatedCount: 23,
          groupName: 'Lxgic Inc.',
        })),
      )
    }, 1000)
    setTimeout(() => {
      setTabItems(
        DonationTab.ACTIVITY_REPORTS,
        Array.from({ length: 6 }, (_, id: number) => ({
          id: id + 1,
          image: '/images/donations/1.png',
          title:
            'Activity report title activity rep ort title activity report ctivity re',
          timestamp: '2020/01/04 20:01',
          description:
            'Activity report title activity report title activity report ctivity report title ctivity report title activity report title ctivity report title ctivity report title ctivity report title ctivity report title ctivity report title ctivity report title I ctivity report title ctivity report title',
        })),
      )
    }, 1500)

    return {
      ...toRefs(state),
      lightRed: colors.lightRed,
      getItems,
      donationGroup,
      isActivityReports,
    }
  },
})
