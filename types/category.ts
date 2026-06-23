export type CategorySlug =
  | 'business'
  | 'leadership'
  | 'entrepreneurs'
  | 'innovation'
  | 'lifestyle'
  | 'money'
  | 'lists'

export type Category = {
  id: number
  name: string
  slug: CategorySlug
}
