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
  },
});
</script>

<template>
  <input :type="type" :class="baseClass" />
</template>
