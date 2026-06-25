<script setup lang="ts">
import type { Article, ArticleMetaKey, ArticleVariant } from "~/types/article";
withDefaults(
  defineProps<{
    articles: Article[];
    variant?: ArticleVariant;
    metaTop?: boolean;
    metaKeys?: ArticleMetaKey[];
    classes?: string;
  }>(),
  {
    variant: "vertical",
    classes: tw("grid gap-x-7 gap-y-8 sm:grid-cols-3 lg:grid-cols-4"),
    metaKeys: () => ["author", "publishedAt"],
  },
);
</script>

<template>
  <div :class="classes">
    <NewsArticleCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
      :variant="variant"
      :meta-top="metaTop"
      :meta-keys="metaKeys"
    />
  </div>
</template>
