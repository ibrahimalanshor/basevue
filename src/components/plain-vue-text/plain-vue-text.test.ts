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

  // color
  test('should have default color', () => {
    const wrapper = mount(PlainVueText);

    expect(wrapper.props('color')).toEqual('gray');
    expect(wrapper.props('colorClass')).toEqual({ gray: '' });
  });
  test('should have color class by color props', async () => {
    const colors: Record<string, string> = {
      success: 'text-green-600',
      error: 'text-red-600',
    };
    const wrapper = mount(PlainVueText, {
      props: {
        colorClass: {
          gray: 'text-gray-600',
          ...colors,
        },
      },
    });

    expect(wrapper.find('p').classes('text-gray-600')).toBe(true);

    for (const color in colors) {
      await wrapper.setProps({ color });

      expect(wrapper.find('p').classes(colors[color])).toBe(true);
    }
  });

  // custom tag
  test('should have default tag', () => {
    const wrapper = mount(PlainVueText);

    expect(wrapper.props('tag')).toEqual('p');
    expect(wrapper.find('p').exists()).toBe(true);
  });
  test('should render custom tag', () => {
    const wrapper = mount(PlainVueText, {
      props: {
        tag: 'h1',
      },
    });

    expect(wrapper.props('tag')).toEqual('h1');
    expect(wrapper.find('h1').exists()).toBe(true);
  });
});
