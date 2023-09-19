<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueButton',
  props: {
    text: String,
    baseClass: String,
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      in: ['button', 'submit', 'reset'],
      default: 'button',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'default',
    },
    colorClass: {
      type: Object as PropType<Record<string | 'default', string>>,
      default: () => ({
        default: '',
      }),
    },
    size: {
      type: String,
      default: 'md',
    },
    sizeClass: {
      type: Object as PropType<Record<string | 'md', string>>,
      default: () => ({
        md: '',
      }),
    },
    fullwidth: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fullwidthClass: String,
    loadingClass: String,
  },
});
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      baseClass,
      colorClass[color],
      sizeClass[size],
      fullwidth && fullwidthClass,
      loading && loadingClass,
    ]"
  >
    <slot>{{ text }}</slot>
    <slot v-if="loading" name="loading" />
  </button>
</template>
