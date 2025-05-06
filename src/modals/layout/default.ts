import { defineComponent, h, resolveComponent } from "vue";
import { useCurrentModal } from "@vmrh/core";

export default defineComponent({
  setup(props, { slots }) {
    const { modelValue } = useCurrentModal()

    const dialog = resolveComponent('ElDialog')

    return () => h(dialog, {
      modelValue: modelValue.value,
      'onUpdate:modelValue': (value: boolean) => modelValue.value = value,
      width: '100%',
      class: 'max-w-600px !w-100%',
      ...props,
    }, slots)
  },
})
