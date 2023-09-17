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
  },
});
</script>

<template>
  <h1 :class="[classes.base]">
    <slot>{{ text }}</slot>
  </h1>
</template>
