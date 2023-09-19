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
  },
});
</script>

<template>
  <button :type="type" :class="baseClass">
    <slot>{{ text }}</slot>
    <slot v-if="loading" name="loading" />
  </button>
</template>
