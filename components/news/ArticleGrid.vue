<script setup lang="ts">
import type { Article } from '~/types/article'
defineProps<{ articles: Article[] }>()
</script>

<template>
  <div class="grid gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
    <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
  </div>
</template>
