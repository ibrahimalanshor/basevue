<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueInput',
  props: {
    wrapperClass: String,
    inputClass: String,
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
  <div :class="wrapperClass">
    <input
      :type="type"
      :class="inputClass"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <slot name="right-content">
      <slot name="clear" :clear="handleClear" />
      <slot name="loading" />
    </slot>
  </div>
</template>
