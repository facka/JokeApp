<script setup lang="ts">
import { onMounted } from 'vue'
import JokeCard from '../components/JokeCard.vue'
import Pagination from '../components/PaginationNavbar.vue'
import SortControl from '../components/SortControl.vue'
import { useJokesStore } from '../stores/jokesStore'

const store = useJokesStore()

onMounted(() => {
  store.loadJokes()
})
</script>

<template>
  <div>
    <SortControl @sort="store.setSortKey" />
    <div class="bg-whitegrid flex flex-col gap-4">
      <JokeCard v-for="joke in store.paginatedJokes" :key="joke.id" :joke="joke" />
    </div>
    <Pagination
      :current-page="store.currentPage"
      :total-items="store.sortedJokes.length"
      :page-size="store.pageSize"
      @page-changed="store.setPage"
    />
  </div>
</template>
