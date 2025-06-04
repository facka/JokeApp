import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { getJokes } from '../services/jokeService'

export type Joke = {
  type: string
  setup: string
  punchline: string
  id: number
}

export const useJokesStore = defineStore('jokes', () => {
  const jokes: Ref<Joke[]> = ref([])
  const sortKey: Ref<keyof Joke | ''> = ref('')
  const currentPage: Ref<number> = ref(1)
  const pageSize: number = 5

  const sortedJokes = computed<Joke[]>(() => {
    if (!sortKey.value) return jokes.value
    return [...jokes.value].sort((a, b) => {
      if (!sortKey.value) return 0
      const key = sortKey.value as keyof Joke
      const aValue = a[key]
      const bValue = b[key]
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue)
      }
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return aValue - bValue
      }
      return 0
    })
  })

  const paginatedJokes = computed<Joke[]>(() => {
    const start = (currentPage.value - 1) * pageSize
    return sortedJokes.value.slice(start, start + pageSize)
  })

  async function loadJokes(): Promise<void> {
    jokes.value = await getJokes()
  }

  function setSortKey(key: keyof Joke | ''): void {
    sortKey.value = key
    currentPage.value = 1
  }

  function setPage(page: number): void {
    currentPage.value = page
  }

  return {
    jokes,
    sortKey,
    currentPage,
    pageSize,
    sortedJokes,
    paginatedJokes,
    loadJokes,
    setSortKey,
    setPage,
  }
})
