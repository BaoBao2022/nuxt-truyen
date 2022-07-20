<script lang="ts" setup>
import { Manga } from "~/types";
import { Swiper, SwiperSlide } from 'swiper/vue';
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath'

const { data: mangas, pending } = useLazyFetch<Manga[]>(`/api/follow-story?genres=comedy-99`);
const swiperBreakPoints = {
  1: {
    slidesPerView: 2,
    spaceBetween: 2,
  },
  320: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  750: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  800: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
};
</script>

<template>
  <div class="px-4">
    <h2 class="flex h-[40px] text-2xl font-semibold flex justify-start items-center text-black">
      <!--      <SvgFollow class="mr-2"/>-->
      # Được yêu thích
    </h2>
    <PulseFavoriteStoryLoading v-if="pending" />
    <template v-else>
      <Swiper :breakpoints="swiperBreakPoints" class="h-[165px]" :initialSlide="3" :centered-slides-bounds="true"
        :centeredSlides="true" :slides-per-view="4" :space-between="14">
        <SwiperSlide v-for="manga in mangas">
          <div class="duration-200 ease-in-out transition-all">
            <NuxtLink :to="useMangaDetailPagePath(manga.slug)">
              <img format="webp" loading="lazy" class="rounded-xl object-cover h-[130px] w-full" :src="manga.thumbnail"
                fil="fill">
            </NuxtLink>
            <div class="h-[30px] flex flex-wrap">
              <h2 class="text-base line-clamp-1 mt-1 text-black font-semibold">
                {{ manga.name }}
              </h2>
              <a class="text-sm text-zinc-500">
                {{ manga.newChapter }}
              </a>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </template>
  </div>
</template>