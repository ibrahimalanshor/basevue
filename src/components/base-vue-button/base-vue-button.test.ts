import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BaseVueButton from './base-vue-button.vue';

describe.only('button test', () => {
  // element
  test('should have button elment', () => {
    const wrapper = mount(BaseVueButton);

    expect(wrapper.find('button').exists()).toBe(true);
  });
});
