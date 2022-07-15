<script lang="ts" setup>
import {keys} from "~/types";
import {useStorage} from '@vueuse/core';
import {XIcon, ChevronRightIcon} from "@heroicons/vue/solid";
import {BookOpenIcon} from "@heroicons/vue/outline";
import {Swiper, SwiperSlide} from 'swiper/vue';

const visitedComics: any = useStorage(keys.visitedComics, {
  serializer: {
    read: (v: any) => v ? JSON.parse(v) : null,
    write: (v: any) => JSON.stringify(v),
  }
});

const navigateToManga = async (chapterNumber: string, chapterId: string, slug: string) => {
  const path = await useChapter(chapterNumber, chapterId, slug);

  return navigateTo({
    path: path
  })
}

</script>

<template>
  <ClientOnly>
    <div class="visited-comics px-3 mb-4" v-if="visitedComics && visitedComics.length > 0">
      <div class="box dark-box">
        <h2 class="flex h-[40px] text-2xl font-semibold flex justify-start items-center">
          <BookOpenIcon class="h-7 w-7 text-amber-700 mr-2"/>
          Lịch sử đọc
        </h2>
        <swiper
            :slides-per-view="4"
            :space-between="14">
          <swiper-slide v-for="visited in visitedComics">
            <div class="duration-200 ease-in-out transition-all">
              <nuxt-img loading="lazy"
                        class="rounded-xl h-[120px] object-cover"
                        :src="visited.thumbnail"
                        fil="fill">
              </nuxt-img>
              <h2 class="text-base line-clamp-1 mt-1">
                {{ visited.title }}
              </h2>
              <p class="text-sm text-zinc-500 line-clamp-1">
                Đang đọc chap {{ visited.chapterNumber ? visited.chapterNumber : 0 }}
              </p>
            </div>

          </swiper-slide>
        </swiper>
      </div>
    </div>
  </ClientOnly>
</template>