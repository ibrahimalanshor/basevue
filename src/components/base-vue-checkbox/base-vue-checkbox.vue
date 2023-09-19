<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueCheckbox',
  props: {
    wrapperClass: String,
    checkboxClass: String,
    labelClass: String,
    label: String,
    id: String,
    modelValue: null,
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

    function handleChange(e) {
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
      v-model="checked"
      v-on:change="handleChange"
    />
    <label :for="id" :class="labelClass">{{ label }}</label>
  </div>
</template>
