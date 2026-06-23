<script setup lang="ts">
useSeoMeta({ title: 'Forbes Middle East', description: 'Forbes Middle East news and insights.' })
import { articles } from '~/data/articles'

const featuredArticle = articles.find((article) => article.isFeatured)
const latestArticles = articles.slice(1, 7)
const compactArticles = articles.slice(7, 10)
</script>

<template>
  <BaseContainer>
    <section v-if="featuredArticle" class="py-10 sm:py-14">
      <FeaturedArticle :article="featuredArticle" />
    </section>
    <CategorySection title="Latest News" :articles="latestArticles" view-all-href="#" />
    <section class="pb-12 sm:pb-16">
      <BaseSectionTitle title="Trending" />
      <div class="mt-6 grid gap-4 lg:grid-cols-3">
        <CompactArticleItem v-for="article in compactArticles" :key="article.id" :article="article" />
      </div>
    </section>
  </BaseContainer>
</template>
