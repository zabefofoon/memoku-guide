<template>
  <header
    class="sticky top-0 left-0 | bg-white | border-b py-3 px-8 | flex items-center">
    <NuxtLink class="block | w-full | font-bold" to="/" area-label="Home">
      <div class="flex items-center justify-center gap-1 | w-fit">
        <img
          class="w-[24px] aspect-square"
          src="~/assets/images/logo-75x75.png"
          alt="MEMOKU" />
        <span>MEMOKU</span>
      </div>
    </NuxtLink>
    <NuxtLink
      to="https://memoku.netlify.app/"
      target="blank"
      class="ml-auto | flex items-center gap-2 | px-4 py-1 | rounded-full | bg-slate-600">
      <span class="text-white | text-sm whitespace-nowrap">Go to MEMOKU</span>
    </NuxtLink>
  </header>
  <section>
    <div class="lg:h-[640px] | flex flex-col items-center justify-center">
      <h1 class="lg:text-[88px] font-bold">MEMOKU</h1>
      <h2 class="lg:text-[40px]">Simple Task Management</h2>
      <NuxtLink
        to="https://memoku.netlify.app/"
        target="blank"
        class="flex items-center gap-2 | px-8 py-2 mt-8 | rounded-full | bg-slate-600">
        <span class="lg:text-[20px] text-white">Go to MEMOKU</span>
        <i class="icon icon-arrow-right | text-white"></i>
      </NuxtLink>
    </div>
  </section>
  <section
    class="flex flex-col items-center justify-center gap-10 | py-16 | bg-slate-900">
    <h2 class="text-center lg:text-[24px] text-white">
      MEMOKU is an app for users who want simple and efficient task management.
    </h2>
    <ul class="grid grid-cols-4 gap-8 | w-[80%]">
      <li
        class="flex flex-col gap-8 | w-full | border border-slate-500 rounded-lg | p-4">
        <div
          class="text-center lg:text-[24px] | flex items-center justify-center gap-2">
          <i class="icon icon-post | text-white"></i>
          <span class="text-white">Easy Memo</span>
        </div>
        <div class="text-center lg:text-[18px] text-white">
          You can easily memo your tasks with a few clicks.
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
          You can set notifications so you don't miss important tasks.
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
          You can set tags to easily classify and manage tasks.
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
          You can register tasks by date for planned management.
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
    </ul>
  </section>
  <section class="flex flex-col items-center justify-center | py-40">
    <ul class="flex flex-col items-center">
      <li class="lg:text-[24px]">Perfect task management you won't forget.</li>
      <li class="lg:text-[24px]">Improved concentration to achieve goals.</li>
      <li class="lg:text-[24px]">Efficient life through time management.</li>
      <li class="lg:text-[24px]">Download and use MEMOKU now!</li>
    </ul>
    <NuxtLink
      to="https://memoku.netlify.app/"
      target="blank"
      class="flex items-center gap-2 | px-8 py-2 mt-8 | rounded-full | bg-slate-600">
      <span class="lg:text-[20px] text-white">Go to MEMOKU</span>
      <i class="icon icon-arrow-right | text-white"></i>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts"></script>
