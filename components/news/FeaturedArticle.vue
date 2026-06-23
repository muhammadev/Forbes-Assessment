<script setup lang="ts">
import type { Article } from '~/types/article'
defineProps<{ article: Article }>()
</script>

<template>
  <article class="group">
    <NuxtLink :to="`/articles/${article.slug}`" class="block focus-visible:outline-none">
      <NuxtImg :src="article.image.src" :alt="article.image.alt" width="1280" height="720" class="aspect-[16/9] w-full rounded-sm bg-zinc-200 object-cover transition-opacity group-hover:opacity-90" />
      <div class="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <ArticleMeta :category="article.category" :author="article.author" :published-at="article.publishedAt" :reading-time="article.readingTime" />
      </div>
      <h1 class="mt-3 max-w-4xl text-heading-2 font-semibold leading-tight text-brand-black group-hover:text-brand-red sm:text-heading-1">
        {{ article.title }}
      </h1>
      <p class="mt-3 max-w-3xl text-sm leading-6 text-brand-muted sm:text-base">{{ article.excerpt }}</p>
    </NuxtLink>
  </article>
</template>
