import { defineComponent } from '@nuxtjs/composition-api'

import { useRegionAndLanguage } from '@lxgic/hooks'

import { IUseRegionAndLanguage } from '@lxgic/interfaces'

import { Region } from '@lxgic/enums'

import { AuthFooterButton } from '~/enums'

export default defineComponent({
  name: 'AuthFooter',
  setup() {
    const { setRegion }: IUseRegionAndLanguage = useRegionAndLanguage()

    const buttons: any[] = Object.entries(AuthFooterButton).map(
      ([key, value]) => ({
        text: `AUTH_FOOTER.${key}`,
        value,
      }),
    )

    const onButtonHandler = (action: AuthFooterButton) => {
      // TODO: handler logic
      console.group('Auth footer button')
      console.log('Action: ', action)
      console.groupEnd()

      switch (action) {
        case AuthFooterButton.JAPAN:
          return setRegion(Region.JAPAN)
        default:
      }
    }

    return { buttons, onButtonHandler }
  },
})
