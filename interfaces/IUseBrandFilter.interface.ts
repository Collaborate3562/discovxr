/* eslint-disable no-unused-vars */

import { ComputedRef } from '@nuxtjs/composition-api'

import { IBrandFilterState } from '~/interfaces'

export interface IUseBrandFilter {
  state: IBrandFilterState
  icon: ComputedRef<string>
  transition: ComputedRef<string>
  toggleShow(): boolean
}
