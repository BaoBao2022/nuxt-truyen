<script lang="ts" setup>
import {keys} from "~/types";
import {useStorage} from '@vueuse/core';
import {Swiper, SwiperSlide} from 'swiper/vue';
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath'

const visitedComics: any = await useStorage(keys.visitedComics, {
  serializer: {
    read: (v: any) => v ? JSON.parse(v) : null,
    write: (v: any) => JSON.stringify(v),
  }
});
</script>

<template>
  <div class="visited-comics px-3 mb-4">
    <h2 class="flex h-[40px] text-2xl font-semibold flex justify-start items-center text-white">
      📚 Lịch sử đọc
    </h2>
    <ClientOnly v-if="visitedComics && visitedComics.length > 0">
      <swiper
          :slides-per-view="4"
          :space-between="14">
        <swiper-slide v-for="visited in visitedComics">
          <NuxtLink :to="useMangaDetailPagePath(visited.slug)">
            <div class="duration-200 ease-in-out transition-all">
              <img loading="lazy"
                   class="rounded h-[100px] w-full object-cover"
                   :src="visited.thumbnail"
                   fil="fill">
              <h2 class="text-base line-clamp-1 mt-1 text-white">
                {{ visited.title }}
              </h2>
              <p class="text-sm text-zinc-500 line-clamp-1 font-secondary">
                Đang đọc chap {{ visited.chapterNumber ? visited.chapterNumber : 0 }}
              </p>
            </div>
          </NuxtLink>
        </swiper-slide>
      </swiper>
    </ClientOnly>
    <PulseVisitedComic v-else/>

  </div>
</template>