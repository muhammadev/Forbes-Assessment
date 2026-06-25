<script setup lang="ts">
import type { ArticleBodyBlock } from '~/types/article'

defineProps<{ blocks: ArticleBodyBlock[] }>()
</script>

<template>
  <div class="space-y-6 text-sm leading-6 text-brand-content">
    <template v-for="(block, index) in blocks" :key="`${block.type}-${index}`">
      <p v-if="block.type === 'paragraph'">{{ block.text }}</p>

      <ul v-else class="list-disc space-y-2 ps-5">
        <li v-for="item in block.items" :key="item">{{ item }}</li>
      </ul>
    </template>
  </div>
</template>
