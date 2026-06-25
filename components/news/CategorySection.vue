<script setup lang="ts">
import type { Article, ArticleMetaKey, ArticleVariant } from "~/types/article";
const props = withDefaults(
  defineProps<{
    title: string;
    articles: Article[];
    viewAllHref?: string;
    variant?: ArticleVariant;
    metaTop?: boolean;
    metaKeys?: ArticleMetaKey[]
    loading?: boolean;
    skeletonCount?: number;
  }>(),
  {
    variant: "vertical",
    metaKeys: () => ["author", "publishedAt"],
    loading: false,
    skeletonCount: 8,
  },
);

type GridConfig = {
  classes: string;
  metaKeys: ArticleMetaKey[];
};

const gridConfig = computed<GridConfig>(() => {
  switch (props.variant) {
    case "horizontal-rich":
      return {
        classes: tw("grid gap-x-7 gap-y-8 lg:grid-cols-2 xl:grid-cols-3"),
        metaKeys: ["readingTime", "author"],
      };

    case "vertical":
    default:
      return {
        classes: tw("grid gap-x-7 gap-y-8 sm:grid-cols-3 lg:grid-cols-4"),
        metaKeys: ["author", "publishedAt"],
      };
  }
});
</script>

<template>
  <section class="py-10 sm:py-14">
    <div
      class="flex items-end justify-between gap-4 border-b border-brand-content pb-3"
    >
      <BaseSectionTitle :title="title" class="w-full border-t-0 pt-0" />
      <NuxtLink
        v-if="viewAllHref"
        :to="viewAllHref"
        class="arrow-link shrink-0 text-sm font-medium text-brand-content flex gap-1 items-center"
      >
        View All
        <IconArrowCircleRight class="arrow-link-icon" />
      </NuxtLink>
    </div>
    <div
      v-if="loading"
      class="mt-6"
      :class="gridConfig.classes"
      aria-hidden="true"
    >
      <article
        v-for="index in skeletonCount"
        :key="index"
        class="animate-pulse"
      >
        <div class="aspect-[432/268] rounded-lg bg-brand-content/10" />
        <div class="mt-3 space-y-3">
          <div class="h-3 w-2/3 rounded bg-brand-content/10" />
          <div class="h-5 w-full rounded bg-brand-content/10" />
          <div class="h-5 w-5/6 rounded bg-brand-content/10" />
        </div>
      </article>
    </div>

    <NewsArticleGrid
      v-else
      class="mt-6"
      :articles="articles"
      :variant="variant"
      :meta-top="metaTop"
      :meta-keys="gridConfig.metaKeys"
      :classes="gridConfig.classes"
    />
  </section>
</template>
