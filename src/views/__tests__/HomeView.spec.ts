import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import JokeCard from '@/components/JokeCard.vue'
import PaginationNavbar from '@/components/PaginationNavbar.vue'
import SortControl from '@/components/SortControl.vue'
import { createTestingPinia } from '@pinia/testing'

describe('HomeView.vue', () => {
  it('renders SortControl, JokeCard(s), and PaginationNavbar', async () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false, // Disable actions to avoid needing to mock them
            createSpy: vi.fn, // Use Vitest's spy function
            initialState: {
              jokes: {
                jokes: [
                  {
                    type: 'general',
                    setup: 'What do you get when you cross a chicken with a skunk?',
                    punchline: 'A fowl smell!',
                    id: 1,
                  },
                ], // Start with an empty jokes array
                totalJokes: 1,
                currentPage: 1,
                totalPages: 1,
              },
            },
          }),
        ],
        stubs: {
          JokeCard,
          PaginationNavbar,
          SortControl,
        },
      },
    })

    expect(wrapper.findComponent(SortControl).exists()).toBe(true)
    expect(wrapper.findComponent(PaginationNavbar).exists()).toBe(true)
    // JokeCard is rendered for each joke, but with empty store, none will show
    expect(wrapper.findComponent(JokeCard).exists()).toBe(true)
  })
})
