<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueList',
  props: {
    wrapperClass: String,
    items: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<template>
  <div :class="wrapperClass"></div>
</template>
