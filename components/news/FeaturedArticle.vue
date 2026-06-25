<script setup lang="ts">
import type { Article } from '~/types/article'
withDefaults(defineProps<{ article?: Article; loading?: boolean }>(), {
  loading: false,
})
</script>

<template>
  <article v-if="loading" class="animate-pulse" aria-hidden="true">
    <div class="aspect-[1320/580] w-full rounded bg-brand-content/10" />

    <div class="mt-6 flex gap-5">
      <div class="h-10 w-24 rounded-lg bg-brand-content/10" />
      <div class="h-10 w-28 rounded-lg bg-brand-content/10" />
      <div class="h-10 w-20 rounded-lg bg-brand-content/10" />
    </div>

    <div class="mt-6 flex flex-wrap justify-between gap-6">
      <div class="max-w-4xl flex-1 space-y-4">
        <div class="h-10 w-full rounded bg-brand-content/10" />
        <div class="h-10 w-4/5 rounded bg-brand-content/10" />
      </div>
      <div class="h-5 w-28 rounded bg-brand-content/10" />
    </div>
  </article>

  <article v-else-if="article" class="group">
    <div>
      <NuxtLink :to="`/articles/${article.slug}`" class="block focus-visible:outline-none">
      <div class="relative overflow-hidden rounded">
        <span class="absolute top-5 start-5 z-10 inline-flex rounded bg-white px-2 py-1 text-xs font-medium text-brand-content before:inline-block before:size-2 before:rounded-full before:bg-[#E63946] before:translate-y-1/2 before:me-2">Live Updates</span>
        <NuxtImg
          v-if="article.featuredImage"
          :src="article.featuredImage"
          :alt="article.title"
          width="1320"
          height="580"
          sizes="100vw lg:1320px"
          loading="eager"
          fetchpriority="high"
          class="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-focus-within:scale-110"
        />
      </div>
      </NuxtLink>

      <!-- Tags -->
      <div v-if="Array.isArray(article.tags)" class="mt-6 flex gap-5 items-center">
        <span v-for="tag in article.tags" class="border border-brand-content text-brand-content uppercase text-sm font-medium rounded-lg p-[10px]">{{ tag }}</span>
      </div>

      <div class="mt-6 w-full flex flex-wrap justify-between items-start gap-2">
        <NuxtLink :to="`/articles/${article.slug}`" class="block focus-visible:outline-none">
          <h1 class="max-w-4xl text-heading-1 font-medium leading-tight text-brand-content sm:text-heading-1">
            {{ article.title }}
          </h1>
        </NuxtLink>

        <NuxtLink :to="`/articles/${article.slug}`" class="arrow-link flex gap-1 text-sm">
          Read Article
          <IconArrowCircleRight class="arrow-link-icon" />
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
