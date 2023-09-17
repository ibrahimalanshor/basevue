<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: String,
    classes: {
      type: Object,
      default: () => ({
        base: '',
      }),
    },
    level: {
      type: Number,
      in: [1, 2, 3, 4, 5, 6],
      default: 1,
    },
  },
});
</script>

<template>
  <h1 :class="[classes.base]">
    <slot>{{ text }}</slot>
  </h1>
</template>
