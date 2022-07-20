<script lang="ts" setup>
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
import {EyeIcon} from '@heroicons/vue/solid';
import {randomColors} from '~/serveless/utils';
import {TailwindColors} from '~/contants';
import {PropType} from 'vue';
import {Manga} from '~/types';

const {data: mangas, pending} = useLazyFetch(`/api/top-month`);

</script>

<template>
  <div class="px-3 mb-4 mt-8" v-if="!pending">
    <h2 class="flex h-[20px] text-2xl font-semibold flex justify-start items-center text-black">
      🏆 BXH Hot
    </h2>
    <ul class="flex justify-around">
      <li class="w-[33.33333%]">
        <NuxtLink to="/filter?view=month" rel="nofollow" title="BXH truyện tranh theo tháng"
                  class="rank-active text-base">
          <span class="px-3">
            Truyện hot tháng này
          </span>
        </NuxtLink>
      </li>
      <li class="w-[33.33333%] text-center">
        <NuxtLink to="/filter?view=week" rel="nofollow" title="BXH truyện tranh theo tuần" class="text-base">
          <span class="px-3">
            Trong tuần
          </span>
        </NuxtLink>
      </li>
      <li class="w-[33.33333%] text-center">
        <NuxtLink to="/filter?view=day" rel="nofollow" title="BXH truyện tranh theo ngày" class="text-base">
          <span class="px-3">
            Truyện ngày
          </span>
        </NuxtLink>
      </li>
    </ul>
    <div class="rank-list">
      <ul class="overflow-hidden">
        <li class="flex w-full mt-3 rank_list-item" v-for="(manga, mI) in mangas" :key="manga.slug">
          <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)" class="flex items-center">
            ️<span class="text-4xl mr-2 w-[25px]" v-if="mI == 0">🥇</span>
            ️<span class="text-4xl mr-2 w-[25px]" v-if="mI == 1">️🥈</span>
            ️<span class="text-4xl mr-2 w-[25px]" v-if="mI == 2">🥉</span>
            ️<span class="text-3xl mr-2 w-[25px] font-secondary flex items-center justify-center"
                   v-if="mI > 2">️{{ mI + 1 }}</span>
            <figure class="relative h-[65px] w-[60px]">
            <span class="rounded-xl  h-[65px] w-[60px]">
              <nuxt-img
                  class=" h-[65px] w-[60px] object-cover object-center rounded-xl"
                  format="webp"
                  loading="lazy"
                  fil="fill"
                  :src="manga.thumbnail"
                  sizes="sm:100vw md:100vw lg:100vw">
                </nuxt-img>
            </span>
            </figure>
          </LazyNuxtLink>
          <div class="flex w-full flex-col pl-4">
            <h3
                class="transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl">
              <a class="text-xl font-semibold">{{ manga.name }}</a>
            </h3>
            <a class="text-base text-mode">
              {{ manga.newChapter }}
            </a>
            <div class="flex align-center">
              <i class="text-lg text-mode view line-clamp-1"> {{ manga.review }}</i>
            </div>
            <div class="flex align-center">
              <i class="text-base text-mode view line-clamp-1"> {{ manga.view }}</i>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>