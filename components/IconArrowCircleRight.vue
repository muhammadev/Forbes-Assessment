<script setup lang="ts">
withDefaults(defineProps<{ size?: number | string }>(), {
  size: 20,
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 10H14M10.5 13.5L14 10L10.5 6.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="10" cy="10" r="9.5" stroke="currentColor" />
  </svg>
</template>
