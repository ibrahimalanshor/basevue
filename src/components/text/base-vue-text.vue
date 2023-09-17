<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueText',
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
  <p :class="[classes.base]">
    <slot>{{ text }}</slot>
  </p>
</template>
