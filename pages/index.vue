<template>
  <header
    class="sticky top-0 left-0 | bg-white | border-b py-3 px-4 lg:px-8 | flex items-center">
    <NuxtLink class="block | w-full | font-bold" to="/" area-label="Home">
      <div class="flex items-center justify-center gap-1 | w-fit">
        <img
          class="w-[24px] aspect-square"
          src="~/assets/images/logo.svg"
          alt="MEMOKU" />
        <span>MEMOKU</span>
      </div>
    </NuxtLink>
    <NuxtLink
      to="https://memoku.netlify.app/"
      target="blank"
      class="ml-auto | flex items-center gap-2 | px-4 py-1 | rounded-full | bg-slate-800">
      <span class="text-white text-xs lg:text-sm whitespace-nowrap">
        Go to MEMOKU
      </span>
    </NuxtLink>
  </header>
  <section class="main-section">
    <div
      class="h-[100vw] lg:h-[640px] | flex flex-col items-center justify-center">
      <h1 class="text-[40px] lg:text-[88px] font-bold">MEMOKU</h1>
      <h2 class="text-lg lg:text-[32px]">Simple Task Management</h2>
    </div>
  </section>
  <section
    class="flex flex-col items-center justify-center gap-10 | px-4 py-16 | bg-slate-800">
    <h2 class="text-center lg:text-[24px] text-white">
      MEMOKU is an app for users who want simple and efficient task management.
    </h2>
    <ul class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 | lg:w-[80%]">
      <li
        class="flex flex-col gap-8 | w-full | border border-slate-500 rounded-lg | p-4">
        <div
          class="text-center lg:text-[24px] | flex items-center justify-center gap-2">
          <i class="icon icon-post | text-white"></i>
          <span class="text-white">Easy Memo</span>
        </div>
        <div class="text-center lg:text-[18px] text-white">
          Can easily memo your tasks with a few clicks.
        </div>
      </li>
      <li
        class="flex flex-col gap-8 | w-full | border border-slate-500 rounded-lg | p-4">
        <div
          class="text-center lg:text-[24px] | flex items-center justify-center gap-2">
          <i class="icon icon-notification | text-white"></i>
          <span class="text-white">Notification</span>
        </div>
        <div class="text-center lg:text-[18px] text-white">
          Can set notifications so you don't miss important tasks.
        </div>
      </li>
      <li
        class="flex flex-col gap-8 | w-full | border border-slate-500 rounded-lg | p-4">
        <div
          class="text-center lg:text-[24px] | flex items-center justify-center gap-2">
          <i class="icon icon-tag | text-white"></i>
          <span class="text-white">Tag</span>
        </div>
        <div class="text-center lg:text-[18px] text-white">
          Can set tags to easily classify and manage tasks.
        </div>
      </li>
      <li
        class="flex flex-col gap-8 | w-full | border border-slate-500 rounded-lg | p-4">
        <div
          class="text-center lg:text-[24px] | flex items-center justify-center gap-2">
          <i class="icon icon-date | text-white"></i>
          <span class="text-white">Date</span>
        </div>
        <div class="text-center lg:text-[18px] text-white">
          Can register tasks by date for planned management.
        </div>
      </li>
      <li
        class="flex flex-col gap-8 | w-full | border border-slate-500 rounded-lg | p-4">
        <div
          class="text-center lg:text-[24px] | flex items-center justify-center gap-2">
          <i class="icon icon-theme | text-white"></i>
          <span class="text-white">Theme</span>
        </div>
        <div class="text-center lg:text-[18px] text-white">
          Choose between Light Mode and Dark Mode according to your preference.
        </div>
      </li>
      <li
        class="flex flex-col gap-8 | w-full | border border-slate-500 rounded-lg | p-4">
        <div
          class="text-center lg:text-[24px] | flex items-center justify-center gap-2">
          <i class="icon icon-chart | text-white"></i>
          <span class="text-white">Analisys</span>
        </div>
        <div class="text-center lg:text-[18px] text-white">
          Provides statistics by simply analyzing your tasks.
        </div>
      </li>
      <li
        class="flex flex-col gap-8 | w-full | border border-slate-500 rounded-lg | p-4">
        <div
          class="text-center lg:text-[24px] | flex items-center justify-center gap-2">
          <i class="icon icon-offline | text-white"></i>
          <span class="text-white">Offline</span>
        </div>
        <div class="text-center lg:text-[18px] text-white">
          Catch up on your tasks even when you're offline with our app.
        </div>
      </li>
    </ul>
  </section>
  <section
    class="last-section | flex flex-col items-center justify-center | py-40">
    <ul class="flex flex-col items-center">
      <li class="lg:text-[24px]">Perfect task management you won't forget.</li>
      <li class="lg:text-[24px]">Improved concentration to achieve goals.</li>
      <li class="lg:text-[24px]">Efficient life through time management.</li>
      <li class="lg:text-[24px]">Download and use MEMOKU now!</li>
    </ul>
    <NuxtLink
      to="https://memoku.netlify.app/"
      target="blank"
      class="flex items-center gap-2 | px-8 py-2 mt-8 | rounded-full | bg-slate-800">
      <span class="lg:text-[20px] text-white">Go to MEMOKU</span>
      <i class="icon icon-arrow-right | text-white"></i>
    </NuxtLink>
  </section>
  <footer class="px-4 py-3 | flex | border-t">
    <div class="flex items-center gap-1">
      <NuxtLink
        to="https://github.com/zabefofoon/memoku-guide"
        target="_blank"
        class="flex | p-1 | rounded-full bg-slate-700">
        <i class="icon icon-github | | text-white text-lg"></i>
      </NuxtLink>
      <NuxtLink to="https://github.com/zabefofoon/memoku-guide" target="_blank">
        <span class="text-sm">MEMOKU</span>
      </NuxtLink>
    </div>
    <div class="ml-auto">v1.0.0</div>
  </footer>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'MEMOKU Guide',
  ogTitle: 'MEMOKU Guide',
  description: 'Simple Task Management',
  ogDescription: 'Simple Task Management',
})
</script>
<style scoped lang="scss">
.main-section {
  background: url('~/assets/images/background-1-mo.png') 50% 50% no-repeat;
  background-size: cover;

  @media (min-width: 1024px) {
    background: url('~/assets/images/background-1-pc.png') 50% 50% no-repeat;
    background-size: cover;
  }
}

.last-section {
  background: url('~/assets/images/background-2-mo.png') 50% 50% no-repeat;
  background-size: cover;

  @media (min-width: 1024px) {
    background: url('~/assets/images/background-2-pc.png') 50% 50% no-repeat;
    background-size: cover;
  }
}
</style>
