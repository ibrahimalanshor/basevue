<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueText',
  props: {
    text: String,
  },
});
</script>

<template>
  <p>
    <slot>{{ text }}</slot>
  </p>
</template>
