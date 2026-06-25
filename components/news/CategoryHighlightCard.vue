<script setup lang="ts">
import type { CategoryHighlight } from '~/types/category'
defineProps<{ highlight: CategoryHighlight }>()
</script>

<template>
  <NuxtLink :to="`/categories/${highlight.slug}`" class="group grid grid-cols-[4.5rem_1fr] items-center gap-3 focus-visible:outline-none">
    <NuxtImg
      :src="highlight.image.src"
      :alt="highlight.image.alt"
      width="84"
      height="84"
      sizes="84px"
      format="webp"
      loading="lazy"
      class="aspect-[1/1] w-full rounded bg-zinc-200 object-cover"
    />
    <div>
      <p class="text-sm font-semibold uppercase leading-4 text-brand-content">{{ highlight.title }}</p>
      <p class="mt-1 text-xs font-medium leading-4 text-brand-content">{{ highlight.description }}</p>
    </div>
  </NuxtLink>
</template>
