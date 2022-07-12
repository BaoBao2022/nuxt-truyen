<script lang="ts" setup>
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
import {EyeIcon} from '@heroicons/vue/solid';
import {randomColors} from '~/serveless/utils';
import {TailwindColors} from '~/contants';
import {PropType} from 'vue';
import {Manga} from '~/types';

defineProps({
  title: String,
  limit: {
    type: Number,
    default: 7
  },
  mangas: Array as PropType<Manga[]>,
});

</script>

<template>
  <div class="w-full pb-4 lg:my-4">
    <a class="items-center justify-start whitespace-nowrap font-secondary text-1xl h-[40px] flex px-3 custom-title">
     Top tháng
    </a>
    <ul class="w-full space-y-4 overflow-hidden text-white">
      <li class="flex w-full px-4 py-2" v-for="manga in mangas.slice(0, limit)" :key="manga.slug">
        <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
          <figure class="relative h-[120px] w-[100px]">
            <span class="default-span-figure">
              <nuxt-img format="webp" loading="lazy" fil="fill" :src="manga.thumbnail"
                        class="aspect-w-3 aspect-h-4 absolute object-cover object-center default-img"
                        sizes="sm:100vw md:100vw lg:100vw" :srcset="manga.thumbnail">
                </nuxt-img>
            </span>
          </figure>
        </LazyNuxtLink>
        <div class="flex w-full flex-col justify-center space-y-2 pl-4 ">
          <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
            <h3
                class="font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl chap-title">
              {{ manga.name }}
            </h3>
          </LazyNuxtLink>
          <a class="text-lg text-mode">{{ manga.newChapter }}</a>

          <div class="flex align-center">
            <EyeIcon class="h-6 w-5 mr-2 text-mode" style="margin-top: 1px"/>
            <a class="text-lg text-mode"> {{ manga.view }}</a>
          </div>

          <ul class="hidden space-x-4 text-lg md:flex">
            <li class="flex w-fit max-w-[70px] items-center whitespace-nowrap"
                v-for="(genre, i) in manga.genres.slice(0, 4)" :style="{ 'color': randomColors(TailwindColors, i) }">
              {{ genre }}
            </li>
          </ul>
        </div>
      </li>
      <li
          class="flex w-full items-center justify-center rounded-xl py-4 px-4 transition-all hover:cursor-pointer hover:bg-highlight">
        <button class="lg:text-3xl">
          <a href="/browse?comics=api-112&amp;view=all">Xem thêm</a>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
             aria-hidden="true" class="h-8 w-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </li>
    </ul>
  </div>
</template>