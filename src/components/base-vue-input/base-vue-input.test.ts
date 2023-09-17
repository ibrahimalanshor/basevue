import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BaseVueInput from './base-vue-input.vue';

describe.only('input component', () => {
  // element
  test('should render input element', () => {
    const wrapper = mount(BaseVueInput);

    expect(wrapper.find('input').exists()).toBe(true);
  });

  // base class
  test('should have default base class', () => {
    const wrapper = mount(BaseVueInput);

    expect(wrapper.props('baseClass')).toBeUndefined();
  });
  test('should have base class from props', () => {
    const wrapper = mount(BaseVueInput, {
      props: {
        baseClass: 'p-4 border',
      },
    });

    expect(wrapper.classes('p-4')).toBe(true);
    expect(wrapper.classes('border')).toBe(true);
  });
});
