import type { ArticleVariant } from '~/types/article'

export type ArticleCardConfig = {
  imgDimensions: {
    width: number
    height: number
  }
  sizes: string
  containerClasses: string
  imgClasses: {
    wrapper: string
    img: string
  }
  contentClasses: {
    wrapper: string
    title: string
    excerpt: string
    meta: string
  }
}

export type ArticleCardConfigOptions = {
  mediaRight?: boolean
}

export function getArticleCardConfig(
  variant: ArticleVariant,
  options: ArticleCardConfigOptions = {},
): ArticleCardConfig {
  const { mediaRight = false } = options

  switch (variant) {
    case 'horizontal-compact':
      return {
        imgDimensions: { width: 312, height: 237 },
        sizes: mediaRight ? '100vw md:312px' : '100vw sm:197px',
        containerClasses: tw(
          `grid ${mediaRight ? 'md:grid-cols-[minmax(180px,1fr)_minmax(180px,312px)]' : 'sm:grid-cols-[minmax(180px,197px)_minmax(180px,1fr)]'} sm:gap-6 md:items-center`,
        ),
        imgClasses: {
          wrapper: tw(
            `max-h-[312px] ${mediaRight ? 'md:order-last md:max-w-[312px]' : 'md:max-w-[197px]'} w-full rounded`,
          ),
          img: tw('aspect-[4/3] object-cover'),
        },
        contentClasses: {
          wrapper: tw('text-brand-content'),
          title: tw('text-heading-5 font-semibold leading-6 sm:text-heading-5'),
          excerpt: tw('text-sm mt-2'),
          meta: tw('my-2'),
        },
      }

    case 'horizontal-rich':
      return {
        imgDimensions: { width: 170, height: 200 },
        sizes: '100vw sm:170px',
        containerClasses: tw(
          'grid gap-[14px] items-start h-auto md:items-center md:h-[200px] sm:grid-flow-col',
        ),
        imgClasses: {
          wrapper: tw(
            'w-full sm:w-[170px] max-h-[300px] sm:h-[200px] flex-shrink-0 rounded',
          ),
          img: tw('w-full h-full'),
        },
        contentClasses: {
          wrapper: 'text-brand-content',
          title: tw(
            'mt-3 text-heading-5 font-semibold leading-6 sm:text-heading-5',
          ),
          excerpt: tw('text-sm mt-2'),
          meta: tw('my-2'),
        },
      }

    case 'featured-overlay':
      return {
        imgDimensions: { width: 628, height: 490 },
        sizes: '100vw lg:628px',
        containerClasses: 'relative block h-full',
        imgClasses: {
          wrapper: tw('h-full min-h-[360px] rounded'),
          img: tw('w-full h-full'),
        },
        contentClasses: {
          wrapper: 'absolute bottom-0 left-0 right-0 p-6 text-white',
          title: tw('text-xl font-medium'),
          excerpt: tw('text-sm mt-2'),
          meta: tw('my-2'),
        },
      }

    case 'featured-split':
      return {
        imgDimensions: { width: 821, height: 588 },
        sizes: '100vw lg:660px',
        containerClasses: 'group block h-full relative',
        imgClasses: {
          wrapper: tw('md:h-full min-h-[360px] rounded'),
          img: tw('h-full object-cover'),
        },
        contentClasses: {
          wrapper:
            'text-brand-content md:absolute start-5 top-5 flex flex-col-reverse justify-between rounded-lg md:h-[90%] md:w-1/2 md:max-w-[408px] py-5 md:px-5 bg-brand-paper',
          title: tw('text-[26px] font-medium mt-6'),
          excerpt: tw('text-sm mt-2'),
          meta: tw('md:mb-[60px] flex gap-3 text-xs my-2'),
        },
      }

    case 'vertical':
    default:
      return {
        imgDimensions: { width: 432, height: 268 },
        sizes: '100vw sm:33vw lg:25vw',
        containerClasses: tw('flex flex-col w-full h-full'),
        imgClasses: {
          wrapper: tw('relative rounded-lg'),
          img: tw(''),
        },
        contentClasses: {
          wrapper: tw('mt-3 flex-grow'),
          title: tw('text-heading-5 font-semibold leading-6 sm:text-heading-5'),
          excerpt: tw('text-sm mt-2'),
          meta: tw('my-2'),
        },
      }
  }
}
