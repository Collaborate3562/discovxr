import { defineComponent, ref } from '@nuxtjs/composition-api'

import { CategoryLevel } from '@lxgic/enums'

import { useBannerBlock, useBreadcrumbs } from '~/hooks'

import { IUseBannerBlock, IUseBreadcrumbs } from '~/interfaces'

const CategoryLevelList = () => import('~/components/CategoryLevelList')

export default defineComponent({
  components: {
    CategoryLevelList,
  },
  layout: 'default/index',
  setup() {
    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    // TODO: will be remove (only for design)
    const items: any = ref([])
    setTimeout(() => {
      items.value = Array.from({ length: 8 }, (_, i: number) => ({
        level: CategoryLevel.BIG,
        text: `Big Category ${i + 1}`,
        route: `categories/${i + 1}`,
        children: !i
          ? null
          : Array.from({ length: 5 }, (__, idx: number) => ({
            level: CategoryLevel.MIDDLE,
            text: `Mid Category-${i + 1} ${idx + 1}`,
            route: `categories/${idx + 1}`,
            children: !idx
              ? null
              : Array.from({ length: 3 }, (___, index: number) => ({
                level: CategoryLevel.SMALL,
                text: `Small Category-${idx + 1} ${index + 1}`,
                route: `categories/${index + 1}`,
              })),
          })),
      }))
    }, 1000)

    return { items }
  },
})
