import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BaseVueList from './base-vue-list.vue';

describe.only('list component', () => {
  // element
  test('should render ul component', () => {
    const wrapper = mount(BaseVueList);

    expect(wrapper.find('ul').exists()).toBe(true);
  });

  // wrapper
  test('should have default wrapper class', () => {
    const wrapper = mount(BaseVueList);

    expect(wrapper.props('wrapperClass')).toBeUndefined();
  });
  test('should have wrapper class', () => {
    const wrapper = mount(BaseVueList, {
      props: {
        wrapperClass: 'p-4 space-y-2',
      },
    });

    expect(wrapper.classes('p-4')).toBe(true);
    expect(wrapper.classes('space-y-2')).toBe(true);
  });

  // items
  test('should have default items', () => {
    const wrapper = mount(BaseVueList);

    expect(wrapper.props('items')).toEqual([]);
  });
  test('should render item', () => {
    const items = ['item 1', 'item 2', 'item 3'];
    const wrapper = mount(BaseVueList, {
      props: {
        items,
      },
    });

    const wrapperItems = wrapper.findAll('li');

    expect(wrapperItems).toHaveLength(items.length);

    wrapperItems.forEach((item, index) => {
      expect(item.text()).toEqual(items[index]);
    });
  });
  test('should have default item class', () => {
    const wrapper = mount(BaseVueList);

    expect(wrapper.props('itemClass')).toBeUndefined();
  });
  test('should have default item class', () => {
    const wrapper = mount(BaseVueList, {
      props: {
        items: ['item'],
        itemClass: 'p-4',
      },
    });

    expect(wrapper.find('li').classes('p-4')).toBe(true);
  });
});
