import { FooterList } from '~/enums'

import { TStringOrNull } from '~/types'

interface IListItem {
  title: string
  items: any[]
}

export interface IFooterState {
  banner: TStringOrNull
  list: Map<FooterList, IListItem>
}
