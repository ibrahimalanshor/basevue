import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Text from './text.vue';

describe('text component', () => {
  test('should render slot', () => {
    const wrapper = mount(Text, {
      slots: {
        default: 'Something',
      },
    });

    expect(wrapper.text()).toEqual('Something');
  });
});
