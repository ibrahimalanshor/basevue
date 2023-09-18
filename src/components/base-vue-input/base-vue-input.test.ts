import { VueWrapper, mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BaseVueInput from './base-vue-input.vue';
import { h } from 'vue';

describe('input component', () => {
  // element
  test('should render input element', () => {
    const wrapper = mount(BaseVueInput);

    expect(wrapper.find('div').exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  // wrapper class
  test('should have default wrapper class', () => {
    const wrapper = mount(BaseVueInput);

    expect(wrapper.props('wrapper')).toBeUndefined();
  });
  test('should have wrapper class from props', () => {
    const wrapper = mount(BaseVueInput, {
      props: {
        wrapperClass: 'space-y-2 relative',
      },
    });

    expect(wrapper.find('div').classes('space-y-2')).toBe(true);
    expect(wrapper.find('div').classes('relative')).toBe(true);
  });

  // input class
  test('should have default input class', () => {
    const wrapper = mount(BaseVueInput);

    expect(wrapper.props('inputClass')).toBeUndefined();
  });
  test('should have input class from props', () => {
    const wrapper = mount(BaseVueInput, {
      props: {
        inputClass: 'p-4 border',
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

  // color
  test('should have default color', () => {
    const wrapper = mount(BaseVueInput);

    expect(wrapper.props('color')).toEqual('default');
    expect(wrapper.props('colorClass')).toEqual({ default: '' });
  });
  test('should have color class by color props', async () => {
    const colors: Record<string, string> = {
      success: 'border-green',
      error: 'border-red',
    };
    const wrapper = mount(BaseVueInput, {
      props: {
        colorClass: {
          default: 'border-gray',
          ...colors,
        },
      },
    });

    expect(wrapper.find('input').classes('border-gray')).toBe(true);

    for (const color in colors) {
      await wrapper.setProps({ color });

      expect(wrapper.find('input').classes(colors[color])).toBe(true);
    }
  });

  // model value
  test('should have default value', () => {
    const wrapper = mount(BaseVueInput);

    expect(wrapper.props('modelValue')).toBeNull();
    expect(wrapper.find('input').element.value).toEqual('');
  });
  test('should sync input value with model value', async () => {
    const wrapper: VueWrapper = mount(BaseVueInput, {
      props: {
        modelValue: 'value',
        'onUpdate:modelValue': (txt) => wrapper.setProps({ modelValue: txt }),
      },
    });

    expect(wrapper.find('input').element.value).toEqual('value');

    await wrapper.setProps({ modelValue: 'changed from props' });

    expect(wrapper.find('input').element.value).toEqual('changed from props');

    await wrapper.find('input').setValue('changed from input');

    expect(wrapper.props('modelValue')).toEqual('changed from input');
  });
});
