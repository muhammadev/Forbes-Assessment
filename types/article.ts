import type { CategorySlug } from '~/types/category'

export type ArticleImage = {
  src: string
  alt: string
}

export type Article = {
  id: number
  slug: string
  title: string
  excerpt: string
  category: CategorySlug
  author: string
  publishedAt: string
  readingTime: string
  image: ArticleImage
  tags?: string[]
  updatedAt?: string
  isFeatured?: boolean
  isTrending?: boolean
}
