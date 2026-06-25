<script setup lang="ts">
import type { ArticleMetaItem } from "~/types/article";

defineProps<{
  metaItems: ArticleMetaItem[];
}>();
</script>

<template>
  <div
    class="text-xs capitalize"
  >
    <template v-for="(meta, index) in metaItems" :key="meta.key">
      <span
        v-if="index > 0"
        aria-hidden="true"
        class="mx-3"
        >—</span
      >

      <time v-if="meta.key === 'publishedAt'" :datetime="meta.datetime">
        {{ meta.label }}
      </time>

      <a v-else-if="meta.href" :href="meta.href">
        {{ meta.label }}
      </a>

      <span v-else>
        {{ meta.label }}
      </span>
    </template>
  </div>
</template>
