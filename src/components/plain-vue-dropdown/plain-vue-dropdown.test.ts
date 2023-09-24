import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import PlainVueDropdown from './plain-vue-dropdown.vue';
import { h } from 'vue';

describe.only('dropdown component', () => {
  // wrapper
  test('should have wrapper element', () => {
    const wrapper = mount(PlainVueDropdown);

    expect(wrapper.find('div').exists()).toBe(true);
  });
  test('should have wrapper class', async () => {
    const wrapper = mount(PlainVueDropdown);

    expect(wrapper.props('wrapperClass')).toBeUndefined();

    await wrapper.setProps({
      wrapperClass: 'p-4',
    });

    expect(wrapper.props('wrapperClass')).toEqual('p-4');
    expect(wrapper.find('div').classes('p-4')).toBe(true);
  });

  // toggle
  test('should render toggle slot', () => {
    const wrapper = mount(PlainVueDropdown, {
      slots: {
        toggle: () => h('button', 'Toggle'),
      },
    });

    expect(wrapper.find('button').exists()).toBe(true);
  });

  // content
  test('should render content element', async () => {
    const wrapper = mount(PlainVueDropdown, {
      slots: {
        content: () => h('p', 'Content'),
        toggle: ({ toggle }: { toggle: () => void }) =>
          h('button', { onClick: toggle }, 'Toggle'),
      },
    });

    expect(wrapper.find('p').exists()).toBe(false);

    await wrapper.find('button').trigger('click');

    expect(wrapper.find('p').exists()).toBe(true);
  });

  // content class
  test('should have content class', async () => {
    const wrapper = mount(PlainVueDropdown, {
      slots: {
        content: () => h('p', 'Content'),
        toggle: ({ toggle }: { toggle: () => void }) =>
          h('button', { onClick: toggle }, 'Toggle'),
      },
    });

    await wrapper.find('button').trigger('click');

    expect(wrapper.props('contentClass')).toBeUndefined();

    await wrapper.setProps({
      contentClass: 'p-4',
    });

    expect(wrapper.find('.p-4').exists()).toBe(true);
  });
});