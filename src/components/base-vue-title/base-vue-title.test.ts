import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BaseVueTitle from './base-vue-title.vue';

describe.only('title component', () => {
  test('should render heading element', () => {
    const wrapper = mount(BaseVueTitle);

    expect(wrapper.find('h1').exists()).toBe(true);
  });

  test('should render text default slot', () => {
    const wrapper = mount(BaseVueTitle, {
      slots: {
        default: 'Something',
      },
    });

    expect(wrapper.text()).toEqual('Something');
  });

  test('should have default text props to undefined', () => {
    const wrapper = mount(BaseVueTitle);

    expect(wrapper.props('text')).toBeUndefined();
  });

  test('should render text from text props', () => {
    const wrapper = mount(BaseVueTitle, {
      props: {
        text: 'Something',
      },
    });

    expect(wrapper.text()).toEqual('Something');
  });

  test('should have default classes', () => {
    const wrapper = mount(BaseVueTitle);

    expect(wrapper.props('baseClass')).toBeUndefined();
    expect(wrapper.props('levelClass')).toEqual({
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
    });
  });

  test('should have base class from props', () => {
    const wrapper = mount(BaseVueTitle, {
      props: {
        baseClass: 'font-bold text-lg',
      },
    });

    expect(wrapper.classes('font-bold')).toBe(true);
    expect(wrapper.classes('text-lg')).toBe(true);
  });

  test('should have default level props to 1', () => {
    const wrapper = mount(BaseVueTitle);

    expect(wrapper.props('level')).toEqual(1);
  });

  test('should render heading element with different level from props', async () => {
    const levelClass: Record<number, string> = {
      1: 'text-5xl',
      2: 'text-4xl',
      3: 'text-3xl',
      4: 'text-2xl',
      5: 'text-xl',
      6: 'text-lg',
    };
    const wrapper = mount(BaseVueTitle, {
      props: {
        levelClass,
      },
    });
    const levels = [1, 2, 3, 4, 5, 6];

    for (const level of levels) {
      await wrapper.setProps({ level });

      const heading = wrapper.find(`h${level}`);

      expect(heading.exists()).toBe(true);
      expect(heading.classes(levelClass[level])).toBe(true);
    }
  });
});
