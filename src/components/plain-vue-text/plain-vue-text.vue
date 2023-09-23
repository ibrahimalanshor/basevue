<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  name: 'PlainVueText',
  props: {
    text: String,
    baseClass: String,
    color: {
      type: String,
      default: 'gray',
    },
    colorClass: {
      type: Object as PropType<Record<string | 'gray', string>>,
      default: () => ({
        gray: '',
      }),
    },
  },
});
</script>

<template>
  <p :class="[baseClass, colorClass[color]]">
    <slot>{{ text }}</slot>
  </p>
</template>
