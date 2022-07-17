<script lang="ts" setup>
import {Manga} from "~/types";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {useLazyFetch} from '#imports'
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath'

const {data: mangas, pending} = useLazyFetch<Manga[]>(`/api/follow-story?genres=manga-112`);
</script>

<template>
  <div class="visited-comics px-3 mb-4">
    <h2 class="flex h-[40px] text-2xl font-semibold flex justify-start items-center text-white">
      <SvgFollow class="mr-2"/>
      Được yêu thích
    </h2>
    <PulseFavoriteStoryLoading v-if="pending"/>
    <template v-else>
      <div class="box dark-box">

        <swiper
            :slides-per-view="2"
            :space-between="14">
          <swiper-slide v-for="manga in mangas">
            <div class="duration-200 ease-in-out transition-all">
              <NuxtLink :to="useMangaDetailPagePath(manga.slug)">
                <nuxt-img loading="lazy"
                          class="rounded h-[110px] object-cover w-[200px]"
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
    </template>
  </div>
</template>