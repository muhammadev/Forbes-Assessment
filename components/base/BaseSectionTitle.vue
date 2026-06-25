<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="border-t border-brand-black pt-4">
    <h2 class="text-heading-2 font-semibold text-brand-content sm:text-heading-1">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 max-w-2xl text-sm leading-6 text-brand-content sm:text-base">
      {{ subtitle }}
    </p>
  </div>
</template>
