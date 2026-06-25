<script setup lang="ts">
import { articles } from '~/data/articles'
import { getArticleBySlug } from '~/utils/articles'
import type { ArticleBodyBlock } from '~/types/article'

const route = useRoute()
const requestUrl = useRequestURL()
const slug = computed(() => String(route.params.slug))
const article = computed(() => getArticleBySlug(slug.value))
const articleUrl = computed(() => new URL(route.fullPath, requestUrl.origin).toString())
const isArticleLoading = ref(false)
let articleLoadingTimer: ReturnType<typeof setTimeout> | undefined

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

const articleMetaItems = computed(() => {
  const currentArticle = article.value
  if (!currentArticle) return []

  return getArticleMetaItems(currentArticle, ['publishedAt'])
})

const relatedArticles = computed(() => {
  const currentArticle = article.value
  if (!currentArticle) return []

  const categoryMatches = articles.filter((item) => item.slug !== currentArticle.slug && item.category === currentArticle.category)
  const latestFallback = articles.filter((item) => item.slug !== currentArticle.slug && !categoryMatches.includes(item))

  return [...categoryMatches, ...latestFallback].slice(0, 3)
})

watch(slug, () => {
  isArticleLoading.value = true

  if (articleLoadingTimer) {
    clearTimeout(articleLoadingTimer)
  }

  articleLoadingTimer = setTimeout(() => {
    isArticleLoading.value = false
  }, 500)
})

onBeforeUnmount(() => {
  if (articleLoadingTimer) {
    clearTimeout(articleLoadingTimer)
  }
})

useSeoMeta({
  title: () => article.value ? `${article.value.title} | Forbes Middle East` : 'Article | Forbes Middle East',
  description: () => article.value?.excerpt,
  ogTitle: () => article.value?.title,
  ogDescription: () => article.value?.excerpt,
  ogImage: () => article.value?.featuredImage ?? undefined,
  ogUrl: () => articleUrl.value,
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: () => article.value?.title,
  twitterDescription: () => article.value?.excerpt,
  twitterImage: () => article.value?.featuredImage ?? undefined,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: article.value?.title,
        description: article.value?.excerpt,
        image: article.value?.featuredImage ? [new URL(article.value.featuredImage, requestUrl.origin).toString()] : undefined,
        datePublished: article.value?.publishedAt,
        dateModified: article.value?.updatedAt ?? article.value?.publishedAt,
        author: article.value ? [{ '@type': 'Person', name: article.value.author }] : undefined,
        publisher: {
          '@type': 'Organization',
          name: 'Forbes Middle East',
        },
        mainEntityOfPage: articleUrl.value,
      })),
    },
  ],
})
</script>

<template>
  <article v-if="article">
    <BaseContainer>
      <div v-if="isArticleLoading" class="mx-auto max-w-[760px] animate-pulse pt-10 sm:pt-16" aria-hidden="true">
        <div class="aspect-[3/2] w-full rounded bg-brand-content/10" />
        <div class="border-y border-brand-content py-3">
          <div class="flex items-center gap-3">
            <div class="size-10 rounded-full bg-brand-content/10" />
            <div class="space-y-2">
              <div class="h-3 w-28 rounded bg-brand-content/10" />
              <div class="h-3 w-40 rounded bg-brand-content/10" />
            </div>
          </div>
        </div>
        <div class="mt-5 space-y-4 border-b border-brand-content pb-6">
          <div class="h-8 w-full rounded bg-brand-content/10" />
          <div class="h-8 w-4/5 rounded bg-brand-content/10" />
        </div>
        <div class="space-y-5 py-8">
          <div v-for="index in 8" :key="index" class="space-y-2">
            <div class="h-3 w-full rounded bg-brand-content/10" />
            <div class="h-3 w-11/12 rounded bg-brand-content/10" />
            <div class="h-3 w-4/5 rounded bg-brand-content/10" />
          </div>
        </div>

        <section class="py-10 sm:py-14">
          <div class="border-t border-brand-black pt-4">
            <div class="h-10 w-56 rounded bg-brand-content/10" />
          </div>

          <div class="mt-6 grid gap-x-7 gap-y-8 sm:grid-cols-3">
            <article v-for="index in 3" :key="index" class="space-y-3">
              <div class="aspect-[432/268] rounded-lg bg-brand-content/10" />
              <div class="h-3 w-2/3 rounded bg-brand-content/10" />
              <div class="h-5 w-full rounded bg-brand-content/10" />
              <div class="h-5 w-5/6 rounded bg-brand-content/10" />
            </article>
          </div>
        </section>
      </div>

      <template v-else>
        <div class="mx-auto max-w-[760px] pt-10 sm:pt-16">
          <NuxtImg
            v-if="article.featuredImage"
            :src="article.featuredImage"
            :alt="article.title"
            width="980"
            height="650"
            loading="eager"
            fetchpriority="high"
            class="aspect-[3/2] w-full bg-zinc-200 object-cover"
            sizes="100vw md:760px"
          />

          <header>
            <div class="border-y border-brand-content py-3">
              <div class="flex items-center gap-3">
                <div class="grid size-11 shrink-0 place-items-center rounded-full bg-brand-content text-xs font-semibold uppercase text-brand-paper">
                  {{ article.author.split(' ').map((part) => part[0]).join('').slice(0, 2) }}
                </div>

                <div>
                  <p class="text-lg font-medium uppercase leading-none">{{ article.author }}</p>
                  <div class="flex items-center gap-1 mt-2">
                    <img src="/images/icons/calendar.svg" width="22" height="22" alt="" loading="lazy" />
                    <NewsArticleMeta class="text-base" :meta-items="articleMetaItems" />
                  </div>
                </div>
              </div>
            </div>

            <h1 class="border-b border-brand-content py-5 text-[1.75rem] font-semibold uppercase leading-tight tracking-tight text-brand-content sm:text-[2rem]">
              {{ article.title }}
            </h1>
          </header>

          <section class="py-8 sm:py-10" aria-label="Article body">
            <NewsArticleBody :blocks="bodyBlocks" />
          </section>

          <div class="border-b border-brand-content" />
        </div>

        <section
          v-if="relatedArticles.length"
          class="py-10 sm:py-14"
          aria-labelledby="similar-news"
        >
          <BaseSectionTitle id="similar-news" title="Similar News" />
          <NewsArticleGrid
            class="mt-6"
            :articles="relatedArticles"
            :classes="'grid gap-x-7 gap-y-8 sm:grid-cols-3'"
          />
        </section>
      </template>
    </BaseContainer>
  </article>
</template>
