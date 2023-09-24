<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'PlainVueInput',
  props: {
    wrapperClass: String,
    inputClass: String,
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false,
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
    modelValue: {
      type: null,
      default: null,
    },
  },
  emits: ['clear', 'update:modelValue', 'focus', 'focusout'],
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:modelValue', value);
      },
    });

    function handleClear() {
      emit('clear');
    }
    function handleFocus() {
      emit('focus');
    }
    function handleFocusOut() {
      emit('focusout');
    }

    return { value, handleClear, handleFocus, handleFocusOut };
  },
});
</script>

<template>
  <div :class="wrapperClass">
    <input
      ref="input"
      :type="type"
      :class="[inputClass, colorClass[color]]"
      :placeholder="placeholder"
      :disabled="disabled"
      v-model="value"
      v-on:focus="handleFocus"
      v-on:focusout="handleFocusOut"
    />
    <slot name="right-content">
      <slot name="clear" :clear="handleClear" />
      <slot name="loading" />
    </slot>
  </div>
</template>
