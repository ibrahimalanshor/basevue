<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'PlainVueCheckbox',
  props: {
    wrapperClass: String,
    checkboxClass: String,
    labelClass: String,
    label: String,
    id: String,
    modelValue: null,
    value: null,
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const checked = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:modelValue', value);
      },
    });

    function handleChange(e: Event) {
      emit('change', e);
    }

    return { checked, handleChange };
  },
});
</script>

<template>
  <div :class="wrapperClass">
    <input
      :id="id"
      type="checkbox"
      :class="checkboxClass"
      :value="value"
      v-model="checked"
      v-on:change="handleChange"
    />
    <label :for="id" :class="labelClass">{{ label }}</label>
  </div>
</template>
