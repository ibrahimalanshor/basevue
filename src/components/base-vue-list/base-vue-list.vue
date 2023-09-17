<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseVueList',
  props: {
    wrapperClass: String,
  },
});
</script>

<template>
  <div :class="wrapperClass"></div>
</template>
