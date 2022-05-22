/* eslint-disable import/prefer-default-export */

import { reactive, ref, Ref } from '@nuxtjs/composition-api'

import { SnsType } from '@lxgic/enums'

import { TStringOrNull } from '~/types'

export function useSnsDetails(snsDetails: any[]) {
  const sns: Map<SnsType, Ref<any>> = reactive<Map<SnsType, Ref<any>>>(
    new Map(),
  )

  const getSnsIcon = (type: SnsType): TStringOrNull => {
    switch (type) {
      case SnsType.INSTAGRAM:
        return 'InstagramIcon'
      case SnsType.TWITTER:
        return 'TwitterIcon'
      default:
        return null
    }
  }

  snsDetails.forEach(({ type, ...rest }: any) => sns.set(
    type,
    ref({
      ...rest,
      icon: getSnsIcon(type),
    }),
  ))

  return { sns }
}
