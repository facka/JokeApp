<template>
  <div class="flex gap-2 my-2">
    <button @click="$emit('sort', 'type')">Sort by Type</button>
    <button @click="$emit('sort', 'setup')">Sort by Setup</button>
  </div>
</template>
