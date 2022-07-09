<script lang="ts" setup>
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
import {randomColors} from '~/serveless/utils';
import {TailwindColors} from '~/contants';
import {Manga} from '~~/types';
import {ChevronRightIcon} from "@heroicons/vue/solid";

const comic = ref("");
const {
  data: mangas,
  pending,
} = await useAsyncData<Manga[]>('new-mangas', () => $fetch(`/api/manga-new?comic=${comic.value}`));
</script>

<template>
  <div v-if="pending">
    <CommonSearchLoading/>
  </div>
  <div class="w-full rounded-xl pb-4 lg:my-4 col-span-3" v-if="!pending">
    <h2
        class="items-center	justify-start whitespace-nowrap font-secondary text-3xl lg:text-[160%] h-[40px] flex page-title px-3">
      Gợi ý cho bạn
      <ChevronRightIcon class="h-8 w-8"/>
    </h2>
    <ul class="w-full space-y-4 overflow-hidden text-white grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
      <li class="flex px-3 py-1 w-full inline-grid" v-for="manga in mangas" :key="manga.slug"
          style="margin-top: 0 !important">
        <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
          <figure
              class="image relative h-[200px] md:h-[197px] lg:h-[200px] lg:w-[158px] overflow-hidden rounded-sm">
                        <span class="default-span-figure">
                            <nuxt-img fil="fill" sizes="159px md:159px lg:159px" format="webp" loading="lazy"
                                      :src="manga.thumbnail"
                                      class="aspect-w-3 aspect-h-4 absolute object-cover object-center default-img">
                            </nuxt-img>
                        </span>
          </figure>
        </LazyNuxtLink>
        <div class="flex w-full flex-col justify-center space-y-2 mt-4">
          <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
            <h3
                class="font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl">
              {{ manga.name }}
            </h3>
          </LazyNuxtLink>
          <div class="flex align-center place-content-between">
            <h4 class="text-lg">{{ manga.newChapter }}</h4>
            <div class="flex">
              <!-- <EyeIcon class="h-6 w-5 mr-2" style="margin-top: 1px" /> -->
              <h4 class="text-lg"> {{ manga.updatedAt }}</h4>
            </div>
          </div>
          <ul class=" space-x-4 text-lg md:flex flex flex-wrap">
            <li class="flex w-fit max-w-[70px] items-center whitespace-nowrap"
                style="margin-left: 0px; margin-right: 0px; margin: 3px"
                v-for="(genre, i) in manga.genres.slice(0, 4)" :key="`genre_${i}`"
                :style="{ 'background-color': randomColors(TailwindColors, i) }">
              {{ genre }}
            </li>
          </ul>
        </div>
      </li>
      <li
          class="flex w-full items-center justify-center rounded-xl py-4 px-4 transition-all hover:cursor-pointer hover:bg-highlight">
        <button class="lg:text-3xl">
          <a href="#">Xem thêm</a>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
             stroke="currentColor" aria-hidden="true" class="h-8 w-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </li>
    </ul>
  </div>
</template>