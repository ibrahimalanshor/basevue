import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseVueText from './base-vue-text.vue';

describe('text component', () => {
  test('should render text slot', () => {
    const wrapper = mount(BaseVueText, {
      slots: {
        default: 'Something',
      },
    });

    expect(wrapper.text()).toEqual('Something');
  });

  test('should render text from props', () => {
    const wrapper = mount(BaseVueText, {
      props: {
        text: 'Something',
      },
    });

    expect(wrapper.text()).toEqual('Something');
  });

  test('should have base class from props', () => {
    const wrapper = mount(BaseVueText, {
      props: {
        classes: {
          base: 'text-xl text-gray-500',
        },
      },
    });

    expect(wrapper.classes('text-xl')).toBe(true);
    expect(wrapper.classes('text-gray-500')).toBe(true);
  });
});
