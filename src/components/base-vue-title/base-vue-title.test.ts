import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BaseVueTitle from './base-vue-title.vue';

describe.only('title component', () => {
  test('should render heading element', () => {
    const wrapper = mount(BaseVueTitle);

    expect(wrapper.find('h1')).toBeTruthy();
  });

  test('should render title default slot', () => {
    const wrapper = mount(BaseVueTitle, {
      slots: {
        default: 'Something',
      },
    });

    expect(wrapper.text()).toEqual('Something');
  });
});
