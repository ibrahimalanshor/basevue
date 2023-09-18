<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueCheckbox',
  props: {
    wrapperClass: String,
    checkboxClass: String,
  },
});
</script>

<template>
  <div :class="wrapperClass">
    <input type="checkbox" :class="checkboxClass" />
  </div>
</template>
