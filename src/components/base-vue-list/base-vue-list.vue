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
  emits: ['click-item'],
  setup(props, { emit }) {
    function handleClickItem(item: string | ListItem) {
      emit('click-item', item);
    }

    return { handleClickItem };
  },
});
</script>

<template>
  <ul :class="wrapperClass">
    <slot v-if="!items.length" name="empty" />
    <template
      v-for="item in items"
      :key="typeof item === 'object' ? item.id : item"
    >
      <slot name="item" :item="item">
        <li :class="itemClass" v-on:click="handleClickItem(item)">
          {{ typeof item === 'object' ? item.name : item }}
        </li>
      </slot>
    </template>
  </ul>
</template>
