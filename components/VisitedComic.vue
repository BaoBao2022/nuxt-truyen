<script lang="ts" setup>
import {keys} from "~/types";
import {useStorage} from '@vueuse/core';
import {XIcon, ChevronRightIcon} from "@heroicons/vue/solid";

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
        <h2 class="flex justify-between items-center h-[40px]">
          Lịch sử đọc truyện
          <NuxtLink class="view-all" href="/">
            <i class="text-xl">Xem tất cả</i>
          </NuxtLink>
        </h2>
        <ul class="w-full space-y-4 overflow-hidden">
          <li class="flex" v-for="visited in visitedComics">
            <a href="/manga/detail/dai-quan-gia-la-ma-hoang-21948" class="">
              <figure class="relative h-[60px] w-[70px]">
              <span class="default-span-figure">
                <nuxt-img loading="lazy"
                          :src="visited.thumbnail"
                          fil="fill"
                          class="aspect-w-3 aspect-h-4 absolute object-cover object-center">
                </nuxt-img>
              </span>
              </figure>
            </a>
            <div class="flex w-full flex-col space-y-2 pl-4">
              <h3 class="font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl chap-title">
                <a>{{ visited.title }}</a>
              </h3>
              <div class="flex justify-between chapter">
                <NuxtLink @click="navigateToManga(visited.chapterNumber, visited.chapterId, visited.slug)" class="text-lg text-mode cursor-pointer flex items-center">
                  Đọc tiếp chap {{ visited.chapterNumber }}
                  <ChevronRightIcon class="h-5 w-5" />
                </NuxtLink>
                <div class="flex align-center chapter">
                  <i class="text-xl text-mode view flex items-center mr-3">
                    <XIcon class="w-5 h-5" />
                    Xoá
                  </i>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </ClientOnly>
</template>