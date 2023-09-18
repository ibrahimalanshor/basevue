<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueCheckbox',
  props: {
    wrapperClass: String,
  },
});
</script>

<template>
  <div :class="wrapperClass">
    <input type="checkbox" />
  </div>
</template>
