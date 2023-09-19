<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';
import { ListItem } from './base-vue-list.interface';

export default defineComponent({
  name: 'BaseVueList',
  props: {
    wrapperClass: String,
    itemClass: String,
    activeClass: String,
    items: {
      type: Array as PropType<string[] | ListItem[]>,
      default: () => [],
    },
    modelValue: null,
  },
  emits: ['click-item', 'update:modelvalue'],
  setup(props, { emit }) {
    const active = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:modelvalue', value);
      },
    });

    function checkIsActive(item: string | ListItem): boolean {
      return active.value === (typeof item === 'object' ? item.id : item);
    }

    function handleClickItem(item: string | ListItem) {
      active.value = item;

      emit('click-item', item);
    }

    return { active, checkIsActive, handleClickItem };
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
        <li
          :class="[itemClass, checkIsActive(item) && activeClass]"
          v-on:click="handleClickItem(item)"
        >
          {{ typeof item === 'object' ? item.name : item }}
        </li>
      </slot>
    </template>
  </ul>
</template>
