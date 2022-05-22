import {
  computed,
  ComputedRef,
  defineComponent,
  useContext,
} from '@nuxtjs/composition-api'

import { useHeaderNavigation } from '~/hooks'

import { HeaderNavigation } from '~/enums'

import { TStringOrNull } from '~/types'

import { IUseHeaderNavigation } from '~/interfaces'

export default defineComponent({
  name: 'MobileHeaderNavigationBlock',
  setup() {
    const { $vuetify }: any = useContext()

    const width: ComputedRef<TStringOrNull> = computed<TStringOrNull>(
      // TODO: with auth condition
      () => (!$vuetify.breakpoint.xsOnly ? 'calc(100vw - 180px)' : null),
    )

    const { state, setMobileList }: IUseHeaderNavigation = useHeaderNavigation()

    setMobileList(
      Object.values(HeaderNavigation).map((item: string, idx: number) => {
        const [key, route] = item.split('|')

        return {
          text: `HEADER.${key}`,
          route: route || '/',
          exact: !idx,
        }
      }),
    )

    return {
      list: state.mobileList,
      width,
    }
  },
})
