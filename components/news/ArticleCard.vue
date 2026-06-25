<script setup lang="ts">
import type {
  Article,
  ArticleMetaKey,
  ArticleMetaItem,
  ArticleVariant,
} from "~/types/article";
import { getArticleCardConfig } from "~/utils/articleCardConfig";
const props = withDefaults(
  defineProps<{
    article: Article;
    variant?: ArticleVariant;
    metaTop?: boolean;
    metaKeys?: ArticleMetaKey[];
    mediaRight?: boolean;
  }>(),
  {
    variant: "vertical",
    metaKeys: () => ["author", "publishedAt"],
    mediaRight: false,
  },
);

const metaItems = computed<ArticleMetaItem[]>(() => {
  return getArticleMetaItems(props.article, props.metaKeys);
});

const cardConfig = computed(() =>
  getArticleCardConfig(props.variant, { mediaRight: props.mediaRight }),
);
</script>

<template>
  <article class="group">
    <div
      class="focus-visible:outline-none relative"
      :class="cardConfig.containerClasses"
    >
      <!-- Featured Image -->
      <NuxtLink
        :to="`/articles/${article.slug}`"
        class="relative inline-block overflow-hidden"
        :class="cardConfig.imgClasses.wrapper"
      >
        <NuxtImg
          v-if="article.featuredImage"
          :src="article.featuredImage"
          :alt="article.title"
          :width="cardConfig.imgDimensions.width"
          :height="cardConfig.imgDimensions.height"
          class="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-focus-within:scale-110"
          :class="cardConfig.imgClasses.img"
        />

        <div
          v-if="article.isVideo || variant === 'featured-overlay'"
          class="absolute inset-0 bg-gradient-to-b from-[rgba(32,33,36,0)] to-[rgba(32,33,36,0.6)]"
        />

        <div
          v-if="article.isVideo"
          class="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/15 backdrop-blur-[20px]"
        >
          <NuxtImg
            class="translate-x-1/4"
            src="/images/icons/play.svg"
            width="16px"
            height="21px"
          />
        </div>
      </NuxtLink>

      <!-- Content -->
      <div
        class="flex justify-between"
        :class="[
          cardConfig.contentClasses.wrapper,
          metaTop ? 'flex-col' : 'flex-col-reverse',
        ]"
      >
        <NewsArticleMeta
          :class="cardConfig.contentClasses.meta"
          :meta-items="metaItems"
        />

        <NuxtLink :to="`/articles/${article.slug}`">
          <time
            v-if="variant === 'featured-split'"
            class="inline-block rounded-lg bg-brand-content text-white text-sm font-medium px-5 py-2 text-center"
            :datetime="article.publishedAt"
            >{{
              new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            }}</time
          >

          <h3 :class="cardConfig.contentClasses.title">
            {{ article.title }}
          </h3>

          <p
            v-if="variant === 'horizontal-rich'"
            :class="cardConfig.contentClasses.excerpt"
          >
            {{ article.excerpt }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
