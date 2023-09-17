<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueTitle',
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
    weightClass: {
      type: Object,
      default: () => ({
        normal: '',
        medium: '',
        semibold: '',
        bold: '',
      }),
    },
    level: {
      type: Number,
      in: [1, 2, 3, 4, 5, 6],
      default: 1,
    },
    center: {
      type: Boolean,
      default: false,
    },
    weight: {
      type: String,
      default: 'bold',
    },
  },
});
</script>

<template>
  <component
    :is="`h${level}`"
    :class="[
      baseClass,
      levelClass[level],
      center && centerClass,
      weightClass[weight],
    ]"
  >
    <slot>{{ text }}</slot>
  </component>
</template>
