import { VueWrapper, mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import PlainVueList from './plain-vue-list.vue';
import { h } from 'vue';

describe('list component', () => {
  // element
  test('should render ul component', () => {
    const wrapper = mount(PlainVueList);

    expect(wrapper.find('ul').exists()).toBe(true);
  });

  // wrapper
  test('should have default wrapper class', () => {
    const wrapper = mount(PlainVueList);

    expect(wrapper.props('wrapperClass')).toBeUndefined();
  });
  test('should have wrapper class', () => {
    const wrapper = mount(PlainVueList, {
      props: {
        wrapperClass: 'p-4 space-y-2',
      },
    });

    expect(wrapper.classes('p-4')).toBe(true);
    expect(wrapper.classes('space-y-2')).toBe(true);
  });

  // items
  test('should have default items', () => {
    const wrapper = mount(PlainVueList);

    expect(wrapper.props('items')).toEqual([]);
  });
  test('should render item', () => {
    const items = ['item 1', 'item 2', 'item 3'];
    const wrapper = mount(PlainVueList, {
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
    const wrapper = mount(PlainVueList, {
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
    const wrapper = mount(PlainVueList);

    expect(wrapper.props('itemClass')).toBeUndefined();
  });
  test('should have default item class', () => {
    const wrapper = mount(PlainVueList, {
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
    const wrapper = mount(PlainVueList, {
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
    const wrapper = mount(PlainVueList, {
      props: { items },
      slots: {
        item: (props: { item: string }) => h('a', { href: '#' }, props.item),
      },
    });

    const itemA = wrapper.findAll('a');

    expect(itemA).toHaveLength(2);
    expect(itemA.map((item) => item.text())).toEqual(items);
  });

  // empty
  test('should render empty slot when item empty', async () => {
    const wrapper = mount(PlainVueList, {
      slots: {
        empty: () => h('p', 'Empty'),
      },
    });

    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('p').text()).toEqual('Empty');

    await wrapper.setProps({
      items: ['item 1', 'item 2'],
    });

    expect(wrapper.find('p').exists()).toBe(false);
  });

  // active
  test('should have default active', () => {
    const wrapper = mount(PlainVueList);

    expect(wrapper.props('acticeClass')).toBeUndefined();
    expect(wrapper.props('inacticeClass')).toBeUndefined();
    expect(wrapper.props('modelValue')).toBeUndefined();
  });
  test('should active item when modelvalue change', async () => {
    const wrapper = mount(PlainVueList, {
      props: {
        items: ['item 1', 'item 2'],
        activeClass: 'active',
        inactiveClass: 'inactive',
      },
    });

    expect(wrapper.find('li.active').exists()).toBe(false);
    expect(wrapper.findAll('li.inactive')).toHaveLength(2);

    await wrapper.setProps({ modelValue: 'item 2' });

    expect(wrapper.find('li.active').exists()).toBe(true);
    expect(wrapper.find('li.active').text()).toBe('item 2');
    expect(wrapper.findAll('li.inactive')).toHaveLength(1);
  });
  test('should change modelvalue when item clicked', async () => {
    const wrapper: VueWrapper = mount(PlainVueList, {
      props: {
        items: ['item 1', 'item 2'],
        activeClass: 'active',
        inactiveClass: 'inactive',
        modelValue: 'item 2',
        'onUpdate:modelValue': (value) =>
          wrapper.setProps({ modelValue: value }),
      },
    });

    expect(wrapper.find('li').classes('active')).toBe(false);
    expect(wrapper.findAll('li.inactive')).toHaveLength(1);

    await wrapper.find('li').trigger('click');

    expect(wrapper.find('li.active').text()).toBe('item 1');
  });
});
