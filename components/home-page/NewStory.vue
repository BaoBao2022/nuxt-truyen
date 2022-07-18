<script lang="ts" setup>
import {Manga} from "~/types";
import {Swiper, SwiperSlide} from 'swiper/vue';

const {data: mangas, pending} = useLazyFetch<Manga[]>(`/api/manga-new`);
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
};
</script>

<template>
  <div class="visited-comics px-3 mb-4" v-if="!pending">
    <h2 class="flex h-[40px] text-2xl font-semibold flex justify-start items-center text-white">
      # Truyện mới cập nhật
    </h2>
    <swiper
        :breakpoints="swiperBreakPoints"
        :initialSlide="3"
        :centered-slides-bounds="true"
        :centeredSlides="true"
        :slides-per-view="4"
        :space-between="14">
      <swiper-slide v-for="manga in mangas">
        <div class="duration-200 ease-in-out transition-all">
          <NuxtLink :to="useMangaDetailPagePath(manga.slug)">
            <nuxt-img loading="lazy"
                      class="rounded h-[130px] object-cover"
                      :src="manga.thumbnail"
                      fil="fill">
            </nuxt-img>
          </NuxtLink>
          <h2 class="text-base line-clamp-1 mt-1 text-white">
            {{ manga.name }}
          </h2>
          <p class="text-sm text-zinc-500 line-clamp-1 font-secondary">
            <a class="text-sm font-secondary text-zinc-500 mr-1" v-for="genre in manga.genres">
              {{ genre }}
            </a>
          </p>
          <p class="text-sm text-zinc-500 line-clamp-1 font-secondary">
            <a class="text-sm font-secondary text-zinc-500 mr-1">
              {{ manga.newChapter }}
            </a>
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>

.swiper-slide {
  width: 80%;
}

.swiper-slide:nth-child(2n) {
  width: 60%;
}

.swiper-slide:nth-child(3n) {
  width: 40%;
}
</style>