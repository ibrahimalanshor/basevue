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
  },
});
</script>

<template>
  <input :type="type" :class="baseClass" :placeholder="placeholder" />
</template>
