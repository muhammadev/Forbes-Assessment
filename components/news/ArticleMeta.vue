<script setup lang="ts">
defineProps<{
  author?: string
  publishedAt?: string
  readingTime?: string
  category?: string
}>()
</script>

<template>
  <p class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-4 text-brand-muted">
    <span v-if="category" class="font-medium text-brand-black">{{ category }}</span>
    <span v-if="author">{{ author }}</span>
    <span v-if="publishedAt" aria-hidden="true">—</span>
    <time v-if="publishedAt" :datetime="publishedAt">{{ new Date(publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}</time>
    <span v-if="readingTime" aria-hidden="true">—</span>
    <span v-if="readingTime">{{ readingTime }}</span>
  </p>
</template>
