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
  <ul :class="wrapperClass">
    <template v-for="item in items" :key="item">
      <li>{{ item }}</li>
    </template>
  </ul>
</template>
