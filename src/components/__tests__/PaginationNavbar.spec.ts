import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PaginationNavbar from '@/components/PaginationNavbar.vue'

describe('PaginationNavbar.vue', () => {
  it('emits page-changed event when next/prev clicked', async () => {
    const wrapper = mount(PaginationNavbar, {
      props: {
        currentPage: 2,
        totalItems: 20,
        pageSize: 5,
      },
    })
    await wrapper.find('button:last-child').trigger('click')
    expect(wrapper.emitted()['page-changed']).toBeTruthy()
  })
})
