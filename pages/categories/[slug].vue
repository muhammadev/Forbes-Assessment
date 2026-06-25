<script setup lang="ts">
import { articles } from '~/data/articles'
import { categories } from '~/data/categories'
import { categoryHighlights } from '~/data/categoryHighlights'

definePageMeta({
  layout: 'default',
})

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const isCategoryLoading = ref(true)
let categoryLoadingTimer: ReturnType<typeof setTimeout> | undefined

const restartCategoryLoader = () => {
  isCategoryLoading.value = true

  if (categoryLoadingTimer) {
    clearTimeout(categoryLoadingTimer)
  }

  categoryLoadingTimer = setTimeout(() => {
    isCategoryLoading.value = false
  }, 500)
}

const categoryTitle = computed(() => {
  const category = categories.find((item) => item.slug === slug.value)
  const highlight = categoryHighlights.find((item) => item.slug === slug.value)

  return category?.name ?? highlight?.title ?? formatCategoryTitle(slug.value)
})

const categoryArticles = computed(() =>
  articles
    .filter((article) => slugify(article.category) === slug.value)
    .sort((first, second) => Date.parse(second.publishedAt) - Date.parse(first.publishedAt)),
)

useSeoMeta({
  title: () => `${categoryTitle.value} News`,
  description: () => `Latest ${categoryTitle.value.toLowerCase()} news and insights.`,
  ogTitle: () => `${categoryTitle.value} News`,
  ogDescription: () => `Latest ${categoryTitle.value.toLowerCase()} news and insights.`,
})

onMounted(() => {
  restartCategoryLoader()
})

watch(slug, () => {
  restartCategoryLoader()
})

onBeforeUnmount(() => {
  if (categoryLoadingTimer) {
    clearTimeout(categoryLoadingTimer)
  }
})

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function formatCategoryTitle(value: string) {
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}
</script>

<template>
  <BaseContainer>
    <NewsCategorySection
      :title="`${categoryTitle} News`"
      :articles="categoryArticles"
      variant="vertical"
      :meta-top="false"
      :meta-keys="['author', 'publishedAt']"
      :loading="isCategoryLoading"
      :skeleton-count="12"
    />
  </BaseContainer>
</template>
