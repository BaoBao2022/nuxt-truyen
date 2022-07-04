<script lang="ts" setup>
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
import {BookmarkIcon} from "@heroicons/vue/solid";

defineProps({
  title: String,
  mangas: Array
});

</script>

<template>
  <div class="w-full rounded-xl bg-deep-black pb-4 lg:my-4">
    <h2 class="my-6 whitespace-nowrap text-center font-secondary text-3xl text-white lg:text-[160%]">
      {{ title }}
    </h2>
    <ul class="w-full space-y-4 overflow-hidden text-white">
      <li class="flex w-full px-4 py-2 odd:bg-highlight/40" v-for="manga in mangas.slice(0, 5)">
        <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
          <figure class="relative h-[80px] min-h-[80px] w-[60px] min-w-[60px] overflow-hidden rounded-xl">
                <span class="default-span-figure">
                  <img alt="img-preview"
                       :src="manga.thumbnail"
                       decoding="async" data-nimg="fill"
                       class="aspect-w-3 aspect-h-4 absolute object-cover object-center default-img"
                       sizes="100vw"
                       :srcset="manga.thumbnail">
              </span>
          </figure>

        </LazyNuxtLink>
        <div class="flex w-full flex-col justify-center space-y-2 pl-4 ">
          <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
            <h3 class="font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl">
              {{ manga.name }}
            </h3>
          </LazyNuxtLink>

          <h4 class="text-lg">{{ manga.newChapter }}</h4>
          <ul class="flex items-center text-base line-clamp-1 lg:text-xl">
            <li class="inline-block" v-for="(genre, index) in manga.genres.slice(0, 4)">
              <span>{{ genre }}</span>
              <span>
<!--                <BookmarkIcon v-if="index !== 3" class="h-1 w-1" />-->
<!--                .-->
<!--                  <svg v-if="index !== 3" stroke="currentColor" fill="currentColor"-->
<!--                       stroke-width="0" viewBox="0 0 16 16"-->
<!--                       class="inline-block" height="1em" width="1em"-->
<!--                       xmlns="http://www.w3.org/2000/svg">-->
<!--                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">-->

<!--                                    </path>-->
<!--                  </svg>-->
                  </span>
            </li>
          </ul>
        </div>
      </li>
      <li class="flex w-full items-center justify-center rounded-xl py-4 px-4 transition-all hover:cursor-pointer hover:bg-highlight">
        <button class="lg:text-3xl">
          <a href="/browse?comics=api-112&amp;view=all">Xem thêm</a>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
             stroke="currentColor" aria-hidden="true" class="h-8 w-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </li>
    </ul>
  </div>
</template>