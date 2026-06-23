import { articles } from '~/data/articles'
import type { Article } from '~/types/article'
import type { CategorySlug } from '~/types/category'

export const getFeaturedArticle = (): Article | undefined =>
  articles.find((article) => article.isFeatured)

export const getLatestArticles = (limit = articles.length): Article[] =>
  [...articles]
    .sort((first, second) => Date.parse(second.publishedAt) - Date.parse(first.publishedAt))
    .slice(0, limit)

export const getArticlesByCategory = (category: CategorySlug): Article[] =>
  articles.filter((article) => article.category === category)

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((article) => article.slug === slug)
