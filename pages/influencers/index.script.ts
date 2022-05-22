import {
  defineComponent, ref, Ref, toRef,
} from '@nuxtjs/composition-api'

import { IUsePagination } from '@lxgic/interfaces'

import { usePagination } from '@lxgic/hooks'

import { SnsType } from '@lxgic/enums'

import { useBannerBlock, useBreadcrumbs } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import InfluencerPageFilter from '~/components/InfluencerPageFilter'

const InfluencerCard = () => import('~/components/InfluencerCard')

export default defineComponent({
  components: {
    InfluencerPageFilter,
    InfluencerCard,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const { page }: IUsePagination = usePagination()

    // TODO: will be remove (only for design)
    const items: Ref<any[]> = ref<any[]>([])
    setTimeout(() => {
      items.value = Array.from({ length: 20 }, (_, id: number) => ({
        id: id + 1,
        username: 'David Ramsay',
        snsDetails: [
          {
            type: SnsType.INSTAGRAM,
            count: '10K',
          },
          {
            type: SnsType.TWITTER,
            count: '25K',
          },
        ],
        sold: '50000',
        amount: '¥ 25,000,000',
      }))
    }, 1500)

    return {
      items,
      page: toRef(page, 'value'),
    }
  },
})
