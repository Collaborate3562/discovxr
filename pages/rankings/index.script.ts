import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'

import { SnsType } from '@lxgic/enums'

import { useBannerBlock, useBreadcrumbs } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import RankingDetailHeader from '~/components/RankingDetailHeader'

const RankingBlockCard = () => import('~/components/RankingBlockCard')
const RankingListCard = () => import('~/components/RankingListCard')

export default defineComponent({
  components: {
    RankingDetailHeader,
    RankingBlockCard,
    RankingListCard,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    // TODO: will be remove (only for design)
    const influencers: Ref<any[]> = ref<any[]>([])
    const contributors: Ref<any[]> = ref<any[]>([])
    setTimeout(() => {
      influencers.value = Array.from({ length: 10 }, (_, id: number) => ({
        id: id + 1,
        rankLevel: id + 1,
        username: 'David Ramsay',
        snsDetails: [
          {
            type: SnsType.INSTAGRAM,
            count: '10K',
          },
          {
            type: SnsType.TWITTER,
            count: '250K',
          },
        ],
        deals: '50000',
        donation: '¥ 25,000,000',
      }))
    }, 1500)
    setTimeout(() => {
      contributors.value = Array.from({ length: 10 }, (_, id: number) => ({
        id: id + 1,
        rankLevel: id + 1,
        username: 'David Ramsay',
        purchase: '50,000',
        donation: '¥ 25,000,000',
        contribution: '¥ 25,000,000',
      }))
    }, 2000)

    return {
      influencers,
      contributors,
    }
  },
})
