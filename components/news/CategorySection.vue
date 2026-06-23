<script setup lang="ts">
import type { Article } from '~/types/article'
defineProps<{ title: string; articles: Article[]; viewAllHref?: string }>()
</script>

<template>
  <section class="py-10 sm:py-14">
    <div class="flex items-end justify-between gap-4 border-b border-brand-line pb-3">
      <BaseSectionTitle :title="title" class="w-full border-t-0 pt-0" />
      <NuxtLink v-if="viewAllHref" :to="viewAllHref" class="shrink-0 text-xs font-medium text-brand-muted hover:text-brand-red">View All →</NuxtLink>
    </div>
    <ArticleGrid class="mt-6" :articles="articles" />
  </section>
</template>
