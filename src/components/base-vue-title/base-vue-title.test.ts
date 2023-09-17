import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BaseVueTitle from './base-vue-title.vue';

describe.only('title component', () => {
  test('should render heading element', () => {
    const wrapper = mount(BaseVueTitle);

    expect(wrapper.find('h1')).toBeTruthy();
  });

  test('should render text default slot', () => {
    const wrapper = mount(BaseVueTitle, {
      slots: {
        default: 'Something',
      },
    });

    expect(wrapper.text()).toEqual('Something');
  });

  test('should render text from text props', () => {
    const wrapper = mount(BaseVueTitle, {
      props: {
        text: 'Something',
      },
    });

    expect(wrapper.text()).toEqual('Something');
  });

  test('should have base class from props', () => {
    const wrapper = mount(BaseVueTitle, {
      props: {
        classes: {
          base: 'font-bold text-lg',
        },
      },
    });

    expect(wrapper.classes('font-bold')).toBe(true);
    expect(wrapper.classes('text-lg')).toBe(true);
  });

  test('should have default level props to 1', async () => {
    const wrapper = mount(BaseVueTitle);

    expect(wrapper.props('level')).toEqual(1);
  });
});
