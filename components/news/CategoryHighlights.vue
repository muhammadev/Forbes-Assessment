<script setup lang="ts">
import type { CategoryHighlight } from '~/types/category'
defineProps<{ highlights: CategoryHighlight[] }>()
</script>

<template>
  <section aria-label="Featured topics" class="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
    <NewsCategoryHighlightCard v-for="highlight in highlights" :key="highlight.id" :highlight="highlight" />
  </section>
</template>
