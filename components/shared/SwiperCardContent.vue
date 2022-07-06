<script setup lang="ts">
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';

defineProps({
  spotlight: Object
});

</script>
<template>
  <LazyNuxtLink :to="useMangaDetailPagePath(spotlight.slug)">
    <h3 class="mx-4 mt-6 text-xl md:text-4xl">
      {{ spotlight.newChapter }}
    </h3>
  </LazyNuxtLink>
  <LazyNuxtLink :to="useMangaDetailPagePath(spotlight.slug)">
    <h1 class="text-3xl transition-all line-clamp-1 hover:text-primary md:min-h-[30px] md:text-6xl">
      {{ spotlight.name }}
    </h1>
  </LazyNuxtLink>
  <LazyNuxtLink :to="useMangaDetailPagePath(spotlight.slug)">
    <div class="text-sm line-clamp-3 lg:min-h-[150px] md:text-2xl">
      {{ spotlight.review ? spotlight.review : '' }}
    </div>
  </LazyNuxtLink>
  <ul class="hidden space-x-4 text-lg md:flex">
    <li 
    v-for="(genre, i) in spotlight.genres"
    :key="`genre_spotlight_${i}`"
    class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
      {{genre}}
    </li>
  </ul>
</template>