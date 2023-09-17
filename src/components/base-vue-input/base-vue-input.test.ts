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

  // type
  test('should have default type', () => {
    const wrapper = mount(BaseVueInput);

    expect(wrapper.props('type')).toEqual('text');
    expect(wrapper.find('input').attributes('type')).toEqual('text');
  });
  test('should have type from props', async () => {
    const types = ['email', 'password'];
    const wrapper = mount(BaseVueInput);

    for (const type of types) {
      await wrapper.setProps({ type });

      expect(wrapper.props('type')).toEqual(type);
      expect(wrapper.find('input').attributes('type')).toEqual(type);
    }
  });

  // placeholder
  test('should have default placeholder', () => {
    const wrapper = mount(BaseVueInput);

    expect(wrapper.props('placeholder')).toBeUndefined();
    expect(wrapper.find('input').attributes('placeholder')).toBeUndefined();
  });
  test('should have placeholder from props', async () => {
    const wrapper = mount(BaseVueInput, {
      props: {
        placeholder: 'Something',
      },
    });

    expect(wrapper.props('placeholder')).toEqual('Something');
    expect(wrapper.find('input').attributes('placeholder')).toEqual(
      'Something',
    );
  });

  // disabled
  test('should have default disabled', () => {
    const wrapper = mount(BaseVueInput);

    expect(wrapper.props('disabled')).toBe(false);
    expect(wrapper.find('input').attributes('disabled')).toBeUndefined();
  });
  test('should have disabled from props', async () => {
    const wrapper = mount(BaseVueInput, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.props('disabled')).toBe(true);
    expect(wrapper.find('input').attributes('disabled')).toBeDefined();
  });
});
