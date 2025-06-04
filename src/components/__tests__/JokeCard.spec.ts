import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import JokeCard from '@/components/JokeCard.vue'

describe('JokeCard.vue', () => {
  it('renders joke props', () => {
    const joke = {
      id: 1,
      type: 'general',
      setup: 'Why did the chicken cross the road?',
      punchline: 'To get to the other side!',
    }
    const wrapper = mount(JokeCard, {
      props: { joke },
    })
    expect(wrapper.text()).toContain(joke.setup)
    expect(wrapper.text()).toContain(joke.punchline)
  })
})
