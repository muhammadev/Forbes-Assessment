<script setup lang="ts">
import type { ArticleBodyBlock } from '~/types/article'

defineProps<{ blocks: ArticleBodyBlock[] }>()
</script>

<template>
  <div class="space-y-5 text-sm leading-6 text-brand-content sm:text-base sm:leading-7">
    <p v-for="(block, index) in blocks" :key="`${block.type}-${index}`">{{ block.text }}</p>
  </div>
</template>
