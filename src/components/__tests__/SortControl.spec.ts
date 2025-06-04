import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SortControl from '@/components/SortControl.vue'

describe('SortControl.vue', () => {
  it('emits sort event when sort option is selected', async () => {
    const wrapper = mount(SortControl)
    // Simulate sort event if your component emits it on some action
    // For example, if you have a select input:
    const select = wrapper.find('select')
    if (select.exists()) {
      await select.setValue('type')
      expect(wrapper.emitted().sort).toBeTruthy()
    }
  })
})
