<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PlainVueDropdown',
  props: {
    wrapperClass: String,
    contentClass: String,
    programatic: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    const programaticVisible = computed({
      get() {
        return props.visible;
      },
      set(value) {
        emit('update:visible', value);
      },
    });
    const localVisible = ref(false);

    function handleToggle() {
      programaticVisible.value = !programaticVisible.value;
      localVisible.value = !localVisible.value;
    }

    return { programaticVisible, localVisible, handleToggle };
  },
});
</script>

<template>
  <div :class="[wrapperClass]">
    <slot name="toggle" :toggle="handleToggle" />
    <div
      v-if="programatic ? programaticVisible : localVisible"
      :class="[contentClass]"
    >
      <slot name="content" />
    </div>
  </div>
</template>
