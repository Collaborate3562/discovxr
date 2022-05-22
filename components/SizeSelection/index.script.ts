import {
  defineComponent, ref, Ref, watch,
} from '@nuxtjs/composition-api'

export default defineComponent<{ sizes: string[] }>({
  name: 'SizeSelection',
  props: {
    sizes: {
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
