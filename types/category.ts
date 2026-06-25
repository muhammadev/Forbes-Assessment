export type Category = {
  id: number
  name: string
  slug: string
}

export type CategoryHighlight = {
  id: number
  title: string
  slug: string
  description: string
  image: {
    src: string
    alt: string
  }
}
