<script setup lang="ts">
import { articles } from "~/data/articles";
import { categoryHighlights } from "~/data/categoryHighlights";
import { getFeaturedArticle, getLatestArticles } from "~/utils/articles";

const featuredArticle = getFeaturedArticle();
const latestArticles = getLatestArticles(7).filter(
  (article) => article.id !== featuredArticle?.id,
);
const worldArticles = articles.slice(7, 11);
const technologyArticles = articles.filter(
  (article) =>
    article.category === "innovation" || article.category === "entrepreneurs",
);
const podcastArticles = articles.slice(2, 8);
const isFeaturedArticleLoading = ref(false);
const areNewsSectionsLoading = ref(false);

useSeoMeta({
  title: "The Forbes News",
  description:
    "Latest world, business, technology, health, sports, culture, and politics news.",
  ogTitle: "The Forbes News",
  ogDescription:
    "Latest world, business, technology, health, sports, culture, and politics news.",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <BaseContainer>
    <div class="mt-10 md:mt-20 mb-[30px]">
      <NewsCategoryHighlights :highlights="categoryHighlights" />
    </div>
    <section v-if="featuredArticle || isFeaturedArticleLoading" class="my-8 sm:my-10">
      <NewsFeaturedArticle
        :article="featuredArticle"
        :loading="isFeaturedArticleLoading"
      />
    </section>

    <NewsLatestNewsGrid
      :articles="latestArticles"
      view-all-href="#"
      :loading="areNewsSectionsLoading"
    />

    <NewsWorldNewsGrid
      :articles="worldArticles"
      view-all-href="#"
      :loading="areNewsSectionsLoading"
    />

    <NewsCategorySection
      title="Technology News"
      :articles="technologyArticles.slice(0, 4)"
      :meta-top="true"
      :loading="areNewsSectionsLoading"
      :skeleton-count="4"
      view-all-href="#"
    />

    <NewsCategorySection
      title="Podcasts"
      :articles="podcastArticles"
      :variant="'horizontal-rich'"
      :meta-top="false"
      :meta-keys="['readingTime', 'author']"
      :loading="areNewsSectionsLoading"
      :skeleton-count="6"
      view-all-href="#"
    />
  </BaseContainer>
</template>
