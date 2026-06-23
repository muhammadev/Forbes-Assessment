<template>
  <footer class="mt-auto bg-brand-black text-white">
    <BaseContainer>
      <div class="grid gap-10 py-10 sm:py-12 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p class="font-brand text-3xl font-bold tracking-[-0.07em]">FORBES</p>
          <p class="mt-1 text-[0.6rem] font-bold tracking-[0.22em] text-zinc-300">MIDDLE EAST</p>
        </div>
        <nav aria-label="Footer navigation">
          <p class="text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">Explore</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li><a href="#business" class="hover:text-brand-red">Business</a></li>
            <li><a href="#leadership" class="hover:text-brand-red">Leadership</a></li>
            <li><a href="#lists" class="hover:text-brand-red">Lists</a></li>
          </ul>
        </nav>
        <nav aria-label="Company navigation">
          <p class="text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">Company</p>
          <ul class="mt-4 space-y-2 text-sm">
            <li><a href="#" class="hover:text-brand-red">About</a></li>
            <li><a href="#" class="hover:text-brand-red">Contact</a></li>
            <li><a href="#" class="hover:text-brand-red">Privacy</a></li>
          </ul>
        </nav>
      </div>
      <div class="border-t border-zinc-700 py-5 text-xs text-zinc-400">
        © {{ new Date().getFullYear() }} Forbes Middle East. All rights reserved.
      </div>
    </BaseContainer>
  </footer>
</template>
