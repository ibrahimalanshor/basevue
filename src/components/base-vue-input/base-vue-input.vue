<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueInput',
  props: {
    baseClass: String,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['clear'],
  setup({}, { emit }) {
    function handleClear() {
      emit('clear');
    }

    return { handleClear };
  },
});
</script>

<template>
  <input
    :type="type"
    :class="baseClass"
    :placeholder="placeholder"
    :disabled="disabled"
  />
  <slot name="clear" :clear="handleClear" />
  <slot name="loading" />
</template>
