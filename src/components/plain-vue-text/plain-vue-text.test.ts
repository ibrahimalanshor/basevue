import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import PlainVueText from './plain-vue-text.vue';

describe('text component', () => {
  // element
  test('should render heading element', () => {
    const wrapper = mount(PlainVueText);

    expect(wrapper.find('p').exists()).toBe(true);
  });

  // text
  test('should render text from default slot', () => {
    const wrapper = mount(PlainVueText, {
      slots: {
        default: 'Something',
      },
    });

    expect(wrapper.text()).toEqual('Something');
  });
  test('should have default text props to undefined', () => {
    const wrapper = mount(PlainVueText);

    expect(wrapper.props('text')).toBeUndefined();
  });
  test('should render text from props', () => {
    const wrapper = mount(PlainVueText, {
      props: {
        text: 'Something',
      },
    });

    expect(wrapper.text()).toEqual('Something');
  });

  // base
  test('should have default classes', () => {
    const wrapper = mount(PlainVueText);

    expect(wrapper.props('baseClass')).toBeUndefined();
  });
  test('should have base class from props', () => {
    const wrapper = mount(PlainVueText, {
      props: {
        baseClass: 'text-xl text-gray-500',
      },
    });

    expect(wrapper.classes('text-xl')).toBe(true);
    expect(wrapper.classes('text-gray-500')).toBe(true);
  });
});
