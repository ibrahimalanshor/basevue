<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueCheckbox',
  props: {
    wrapperClass: String,
    checkboxClass: String,
    labelClass: String,
    label: String,
    id: String,
  },
});
</script>

<template>
  <div :class="wrapperClass">
    <input :id="id" type="checkbox" :class="checkboxClass" />
    <label :for="id" :class="labelClass">{{ label }}</label>
  </div>
</template>
