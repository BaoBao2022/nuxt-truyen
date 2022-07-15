<script lang="ts" setup>
import {keys, Manga, MANGA_SORT} from "~/types";
import {Swiper, SwiperSlide} from 'swiper/vue';

const {data: mangas, pending} = useLazyFetch<Manga[]>(`/api/search?sort=${MANGA_SORT.follow}&limit=10`);
</script>

<template>
  <div class="visited-comics px-3 mb-4" v-if="!pending">
    <div class="box dark-box">
      <h2 class="flex h-[40px] text-2xl font-semibold flex justify-start items-center text-white">
        Được yêu thích
      </h2>
      <swiper
          :slides-per-view="2"
          :space-between="14">
        <swiper-slide v-for="manga in mangas">
          <div class="duration-200 ease-in-out transition-all">
            <NuxtLink :to="useMangaDetailPagePath(manga.slug)">
              <nuxt-img loading="lazy"
                        class="rounded-xl h-[110px] object-cover w-[200px]"
                        :src="manga.thumbnail"
                        fil="fill">
              </nuxt-img>
            </NuxtLink>
            <h2 class="text-base line-clamp-1 mt-1 text-white">
              {{ manga.name }}
            </h2>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>