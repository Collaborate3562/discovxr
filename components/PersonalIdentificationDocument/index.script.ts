import {
  defineComponent,
  onMounted,
  toRef,
  useContext,
} from '@nuxtjs/composition-api'

import { PersonalIdentification } from '@lxgic/enums'

import { usePersonalIdentification } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'PersonalIdentificationDocument',
  setup() {
    const { i18n }: any = useContext()

    const {
      src,
      state,
      accept,
      setIdentificationItems,
      setIdentificationType,
    } = usePersonalIdentification()

    setIdentificationItems(
      Object.entries(PersonalIdentification).map(([key, value]) => ({
        text: i18n.t(`PERSONAL_IDENTIFICATION.DOCUMENT.${key}`),
        value,
      })),
    )

    onMounted(() => setIdentificationType(PersonalIdentification.DRIVING_LISENCE))

    return {
      src,
      accept,
      lightRed: colors.lightRed,
      items: toRef(state, 'identificationItems'),
      identificationType: toRef(state, 'identificationType'),
    }
  },
})
