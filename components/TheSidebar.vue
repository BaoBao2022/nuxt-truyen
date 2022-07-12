<script lang="ts" setup>
import {GENRES_NT, MANGA_NT} from "~/types";

defineProps({
  close: {
    type: Function,
  },
});
</script>

<template>
  <div class="animate__fadeIn animate__animated animate__faster fixed inset-0 z-[100] bg-black/30" aria-hidden="true">
    <aside
        class="slideLeftReturn magictime absolute-center	 fixed inset-0 z-[999] w-[250px] min-w-[230px] bg-secondary p-4 md:w-[40%]">
      <div class="flex h-full w-full flex-col">
        <div class="absolute-center mt-6 flex h-fit w-full items-center justify-between">
          <button @click="close" class="absolute-center bg-hight-light ml-4 rounded-full p-4 text-white md:p-5"
                  tabindex="0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" aria-hidden="true" class="h-8 w-8 md:h-10 md:w-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
        </div>
        <ul class="mt-4 h-full w-full text-white">
          <li class="mx-4 mt-4 md:mt-8"><h3 class="font-secondary text-3xl md:text-5xl">Truyện tranh</h3></li>
          <li class="flex flex-wrap">
            <button class="absolute-center bg-hight-light ml-4 mt-4 w-fit rounded-xl py-2 px-4 md:mt-6"
                    v-for="manga in MANGA_NT">
              <NuxtLink class="text-xl md:text-3xl" :to="`/filter?comics=${manga.value}`">
                {{ manga.label }}
              </NuxtLink>
            </button>
          </li>
          <li class="mx-4 mt-4 border-t-[2px] border-highlight pt-4 md:mt-8"><h3
              class="font-secondary text-3xl md:text-5xl">Thể loại</h3></li>
          <li class="grid grid-cols-2">
            <button class="hover:bg-hight-light ml-4 mt-4 flex w-full items-center rounded-xl py-2 px-4 md:mt-6"
                    v-for="genre in GENRES_NT.slice(0, 8)">
              <NuxtLink class="text-xl md:text-3xl" :to="`/filter?genres=${genre.value}`">
                {{ genre.label }}
              </NuxtLink>
            </button>
          </li>
          <li class="mx-4 mt-4 border-t-[2px] border-highlight pt-4 md:mt-8">
            <h3 class="font-secondary text-3xl md:text-5xl">
              <NuxtLink class="flex items-center"
                        to="/filter?view=newComic">
                Mới cập nhật
                <button class="absolute-center h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                       stroke="currentColor" aria-hidden="true" class="ml-2 h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </NuxtLink>
            </h3>
          </li>
          <li class="mx-4 mt-4 border-t-[2px] border-highlight pt-4 md:mt-8">
            <h3 class="font-secondary text-3xl md:text-5xl">
              <NuxtLink class="flex items-center" href="/filter?view=all">
                Bảng xếp hạng
                <button class="absolute-center h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                       stroke="currentColor" aria-hidden="true" class="ml-2 h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </NuxtLink>
            </h3>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>