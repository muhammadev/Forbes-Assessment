<script setup lang="ts">
import type { Article } from '~/types/article'
defineProps<{ article: Article }>()
</script>

<template>
  <article class="group grid grid-cols-[7.5rem_1fr] gap-4 border-b border-brand-content pb-4 last:border-b-0">
    <NuxtLink :to="`/articles/${article.slug}`" class="focus-visible:outline-none">
      <NuxtImg
        v-if="article.featuredImage"
        :src="article.featuredImage"
        :alt="article.title"
        width="240"
        height="160"
        sizes="120px"
        loading="lazy"
        class="aspect-[3/2] w-full rounded-sm bg-zinc-200 object-cover transition-opacity group-hover:opacity-90"
      />
    </NuxtLink>
    <div>
      <NuxtLink :to="`/articles/${article.slug}`" class="focus-visible:outline-none">
        <h3 class="text-sm font-semibold leading-5 sm:text-base">{{ article.title }}</h3>
      </NuxtLink>
      <!-- <NewsArticleMeta class="mt-2" :author="article.author" :published-at="article.publishedAt" /> -->
    </div>
  </article>
</template>
