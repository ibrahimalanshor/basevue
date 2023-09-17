<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: String,
    baseClass: String,
    levelClass: {
      type: Object,
      default: () => ({
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
      }),
    },
    centerClass: String,
    level: {
      type: Number,
      in: [1, 2, 3, 4, 5, 6],
      default: 1,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <component
    :is="`h${level}`"
    :class="[baseClass, levelClass[level], center ? centerClass : null]"
  >
    <slot>{{ text }}</slot>
  </component>
</template>
