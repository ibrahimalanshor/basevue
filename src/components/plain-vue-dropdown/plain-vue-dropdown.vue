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
    active: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:active'],
  setup(props, { emit }) {
    const programaticVisible = computed({
      get() {
        return props.active;
      },
      set(value) {
        emit('update:active', value);
      },
    });
    const visible = ref(false);

    function handleToggle() {
      programaticVisible.value = !programaticVisible.value;
      visible.value = !visible.value;
    }

    return { programaticVisible, visible, handleToggle };
  },
});
</script>

<template>
  <div :class="[wrapperClass]">
    <slot name="toggle" :toggle="handleToggle" />
    <div
      v-if="programatic ? programaticVisible : visible"
      :class="[contentClass]"
    >
      <slot name="content" />
    </div>
  </div>
</template>
