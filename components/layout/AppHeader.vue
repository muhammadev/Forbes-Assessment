<script setup lang="ts">
import { categories } from '~/data/categories'

const currentDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
}).format(new Date())

const navigation = computed(() =>
  categories.map((category) => ({
    label: category.name,
    href: `/categories/${category.slug}`,
  })),
)

const isNavMarqueePaused = ref(false)
let resumeNavMarqueeTimer: ReturnType<typeof setTimeout> | undefined

const pauseNavMarquee = () => {
  isNavMarqueePaused.value = true

  if (resumeNavMarqueeTimer) {
    clearTimeout(resumeNavMarqueeTimer)
  }

  resumeNavMarqueeTimer = setTimeout(() => {
    isNavMarqueePaused.value = false
  }, 5000)
}

onBeforeUnmount(() => {
  if (resumeNavMarqueeTimer) {
    clearTimeout(resumeNavMarqueeTimer)
  }
})
</script>

<template>
  <header class="text-brand-content mt-5">
    <BaseContainer>
      <div class="flex items-center justify-between border-y border-brand-content py-3 text-[0.625rem] font-medium leading-none sm:text-xs">
        <p class="flex items-center gap-1.5"><span aria-hidden="true">
          <img src="/images/globe.svg" width="18" height="18" alt="" />
        </span> {{ currentDate }}</p>
        <div class="flex items-center gap-4">
          <button type="button" class="font-medium text-sm flex items-center gap-3" aria-label="Open the menu"><span>The Menu</span> <img src="/images/caret-right.svg" width="18" height="18" alt="" /></button>
          <button type="button" aria-label="Search">
            <img src="/images/search.svg" width="24" height="24" alt="" />
          </button>
        </div>
      </div>

      <div class="flex justify-center py-6">
        <NuxtLink to="/" class="relative inline-flex items-start font-brand leading-[0.72] tracking-[-0.075em]" aria-label="Forbes Middle East home">
          <img src="/images/logo.svg" width="326" height="280" alt="Forbes Middle East" />
        </NuxtLink>
      </div>

      <nav class="border-y border-brand-content" aria-label="Primary navigation">
        <div
          class="header-nav-scroll overflow-x-auto overflow-y-hidden sm:overflow-visible"
          @focusin="pauseNavMarquee"
          @mouseenter="pauseNavMarquee"
          @pointerdown="pauseNavMarquee"
          @scroll="pauseNavMarquee"
          @touchstart.passive="pauseNavMarquee"
          @wheel="pauseNavMarquee"
        >
          <ul
            class="header-nav-marquee flex w-max justify-start gap-6 py-1 sm:w-auto sm:justify-center sm:gap-9"
            :class="{ 'header-nav-marquee-paused': isNavMarqueePaused }"
          >
            <li v-for="item in navigation" :key="item.label">
              <NuxtLink
                :to="item.href"
                class="whitespace-nowrap text-xs font-medium hover:text-brand-red"
                active-class="text-brand-red"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
            <li
              v-for="item in navigation"
              :key="`duplicate-${item.label}`"
              class="sm:hidden"
              :class="{ hidden: isNavMarqueePaused }"
              aria-hidden="true"
            >
              <NuxtLink
                :to="item.href"
                class="whitespace-nowrap text-xs font-medium hover:text-brand-red"
                active-class="text-brand-red"
                tabindex="-1"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </BaseContainer>
  </header>
</template>

<style scoped>
@media (max-width: 639px) {
  .header-nav-scroll {
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  .header-nav-scroll::-webkit-scrollbar {
    display: none;
  }

  .header-nav-marquee {
    animation: header-nav-marquee 18s linear infinite;
  }

  .header-nav-marquee-paused {
    animation: none;
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .header-nav-marquee {
    animation: none;
  }
}

@keyframes header-nav-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-50% - 0.75rem));
  }
}
</style>
