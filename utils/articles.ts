import { articles } from '~/data/articles'
import type { Article, ArticleMetaKey, ArticleMetaItem } from '~/types/article'

export const getFeaturedArticle = (): Article | undefined =>
  articles.find((article) => article.isFeatured)

export const getLatestArticles = (limit = articles.length): Article[] =>
  [...articles]
    .sort((first, second) => Date.parse(second.publishedAt) - Date.parse(first.publishedAt))
    .slice(0, limit)

export const getArticlesByCategory = (category: string): Article[] =>
  articles.filter((article) => article.category === category)

export const getArticleBySlug = (slug: string): Article | undefined =>
  articles.find((article) => article.slug === slug)

export function getArticleMetaItems(
  article: Article,
  order: ArticleMetaKey[],
): ArticleMetaItem[] {
  const resolvers: Record<ArticleMetaKey, () => ArticleMetaItem | null> = {
    author: () => {
      if (!article.author) return null

      return {
        key: 'author',
        label: article.author,
        href: '#',
      }
    },

    readingTime: () => {
      if (!article.readingTime) return null

      return {
        key: 'readingTime',
        label:
          typeof article.readingTime === 'number'
            ? `${article.readingTime} Minutes`
            : article.readingTime,
      }
    },

    publishedAt: () => {
      if (!article.publishedAt) return null

      return {
        key: 'publishedAt',
        label: formatDate(article.publishedAt),
        datetime: new Date(article.publishedAt).toISOString(),
      }
    },

    category: () => {
      if (!article.category) return null

      return {
        key: 'category',
        label: article.category,
        href: `/categories/${article.category}`,
      }
    },
  }

  return order.map((key) => resolvers[key]()).filter(isDefined)
}

function formatDate(value: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

function isDefined<T>(value: T | null | undefined): value is T {
  return value != null
}
