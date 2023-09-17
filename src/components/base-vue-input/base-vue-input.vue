<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueInput',
  props: {
    baseClass: String,
  },
});
</script>

<template>
  <input type="text" :class="baseClass" />
</template>
