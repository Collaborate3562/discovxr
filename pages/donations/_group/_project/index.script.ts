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

import ImageCarousel from '~/components/ImageCarousel'

const DonatoinGroupCard = () => import('~/components/DonationGroupCard')
const ActivityReportCard = () => import('~/components/ActivityReportCard')

const InstagramSnsIcon = () => import('~/assets/svg/Sns/instagramIcon.svg?inline')
const TwitterSnsIcon = () => import('~/assets/svg/Sns/twitterIcon.svg?inline')
const FacebookSnsIcon = () => import('~/assets/svg/Sns/facebookIcon.svg?inline')
const YoutubeSnsIcon = () => import('~/assets/svg/Sns/youtubeIcon.svg?inline')
const BlogSnsIcon = () => import('~/assets/svg/Sns/blogIcon.svg?inline')

export default defineComponent({
  components: {
    ImageCarousel,
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
      [DonationTab.DETAIL, DonationTab.ACTIVITY_REPORTS],
      (key: DonationTab) => setTab(key, i18n.tc('DONATION.TABS', key)),
    )

    const isActivityReports: ComputedRef<boolean> = computed<boolean>(
      () => state.tab === DonationTab.ACTIVITY_REPORTS,
    )

    // TODO: will be remove (only for design)
    const donationProject: any = {
      images: Array(7).fill('/images/donations/1.png'),
      image: '/images/donations/1.png',
      companyName: 'Company name',
      sns: ['INSTAGRAM', 'TWITTER', 'YOUTUBE', 'FACEBOOK', 'BLOG'],
      tags: Array.from({ length: 4 }, (_, i: number) => (i % 2 ? 'Fashion' : 'Entertainment')),
      tweets: Array(4).fill('tweet'),
      title:
        'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Tit',
    }
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
      donationProject,
      isActivityReports,
    }
  },
})
