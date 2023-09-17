import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BaseVueList from './base-vue-list.vue';
import { h } from 'vue';

describe('list component', () => {
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
    expect(wrapperItems.map((item) => item.text())).toEqual(items);
  });
  test('should render object item', () => {
    const items = [
      { id: 1, name: 'item 1' },
      { id: 2, name: 'item 2' },
      { id: 3, name: 'item 3' },
    ];
    const wrapper = mount(BaseVueList, {
      props: {
        items,
      },
    });

    const wrapperItems = wrapper.findAll('li');

    expect(wrapperItems).toHaveLength(items.length);
    expect(wrapperItems.map((item) => item.text())).toEqual(
      items.map((item) => item.name),
    );
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

  // event
  test('should emit on click event with item detail', async () => {
    const items = ['item 1', 'item 2'];
    const wrapper = mount(BaseVueList, {
      props: {
        items,
      },
    });

    for (const itemEl of wrapper.findAll('li')) {
      await itemEl.trigger('click');
    }

    const emitted = wrapper.emitted();

    expect(emitted['click-item']).toHaveLength(2);
    expect(emitted['click-item']).toEqual(items.map((item) => [item]));
  });

  // item slot
  test('should render item using item slot', () => {
    const items = ['item 1', 'item 2'];
    const wrapper = mount(BaseVueList, {
      props: { items },
      slots: {
        item: (props: { item: string }) => h('a', { href: '#' }, props.item),
      },
    });

    const itemA = wrapper.findAll('a');

    expect(itemA).toHaveLength(2);
    expect(itemA.map((item) => item.text())).toEqual(items);
  });
});
