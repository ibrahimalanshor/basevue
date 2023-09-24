<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PlainVueDropdown',
  props: {
    wrapperClass: String,
    contentClass: String,
  },
  setup() {
    const visible = ref(false);

    function handleToggle() {
      visible.value = !visible.value;
    }

    return { visible, handleToggle };
  },
});
</script>

<template>
  <div :class="[wrapperClass]">
    <slot name="toggle" :toggle="handleToggle" />
    <div v-if="visible" :class="[contentClass]">
      <slot name="content" />
    </div>
  </div>
</template>
