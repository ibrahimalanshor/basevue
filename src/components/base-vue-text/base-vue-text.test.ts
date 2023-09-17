import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseVueText from './base-vue-text.vue';

describe('text component', () => {
  // element
  test('should render heading element', () => {
    const wrapper = mount(BaseVueText);

    expect(wrapper.find('p').exists()).toBe(true);
  });

  // text
  test('should render text from default slot', () => {
    const wrapper = mount(BaseVueText, {
      slots: {
        default: 'Something',
      },
    });

    expect(wrapper.text()).toEqual('Something');
  });
  test('should have default text props to undefined', () => {
    const wrapper = mount(BaseVueText);

    expect(wrapper.props('text')).toBeUndefined();
  });
  test('should render text from props', () => {
    const wrapper = mount(BaseVueText, {
      props: {
        text: 'Something',
      },
    });

    expect(wrapper.text()).toEqual('Something');
  });

  // default class
  test('should have default classes', () => {
    const wrapper = mount(BaseVueText);

    expect(wrapper.props('baseClass')).toBeUndefined();
  });

  // base
  test('should have base class from props', () => {
    const wrapper = mount(BaseVueText, {
      props: {
        baseClass: 'text-xl text-gray-500',
      },
    });

    expect(wrapper.classes('text-xl')).toBe(true);
    expect(wrapper.classes('text-gray-500')).toBe(true);
  });
});
