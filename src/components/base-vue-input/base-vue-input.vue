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
</template>
