<script setup lang="ts">
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';

defineProps({
  spotlight: Object
})
</script>

<template>
  <NuxtLink :to="useMangaDetailPagePath(spotlight.slug)">
    <h3 class="mx-4 mt-6 text-xl md:text-4xl">
      {{ spotlight.newChapter }}
    </h3>
  </NuxtLink>
  <NuxtLink :to="useMangaDetailPagePath(spotlight.slug)">
    <h1 class="text-3xl transition-all line-clamp-1 hover:text-primary md:min-h-[30px] md:text-6xl">
      {{ spotlight.name }}
    </h1>
  </NuxtLink>
  <NuxtLink :to="useMangaDetailPagePath(spotlight.slug)">
    <div class="text-sm line-clamp-3 md:min-h-[60px] md:text-2xl">
      {{ spotlight.review ? spotlight.review : '' }}
    </div>
  </NuxtLink>
  <ul class="hidden space-x-4 text-lg md:flex">
    <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
      Action
    </li>
    <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
      Fantasy
    </li>
    <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
      Manga
    </li>
    <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
      Shounen
    </li>
    <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
      Supernatural
    </li>
  </ul>
</template>