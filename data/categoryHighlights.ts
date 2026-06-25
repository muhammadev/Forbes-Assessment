import type { CategoryHighlight } from '~/types/category'

export const categoryHighlights: CategoryHighlight[] = [
  { id: 1, title: 'World News', slug: 'world-news', description: 'Economic policies are shaping international markets', image: { src: '/images/highlights/cat-1.png', alt: 'World news desk' } },
  { id: 2, title: 'Technology', slug: 'technology', description: 'The latest trends in AI and innovation', image: { src: '/images/highlights/cat-2.png', alt: 'Technology equipment' } },
  { id: 3, title: 'Health', slug: 'health', description: 'Analyzing the effects of global health policies', image: { src: '/images/highlights/cat-3.png', alt: 'Healthcare professional' } },
  { id: 4, title: 'Sports', slug: 'sports', description: 'Affect the integrity and future of professional sports', image: { src: '/images/highlights/cat-4.png', alt: 'Professional sports event' } },
]
