<script setup lang="ts">
import type { Article } from "~/types/article";

const props = withDefaults(
  defineProps<{ articles: Article[]; viewAllHref?: string; loading?: boolean }>(),
  {
    loading: false,
  },
);

const featuredArticle = computed(() => props.articles[0]);
const sideArticles = computed(() => props.articles.slice(1, 3));
const bottomArticles = computed(() => props.articles.slice(3, 6));
</script>

<template>
  <section class="py-10 sm:py-14">
    <div class="flex items-end justify-between gap-4 border-b border-brand-content pb-3">
      <BaseSectionTitle title="Latest News" class="w-full border-t-0 pt-0" />
      <NuxtLink v-if="viewAllHref" :to="viewAllHref" class="arrow-link shrink-0 flex gap-1 text-sm">
        View All
        <IconArrowCircleRight class="arrow-link-icon" />
      </NuxtLink>
    </div>

    <div v-if="loading" class="mt-6 animate-pulse">
      <div class="grid gap-16 lg:grid-cols-12">
        <div class="lg:col-span-6">
          <div class="min-h-[360px] rounded bg-brand-content/10" />
        </div>

        <div class="grid gap-6 lg:col-span-6">
          <article v-for="index in 2" :key="index" class="grid gap-6 md:grid-cols-2 md:items-center">
            <div class="space-y-3">
              <div class="h-5 w-full rounded bg-brand-content/10" />
              <div class="h-5 w-4/5 rounded bg-brand-content/10" />
              <div class="h-3 w-2/3 rounded bg-brand-content/10" />
            </div>
            <div class="aspect-[4/3] rounded bg-brand-content/10" />
          </article>
        </div>
      </div>

      <div class="mt-6 grid gap-6 md:grid-cols-3 lg:mt-16">
        <article v-for="index in 3" :key="index" class="space-y-3">
          <div class="aspect-[432/268] rounded-lg bg-brand-content/10" />
          <div class="h-3 w-2/3 rounded bg-brand-content/10" />
          <div class="h-5 w-full rounded bg-brand-content/10" />
          <div class="h-5 w-5/6 rounded bg-brand-content/10" />
        </article>
      </div>
    </div>

    <div v-else class="mt-6 grid gap-16 lg:grid-cols-12">
      <NewsArticleCard
        v-if="featuredArticle"
        class="lg:col-span-6"
        :article="featuredArticle"
        variant="featured-overlay"
        :metaKeys="['category', 'publishedAt']"
      />

      <div class="grid gap-6 lg:col-span-6">
        <NewsArticleCard
          v-for="article in sideArticles"
          :key="article.id"
          :article="article"
          variant="horizontal-compact"
          :media-right="true"
          :meta-keys="['category', 'publishedAt']"
        />
      </div>
    </div>

    <div v-if="!loading && bottomArticles.length" class="mt-6 lg:mt-16 grid gap-6 md:grid-cols-3">
      <NewsArticleCard
        v-for="article in bottomArticles"
        :key="article.id"
        :article="article"
        variant="vertical"
        :meta-keys="['category', 'publishedAt']"
      />
    </div>
  </section>
</template>
