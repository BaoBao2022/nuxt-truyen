<script lang="ts" setup>
import {Manga, MANGA_SORT} from "~/types";
import {Swiper, SwiperSlide} from 'swiper/vue';

const {
  data: mangas,
  pending,
} = await useLazyFetch<Manga[]>(`/api/manga-updated`);

</script>

<template>
  <template v-if="pending">
    <HomePageLoadingItem/>
  </template>
  <div class="visited-comics px-3 mb-4" v-else>
    <h2 class="flex h-[40px] text-2xl font-semibold flex justify-start items-center text-white">
      Truyện được cập nhật
    </h2>
    <swiper
        :slides-per-view="4"
        :space-between="14">
      <swiper-slide v-for="manga in mangas">
        <div class="duration-200 ease-in-out transition-all">
          <NuxtLink :to="useMangaDetailPagePath(manga.slug)">
            <nuxt-img loading="lazy"
                      class="rounded-xl h-[100px] object-cover w-[200px]"
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
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>