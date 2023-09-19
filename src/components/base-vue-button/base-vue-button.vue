<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueButton',
  props: {
    text: String,
  },
});
</script>

<template>
  <button>
    <slot>{{ text }}</slot>
  </button>
</template>
