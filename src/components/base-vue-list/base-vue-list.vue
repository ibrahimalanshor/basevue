<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { ListItem } from './base-vue-list.interface';

export default defineComponent({
  name: 'BaseVueList',
  props: {
    wrapperClass: String,
    itemClass: String,
    items: {
      type: Array as PropType<string[] | ListItem[]>,
      default: () => [],
    },
  },
});
</script>

<template>
  <ul :class="wrapperClass">
    <template
      v-for="item in items"
      :key="typeof item === 'object' ? item.name : item"
    >
      <li :class="itemClass">
        {{ typeof item === 'object' ? item.name : item }}
      </li>
    </template>
  </ul>
</template>
