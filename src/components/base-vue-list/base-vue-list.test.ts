import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BaseVueList from './base-vue-list.vue';

describe.only('list component', () => {
  test('should render div component', () => {
    const wrapper = mount(BaseVueList);

    expect(wrapper.find('div').exists()).toBe(true);
  });
});
