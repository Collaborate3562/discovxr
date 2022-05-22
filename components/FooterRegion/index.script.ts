import { defineComponent, toRefs, useContext } from '@nuxtjs/composition-api'

import { useRegionAndLanguage } from '@lxgic/hooks'

import { IUseRegionAndLanguage } from '@lxgic/interfaces'

import { Language, Region } from '@lxgic/enums'

import { useFooter } from '~/hooks'

import { IUseFooter } from '~/interfaces'

export default defineComponent({
  name: 'FooterRegion',
  setup() {
    const { i18n }: any = useContext()

    const { state: footerState }: IUseFooter = useFooter()

    const {
      state,
      setLanguageItems,
      setRegionItems,
    }: IUseRegionAndLanguage = useRegionAndLanguage()

    setLanguageItems([
      {
        text: i18n.t('LANGUAGES.ENGLISH'),
        value: Language.ENGLISH,
      },
      {
        text: i18n.t('LANGUAGES.JAPANESE'),
        value: Language.JAPANESE,
      },
    ])

    setRegionItems([
      {
        text: i18n.t('REGIONS.USA'),
        value: Region.USA,
      },
      {
        text: i18n.t('REGIONS.JAPAN'),
        value: Region.JAPAN,
      },
    ])

    return {
      ...toRefs(state),
      list: footerState.list,
    }
  },
})
