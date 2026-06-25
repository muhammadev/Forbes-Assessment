<script setup lang="ts">
import { articles } from '~/data/articles'
import { getArticleBySlug } from '~/utils/articles'
import type { ArticleBodyBlock } from '~/types/article'

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const article = computed(() => getArticleBySlug(slug.value))

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

const bodyBlocks = computed<ArticleBodyBlock[]>(() => {
  if (article.value?.body?.length) return article.value.body

  return article.value?.content
    .split(/\s*<\/p>\s*<p>\s*/)
    .map((text) => text.replace(/<\/?p>/g, ''))
    .filter(Boolean)
    .map((text) => ({ type: 'paragraph', text })) ?? []
})

const relatedArticles = computed(() => {
  const currentArticle = article.value
  if (!currentArticle) return []

  const categoryMatches = articles.filter((item) => item.slug !== currentArticle.slug && item.category === currentArticle.category)
  const latestFallback = articles.filter((item) => item.slug !== currentArticle.slug && !categoryMatches.includes(item))

  return [...categoryMatches, ...latestFallback].slice(0, 3)
})

useSeoMeta({
  title: () => article.value?.title ?? 'Article',
  description: () => article.value?.excerpt,
  ogTitle: () => article.value?.title,
  ogDescription: () => article.value?.excerpt,
  ogImage: () => article.value?.featuredImage ?? undefined,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <article v-if="article">
    <BaseContainer>
      <header class="mx-auto max-w-4xl pt-10 sm:pt-16">
        <p class="text-xs font-semibold uppercase text-brand-red">{{ article.category }}</p>
        <h1 class="mt-4 text-heading-2 font-semibold leading-tight sm:text-heading-1">{{ article.title }}</h1>
        <p class="mt-4 text-base leading-7 text-brand-content">{{ article.excerpt }}</p>
        <!-- <NewsArticleMeta class="mt-5 border-y border-brand-content py-3" :author="article.author" :published-at="article.publishedAt" :reading-time="article.readingTime" /> -->
      </header>

      <NuxtImg
        v-if="article.featuredImage"
        :src="article.featuredImage"
        :alt="article.title"
        width="1320"
        height="520"
        class="mt-8 aspect-[16/9] w-full rounded-sm bg-zinc-200 object-cover sm:mt-10"
      />

      <section class="mx-auto max-w-3xl py-10 sm:py-14" aria-label="Article body">
        <NewsArticleBody :blocks="bodyBlocks" />
      </section>

      <section class="border-t border-brand-content py-10 sm:py-14" aria-labelledby="similar-news">
        <BaseSectionTitle id="similar-news" title="Similar News" />
        <NewsArticleGrid class="mt-6" :articles="relatedArticles" />
      </section>
    </BaseContainer>
  </article>
</template>
