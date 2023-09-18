<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueTitle',
  props: {
    text: String,
    baseClass: String,
    levelClass: {
      type: Object as PropType<Record<number, string>>,
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
      type: Object as PropType<Record<string, string>>,
      default: () => ({
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
