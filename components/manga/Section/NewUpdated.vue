<script lang="ts" setup>
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
import { EyeIcon } from '@heroicons/vue/solid';
import { randomColors } from '~/serveless/utils';
import { TailwindColors } from '~/contants';

const { data: mangas, pending } = useFetch("/api/manga-new", {
    initialCache: true,
    lazy: true,
})

defineProps({
    title: String,
});

</script>

<template>
    <div class="w-full rounded-xl pb-4 lg:my-4 col-span-3" v-if="!pending">
        <h2 class="my-6 whitespace-nowrap text-center font-secondary text-3xl text-white lg:text-[160%]">
            {{ title }}
        </h2>
        <ul class="w-full space-y-4 overflow-hidden text-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
            <li class="flex px-4 py-2 odd:bg-highlight/40 w-full inline-grid" v-for="manga in mangas" :key="manga.slug"
                style="margin-top: 0px !important">
                <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
                    <figure class="relative h-[180px] lg:h-[300px] w-full overflow-hidden rounded-xl">
                        <span class="default-span-figure">
                            <img alt="img-preview" :src="manga.thumbnail" decoding="async" data-nimg="fill"
                                class="aspect-w-3 aspect-h-4 absolute object-cover object-center default-img"
                                sizes="100vw" :srcset="manga.thumbnail">
                        </span>
                    </figure>
                </LazyNuxtLink>
                <div class="flex w-full flex-col justify-center space-y-2 pl-4 mt-4">
                    <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
                        <h3
                            class="font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl">
                            {{ manga.name }}
                        </h3>
                    </LazyNuxtLink>
                    <div class="flex align-center place-content-between">
                        <h4 class="text-lg">{{ manga.newChapter }}</h4>

                        <div class="flex">
                            <EyeIcon class="h-6 w-5 mr-2" style="margin-top: 1px" />
                            <h4 class="text-lg"> {{ manga.view }}</h4>
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