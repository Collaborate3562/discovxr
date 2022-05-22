import {
  defineComponent,
  toRef,
  toRefs,
  useContext,
  watch,
} from '@nuxtjs/composition-api'

import { useSnackbar, useUploadFile } from '@lxgic/hooks'

import { IFileDetails, IUseSnackbar, IUseUploadFile } from '@lxgic/interfaces'

import { FileExtension, ToastColor } from '@lxgic/enums'

import { useEditProfile } from '~/hooks'

import colors from '~/assets/scss/colors.scss'

export default defineComponent({
  name: 'EditProfile',
  setup(_, { refs }: any) {
    const { i18n }: any = useContext()

    const { $open }: IUseSnackbar = useSnackbar()

    const { state } = useEditProfile()

    const {
      state: avatarState,
      setAcceptTypes,
      onChangeHandler,
      onDeleteHandler,
    }: IUseUploadFile = useUploadFile()

    setAcceptTypes([FileExtension.JPEG, FileExtension.JPG, FileExtension.PNG])

    watch(
      () => avatarState.files,
      ([file]: IFileDetails[]) => {
        state.avatar = file || {
          src: '/images/non-avatar.jpg',
          file: null,
        }
      },
      { deep: true, immediate: true },
    )

    const onChange = (value: any) => {
      try {
        onChangeHandler(value)
      } catch (e) {
        return $open(ToastColor.ERROR, i18n.t('SNACKBAR.INVALID_FILE_TYPE'))
      }
    }
    const onUpload = (): any => refs.fileUploader.$refs.input.click()

    return {
      ...toRefs(state),
      files: toRef(avatarState, 'files'),
      acceptTypes: toRef(avatarState, 'acceptTypes'),
      onUpload,
      onChange,
      onDeleteHandler,
      lightBlack: colors.lightBlack,
    }
  },
})
