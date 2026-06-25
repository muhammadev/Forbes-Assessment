export type ArticleBodyBlock = {
  type: 'paragraph'
  text: string
}

export type Article = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  body?: ArticleBodyBlock[]
  category: string
  author: string
  publishedAt: string
  readingTime: string
  featuredImage: string | null
  isVideo: boolean
  tags?: string[]
  updatedAt?: string
  isFeatured?: boolean
  isTrending?: boolean
}

export type ArticleVariant = 'vertical' | 'horizontal-compact' | 'horizontal-rich' | 'featured-overlay' | 'featured-split'

export type ArticleMetaKey = 'author' | 'readingTime' | 'publishedAt' | 'category'

export type ArticleMetaItem = {
  key: ArticleMetaKey
  label: string
  href?: string
  datetime?: string
}