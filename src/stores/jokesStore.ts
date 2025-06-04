import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

type Joke = {
  type: string
  setup: string
  punchline: string
  id: number
}

export const useJokesStore = defineStore('jokes', () => {
  const jokes = ref<Joke[]>([])

  const getJokes = computed(() => jokes.value)

  function loadJokes() {
    jokes.value.push({
      type: 'general',
      setup: 'Why did the rooster cross the road?',
      punchline: 'He heard that the chickens at KFC were pretty hot.',
      id: 391,
    })
  }

  return { getJokes, loadJokes }
})
