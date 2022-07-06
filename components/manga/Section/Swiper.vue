<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import { PropType, ref } from 'vue';
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
import { computed, useState } from "#imports";
import { devices } from '~/types';
import { Manga } from '~/types';
import { ClockIcon, BookOpenIcon, InformationCircleIcon } from '@heroicons/vue/outline';
import { ChevronRightIcon, StatusOnlineIcon, ClipboardListIcon } from "@heroicons/vue/solid";

const { data: mangas, pending } = useFetch('/api/manga-updated');

defineProps({
  title: String,
});

const modules = ref([Pagination]);
const device = useState<devices>('devices');
const hasPreview = useState('hasPreview', () => 1);
const navigateToManga = async (manga) => {
  const path = await useFirstPathChapter(manga, '');
  return navigateTo({
    path: path
  })
}
const sliderPerView = computed(() => {
  if (device.value.hasDesktop) {
    return 6;
  }

  return 3;
});

</script>

<template>
  <section class="w-[90%] mx-auto w-max-[1300px] mt-6 overflow-x-hidden" v-if="!pending">
    <h2
      class="mt-4 flex select-none items-center font-secondary text-3xl text-white hover:cursor-pointer md:text-4xl lg:text-5xl">
      <div class="flex items-center transition-all hover:text-primary">
        <a href="/browse?view=newComic">
          {{ title }}
        </a>
        <ChevronRightIcon class="h-8 w-8" />
      </div>
    </h2>
    <div class="mt-4 hover:cursor-grab lg:mt-6">
      <div class="swiper swiper-initialized swiper-horizontal swiper-ios section-swiper">
        <Swiper :slides-per-view="sliderPerView" :pagination="true" :space-between="20" :modules="modules"
          style="transform: translate3d(0px, 0px, 0px); padding-bottom: 50px">
          <SwiperSlide v-for="(manga, imanga) in mangas" :key="`slide_${manga.slug}`" @mousemove="hasPreview = imanga"
            @mouseleave="hasPreview = -1">
            <div class="aspect-h-4 aspect-w-3 rounded-xl">
              <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
                <span class="default-span-figure">
                  <img alt="manga-thumbnail z-50" sizes="100vw" :srcset="manga.thumbnail" :src="manga.thumbnail"
                    decoding="async" data-nimg="fill"
                    class="absolute inset-0 rounded-xl object-cover object-center default-img">
                </span>
              </LazyNuxtLink>
              <span
                class="absolute top-2 left-2 h-fit w-fit rounded-xl bg-white bg-opacity-40 px-4 py-2 text-base backdrop-blur-md md:text-xl lg:text-3xl">
                {{ manga.newChapter }}
              </span>
              <div v-if="hasPreview === imanga"
                class="animate__faster animate__animated animate__fadeIn flex h-full w-full flex-col space-y-2 overflow-hidden rounded-xl bg-highlight text-white">
                <a>
                  <h3 class="ml-4 mt-4 min-h-[40px] text-[100%] font-semibold line-clamp-2 hover:text-primary">
                    {{ manga.name }}
                  </h3>
                </a>
                <p class="ml-4 flex flex-nowrap items-center">
                  <ClipboardListIcon class="h-6 w-6" />
                  <span class="ml-2 text-[90%] line-clamp-1">
                    {{ manga.newChapter }}
                  </span>
                </p>
                <p class="ml-4 flex items-center">
                  <ClockIcon class="h-6 w-6" />
                  <span class="ml-2 text-[90%]">
                    {{ manga.updatedAt }}
                  </span>
                </p>
                <p class="ml-4 flex items-center">
                  <StatusOnlineIcon class="h-6 w-6" />
                  <span class="ml-2 text-[90%]">
                    {{ manga.status }}
                  </span>
                </p>
                <div class="flex h-fit w-full flex-col items-center space-y-4 py-6">
                  <button @click="navigateToManga(manga)"
                    class="w-[110px] flex w-fit items-center justify-center space-x-4 rounded-xl bg-primary py-2 px-4 transition-all hover:scale-[110%]">
                    <BookOpenIcon class="h-5 w-5" />
                    <a>Đọc ngay</a>
                  </button>
                  <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
                    <button
                      class="w-[110px] flex w-fit items-center justify-center space-x-4 rounded-xl bg-white py-2 px-4 text-gray-700 transition-all hover:scale-[110%]">
                      <InformationCircleIcon class="h-5 w-5" />
                      Thông tin
                    </button>
                  </LazyNuxtLink>
                </div>
              </div>
            </div>

            <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
              <h2
                class="my-2 select-none text-xl text-white transition-all line-clamp-1 hover:text-primary md:text-2xl">
                {{ manga.name }}
              </h2>
            </LazyNuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>