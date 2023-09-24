import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import PlainVueDropdown from './plain-vue-dropdown.vue';

describe.only('dropdown component', () => {
  // wrapper
  test('should have wrapper element', () => {
    const wrapper = mount(PlainVueDropdown);

    expect(wrapper.find('div').exists()).toBe(true);
  });
  test('should have wrapper class', async () => {
    const wrapper = mount(PlainVueDropdown);

    expect(wrapper.props('wrapperClass')).toBeUndefined();

    await wrapper.setProps({
      wrapperClass: 'p-4',
    });

    expect(wrapper.props('wrapperClass')).toEqual('p-4');
    expect(wrapper.find('div').classes('p-4')).toBe(true);
  });
});
