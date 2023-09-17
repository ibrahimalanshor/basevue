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
    level: {
      type: Number,
      in: [1, 2, 3, 4, 5, 6],
      default: 1,
    },
  },
});
</script>

<template>
  <component :is="`h${level}`" :class="[baseClass, levelClass[level]]">
    <slot>{{ text }}</slot>
  </component>
</template>
