/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */

import { computed, ComputedRef, reactive } from '@nuxtjs/composition-api'

import { FileExtension, PersonalIdentification } from '@lxgic/enums'

const state: any = reactive({
  isVerified: false,
  identificationType: '',
  helpItems: [],
  identificationItems: [],
})

const accept: FileExtension[] = [
  FileExtension.PNG,
  FileExtension.JPEG,
  FileExtension.JPG,
]

export function usePersonalIdentification() {
  const setIsVerified = (value: boolean) => (state.isVerified = value)
  const setHelpItems = (items: any[]) => (state.helpItems = items)
  const setIdentificationType = (type: PersonalIdentification) => (state.identificationType = type)
  const setIdentificationItems = (items: any[]) => (state.identificationItems = items)

  const src: ComputedRef<string> = computed<string>(() => {
    switch (state.identificationType) {
      case PersonalIdentification.PASSPORT:
        return '/images/passport.png'
      case PersonalIdentification.DRIVING_LISENCE:
        return '/images/driving-lisence.png'
      default:
        return ''
    }
  })

  return {
    state,
    accept,
    src,
    setIsVerified,
    setHelpItems,
    setIdentificationItems,
    setIdentificationType,
  }
}
