<template>
  <div class="flex justify-center gap-4 mt-4">
    <button
      class="rounded-full border border-white px-4 py-2 bg-transparent text-white hover:bg-white hover:text-black transition"
      :disabled="currentPage <= 1"
      @click="$emit('page-changed', currentPage - 1)"
    >
      Prev
    </button>
    <span class="mt-2">Page {{ currentPage }}</span>
    <button
      class="rounded-full border border-white px-4 py-2 bg-transparent text-white hover:bg-white hover:text-black transition"
      :disabled="currentPage >= pageCount"
      @click="$emit('page-changed', currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  currentPage: Number,
  totalItems: Number,
  pageSize: Number,
})

const currentPage = computed(() => props.currentPage || 1)
const pageSize = computed(() => props.pageSize || 10)
const totalItems = computed(() => props.totalItems || 0)
const pageCount = computed(() => Math.ceil(totalItems.value / pageSize.value))
</script>
