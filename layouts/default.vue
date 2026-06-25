<template>
  <div class="flex min-h-screen flex-col bg-brand-paper">
    <LayoutAppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
