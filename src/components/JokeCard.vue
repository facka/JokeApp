<template>
  <div class="p-4 rounded border border-white border-1 shadow">
    <p class="text-gray-200 font-bold">{{ joke.setup }}</p>
    <p class="text-gray-500">{{ joke.punchline }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Joke } from '../stores/jokesStore.ts'

defineProps<{ joke: Joke }>()
</script>
