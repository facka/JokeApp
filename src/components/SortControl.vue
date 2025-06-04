<template>
  <div class="flex gap-2 my-2">
    <button @click="$emit('sort', 'type')" data-testid="button-sort-by-type">Sort by Type</button>
    <button @click="$emit('sort', 'setup')" data-testid="button-sort-by-setup">
      Sort by Setup
    </button>
  </div>
</template>
