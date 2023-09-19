<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlainVueText',
  props: {
    text: String,
    baseClass: String,
  },
});
</script>

<template>
  <p :class="[baseClass]">
    <slot>{{ text }}</slot>
  </p>
</template>
