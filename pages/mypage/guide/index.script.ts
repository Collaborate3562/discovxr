import { defineComponent, toRefs } from '@nuxtjs/composition-api'

import { CategoryLevel } from '@lxgic/enums'

import { useBannerBlock, useBreadcrumbs, useGuide } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

import GuideCard from '~/components/GuideCard'

const MyPageSidebar = () => import('~/components/MyPageSidebar')

export default defineComponent({
  components: {
    GuideCard,
    MyPageSidebar,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const {
      state, setBeginners, setFaq, setCategories,
    } = useGuide()

    // TODO: will be change
    setBeginners(
      Array.from({ length: 6 }, () => ({
        text: 'Article added from admin dashboard',
        route: '#',
      })),
    )
    setFaq(
      Array.from({ length: 6 }, () => ({
        text: 'Article added from admin dashboard',
        route: '#',
      })),
    )
    setCategories(
      Array.from({ length: 6 }, (_, i: number) => ({
        level: CategoryLevel.BIG,
        text: 'Category added from admin dashboard',
        route: `${i + 1}`,
        children: !i
          ? null
          : [
            {
              level: CategoryLevel.MIDDLE,
              text: 'Current balance',
              route: '1',
              children: Array.from({ length: 3 }, (__, idx: number) => ({
                level: CategoryLevel.SMALL,
                text: `Small Category-${i + 1} ${idx + 1}`,
                count: 16,
              })),
            },
            {
              level: CategoryLevel.MIDDLE,
              text: 'Balance history',
              route: '2',
              children: Array.from({ length: 3 }, (__, idx: number) => ({
                level: CategoryLevel.SMALL,
                text: `Small Category-${i + 1} ${idx + 1}`,
                count: 16,
              })),
            },
            {
              level: CategoryLevel.MIDDLE,
              text: 'Sales history',
              route: '3',
              children: Array.from({ length: 3 }, (__, idx: number) => ({
                level: CategoryLevel.SMALL,
                text: `Small Category-${i + 1} ${idx + 1}`,
                count: 16,
              })),
            },
            {
              level: CategoryLevel.MIDDLE,
              text: 'Sales history',
              route: '4',
              children: Array.from({ length: 3 }, (__, idx: number) => ({
                level: CategoryLevel.SMALL,
                text: `Small Category-${i + 1} ${idx + 1}`,
                count: 16,
              })),
            },
            {
              level: CategoryLevel.MIDDLE,
              text: 'Current balance',
              route: '5',
            },
          ],
      })),
    )

    return {
      ...toRefs(state),
    }
  },
})
