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

  // checkbox
  test('should have checkbox element', () => {
    const wrapper = mount(BaseVueChekbox);

    expect(wrapper.find('input[type=checkbox]').exists()).toBe(true);
  });
  test('should have unchecked default', () => {
    const wrapper = mount(BaseVueChekbox);
    const checkbox = wrapper.find('input[type=checkbox]');

    expect(checkbox.attributes('checked')).toBeUndefined();
  });
  test('should have default checkbox class', () => {
    const wrapper = mount(BaseVueChekbox);

    expect(wrapper.props('inputClass')).toBeUndefined();
  });
  test('should have checkbox class', () => {
    const wrapper = mount(BaseVueChekbox, {
      props: {
        checkboxClass: 'h-4 border',
      },
    });

    expect(wrapper.find('input[type=checkbox]').classes('h-4')).toBe(true);
    expect(wrapper.find('input[type=checkbox]').classes('border')).toBe(true);
  });
});
