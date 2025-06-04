<script setup lang="ts">
import { onMounted } from 'vue'
import { useJokesStore } from '../stores/jokesStore.js'

const store = useJokesStore()

onMounted(() => {
  store.loadJokes()
})
</script>

<template>
  <h1>Jokes</h1>
  <div class="jokes">
    <ul>
      <li v-for="joke in store.getJokes" :key="joke.id">
        <h3>{{ joke.setup }}:</h3>
        {{ joke.punchline }}
      </li>
    </ul>
  </div>
</template>
