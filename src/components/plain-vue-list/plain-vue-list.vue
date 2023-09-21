<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';
import { ListItem } from './plain-vue-list.interface';

export default defineComponent({
  name: 'PlainVueList',
  props: {
    wrapperClass: String,
    itemClass: String,
    activeClass: String,
    inactiveClass: String,
    items: {
      type: Array as PropType<string[] | ListItem[]>,
      default: () => [],
    },
    modelValue: null,
  },
  emits: ['click-item', 'update:modelValue'],
  setup(props, { emit }) {
    const active = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:modelValue', value);
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
          :class="[
            itemClass,
            checkIsActive(item) ? activeClass : inactiveClass,
          ]"
          v-on:click="handleClickItem(item)"
        >
          {{ typeof item === 'object' ? item.name : item }}
        </li>
      </slot>
    </template>
    <slot name="append-item" />
  </ul>
</template>
