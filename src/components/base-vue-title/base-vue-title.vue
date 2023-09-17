<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: String,
  },
});
</script>

<template>
  <h1>
    <slot>{{ text }}</slot>
  </h1>
</template>
