import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BaseVueChekbox from './base-vue-checkbox.vue';

describe.only('checkbox test', () => {
  // wrapper
  test('should have wrapper element', () => {
    const wrapper = mount(BaseVueChekbox);

    expect(wrapper.find('div').exists()).toBe(true);
  });
  test('should have default wrapper class', () => {
    const wrapper = mount(BaseVueChekbox);

    expect(wrapper.props('wrapperClass')).toBeUndefined();
  });
  test('should have wrapper class', () => {
    const wrapper = mount(BaseVueChekbox, {
      props: {
        wrapperClass: 'flex relative',
      },
    });

    expect(wrapper.find('div').classes('flex')).toBe(true);
    expect(wrapper.find('div').classes('relative')).toBe(true);
  });
});
