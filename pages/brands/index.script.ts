/* eslint-disable no-return-assign */

import {
  defineComponent,
  ref,
  toRefs,
  useContext,
  watch,
} from '@nuxtjs/composition-api'

import { LanguageASCII } from '~/enums'

import {
  useASCIILetters,
  useBannerBlock,
  useBrandFilter,
  useBreadcrumbs,
} from '~/hooks'

import {
  IUseASCIILetters,
  IUseBannerBlock,
  IUseBrandFilter,
  IUseBreadcrumbs,
} from '~/interfaces'

const BrandRow = () => import('~/components/BrandRow')

export default defineComponent({
  components: {
    BrandRow,
  },
  layout: 'default/index',
  setup(_, { root }: any) {
    const { $vuetify }: any = useContext()

    const { setIsVisible: setBannerVisibility }: IUseBannerBlock = useBannerBlock()
    setBannerVisibility(false)

    const { setIsVisible }: IUseBreadcrumbs = useBreadcrumbs()
    setIsVisible(true)

    const { state: filterState, ...restFilter }: IUseBrandFilter = useBrandFilter()
    watch(
      () => $vuetify.breakpoint.smAndDown,
      (value: boolean) => (filterState.show = !value),
      { immediate: true },
    )

    const { setASCIILanguage, getLetter, ...restLetter }: IUseASCIILetters = useASCIILetters()
    // TODO: language watcher
    setASCIILanguage(LanguageASCII.ENGLISH)

    // TODO: will be remove (only for design)
    const items: any = ref([
      {
        name: 'abc',
        description: 'abcdf',
        detail: 'abcdefghi',
      },
      {
        name: 'bc',
        description: 'bcdf',
        detail: 'bcdefghi',
      },
    ])

    const scrollTo = (charCode: number) => {
      const { offsetHeight } = root.$children[2].$children[0].$children[0].$refs.header

      $vuetify.goTo(`.scroll-hesh-${getLetter(charCode)}`, {
        offset: offsetHeight + 20,
      })
    }

    return {
      ...toRefs(filterState),
      ...restFilter,
      ...restLetter,
      getLetter,
      scrollTo,
      items,
    }
  },
})
