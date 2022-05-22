import {
  defineComponent, ref, Ref, watch,
} from '@nuxtjs/composition-api'

export default defineComponent<{ colors: string[] }>({
  name: 'ColorSelection',
  props: {
    colors: {
      type: Array,
      default: () => [],
    },
  },
  setup(_, { emit }: any) {
    const active: Ref<string> = ref('')

    watch(active, (value: string) => emit('input', value))

    return {
      active,
    }
  },
})
