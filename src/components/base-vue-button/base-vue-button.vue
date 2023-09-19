<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueButton',
  props: {
    text: String,
    baseClass: String,
  },
});
</script>

<template>
  <button :class="baseClass">
    <slot>{{ text }}</slot>
  </button>
</template>
