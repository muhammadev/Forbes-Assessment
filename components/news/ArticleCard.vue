<script setup lang="ts">
import type { Article } from '~/types/article'
defineProps<{ article: Article }>()
</script>

<template>
  <article class="group">
    <NuxtLink :to="`/articles/${article.slug}`" class="block focus-visible:outline-none">
      <NuxtImg :src="article.image.src" :alt="article.image.alt" width="640" height="384" class="aspect-[5/3] w-full rounded-sm bg-zinc-200 object-cover transition-opacity group-hover:opacity-90" />
      <h3 class="mt-3 text-heading-6 font-semibold leading-6 text-brand-black group-hover:text-brand-red sm:text-heading-5">
        {{ article.title }}
      </h3>
    </NuxtLink>
    <ArticleMeta class="mt-2" :author="article.author" :published-at="article.publishedAt" />
  </article>
</template>
