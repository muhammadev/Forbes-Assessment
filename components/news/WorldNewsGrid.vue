<script setup lang="ts">
import type { Article } from "~/types/article";

const props = withDefaults(
  defineProps<{ articles: Article[]; viewAllHref?: string; loading?: boolean }>(),
  {
    loading: false,
  },
);

const featuredArticle = computed(() => props.articles[0]);
const sideArticles = computed(() => props.articles.slice(1, 4));
</script>

<template>
  <section class="py-10 sm:py-14">
    <div
      class="flex items-end justify-between gap-4 border-b border-brand-content pb-3"
    >
      <BaseSectionTitle title="World News" class="w-full border-t-0 pt-0" />
      <NuxtLink
        v-if="viewAllHref"
        :to="viewAllHref"
        class="arrow-link shrink-0 flex gap-1 text-sm"
      >
        View All
        <IconArrowCircleRight class="arrow-link-icon" />
      </NuxtLink>
    </div>

    <div v-if="loading" class="mt-6 grid animate-pulse gap-6 md:gap-16 lg:grid-cols-12">
      <div class="lg:col-span-6">
        <div class="relative min-h-[360px] rounded bg-brand-content/10">
          <div class="absolute start-5 top-5 flex h-[90%] w-1/2 max-w-[408px] flex-col justify-between rounded-lg bg-brand-paper p-5">
            <div class="space-y-5">
              <div class="h-9 w-28 rounded-lg bg-brand-content/10" />
              <div class="h-7 w-full rounded bg-brand-content/10" />
              <div class="h-7 w-4/5 rounded bg-brand-content/10" />
            </div>
            <div class="mb-[60px] h-3 w-2/3 rounded bg-brand-content/10" />
          </div>
        </div>
      </div>

      <div class="grid gap-5 lg:col-span-6">
        <article v-for="index in 3" :key="index" class="grid gap-6 sm:grid-cols-[minmax(180px,197px)_minmax(180px,1fr)] sm:items-center">
          <div class="h-[182px] rounded bg-brand-content/10" />
          <div class="space-y-3">
            <div class="h-3 w-2/3 rounded bg-brand-content/10" />
            <div class="h-5 w-full rounded bg-brand-content/10" />
            <div class="h-5 w-5/6 rounded bg-brand-content/10" />
          </div>
        </article>
      </div>
    </div>

    <div v-else class="mt-6 grid gap-6 md:gap-16 lg:grid-cols-12">
      <NewsArticleCard
        v-if="featuredArticle"
        :article="featuredArticle"
        variant="featured-split"
        :meta-keys="['author']"
        :meta-top="true"
        class="lg:col-span-6"
      />

      <div class="grid gap-5 lg:col-span-6">
        <NewsArticleCard
          v-for="article in sideArticles"
          :key="article.id"
          :article="article"
          variant="horizontal-compact"
          :meta-keys="['author', 'publishedAt']"
          :meta-top="true"
        />
      </div>
    </div>
  </section>
</template>
