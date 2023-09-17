import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BaseVueInput from './base-vue-input.vue';
import { h } from 'vue';

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

    expect(wrapper.find('input').classes('p-4')).toBe(true);
    expect(wrapper.find('input').classes('border')).toBe(true);
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

  // clear
  test('should render clear slot', () => {
    const wrapper = mount(BaseVueInput, {
      slots: {
        clear: () => h('button', 'clear'),
      },
    });

    expect(wrapper.find('button').exists()).toBe(true);
  });
  test('should emit clear when cleared', async () => {
    const wrapper = mount(BaseVueInput, {
      slots: {
        clear: ({ clear }) => h('button', { onClick: clear }, 'clear'),
      },
    });

    await wrapper.find('button').trigger('click');

    const emitted = wrapper.emitted();

    expect(emitted).toHaveProperty('clear');
  });

  // loading
  test('should have default loading', () => {
    const wrapper = mount(BaseVueInput);

    expect(wrapper.props('loading')).toBe(false);
    expect(wrapper.find('button.loading').exists()).toBe(false);
  });
  test('should render loading slot', () => {
    const wrapper = mount(BaseVueInput, {
      props: {
        loading: true,
      },
      slots: {
        loading: () => h('button', { class: 'loaidng' }, 'loading'),
      },
    });

    expect(wrapper.props('loading')).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  // right content
  test('should render right content', () => {
    const wrapper = mount(BaseVueInput, {
      props: {
        loading: true,
      },
      slots: {
        'right-content': () => h('a'),
        loading: () => h('button'),
        clear: () => h('span'),
      },
    });

    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(false);
    expect(wrapper.find('span').exists()).toBe(false);
  });
});
