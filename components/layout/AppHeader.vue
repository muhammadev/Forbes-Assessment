<script setup lang="ts">
import { categories } from '~/data/categories'
</script>

<template>
  <header class="bg-white text-brand-black">
    <BaseContainer>
      <div class="flex min-h-20 items-center justify-between border-b border-brand-line py-4 sm:min-h-24">
        <a href="/" class="group inline-flex flex-col leading-none" aria-label="Forbes Middle East home">
          <span class="font-brand text-3xl font-bold tracking-[-0.07em] sm:text-4xl">FORBES</span>
          <span class="mt-1 text-[0.6rem] font-bold tracking-[0.22em]">MIDDLE EAST</span>
        </a>

        <button class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] lg:hidden" type="button" aria-label="Open navigation">
          <span class="grid gap-1" aria-hidden="true"><span class="block h-px w-4 bg-current" /><span class="block h-px w-4 bg-current" /></span>
          Menu
        </button>

        <div class="hidden items-center gap-6 lg:flex">
          <a href="#" class="text-xs font-bold uppercase tracking-[0.14em] hover:text-brand-red">Subscribe</a>
          <button type="button" class="text-xs font-bold uppercase tracking-[0.14em] hover:text-brand-red" aria-label="Search">Search</button>
        </div>
      </div>

      <nav class="hidden lg:block" aria-label="Primary navigation">
        <ul class="flex items-center gap-7 overflow-x-auto py-4">
          <li v-for="category in categories" :key="category.id">
            <a :href="`#${category.slug}`" class="whitespace-nowrap text-xs font-bold uppercase tracking-[0.12em] hover:text-brand-red">
              {{ category.name }}
            </a>
          </li>
        </ul>
      </nav>
    </BaseContainer>
  </header>
</template>
