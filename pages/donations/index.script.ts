/* eslint-disable no-return-assign */

import {
  defineComponent, ref, Ref, toRef,
} from '@nuxtjs/composition-api'

import { usePagination } from '@lxgic/hooks'

import { IUsePagination } from '@lxgic/interfaces'

import { useBannerBlock, useBreadcrumbs } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import colors from '~/assets/scss/colors.scss'

import DonationPageFilter from '~/components/DonationPageFilter'

const DonatoinGroupCard = () => import('~/components/DonationGroupCard')

export default defineComponent({
  components: {
    DonationPageFilter,
    DonatoinGroupCard,
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
        image: `/images/donations/${id + 1}.png`,
        title: `Charles Harris leads the team with 7 years crowdfunding dd
        raising nearly $2 million dollars USD with support from
        over 50,000 crowdfunding backers worldwide! See his asd`,
        amount: '¥100,000',
        donatedCount: 23,
        groupName: 'Lxgic Inc.',
      }))
    }, 1000)

    return {
      page: toRef(page, 'value'),
      lightRed: colors.lightRed,
      items,
    }
  },
})
