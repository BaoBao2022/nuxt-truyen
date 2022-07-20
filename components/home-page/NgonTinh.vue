<!-- <script setup>
import { useLazyFetch } from '#imports';
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
const { data: mangas, pending } = useLazyFetch(`/api/ngon-tinh`);
</script>

<template>
  <div class="px-4 mb-4 mt-8">
    <h2 class=" h-[20px] text-3xl font-bold flex justify-start items-center text-black">
      # Ngôn tình
    </h2>
    <PulseMaybeLoveLoading v-if="pending" />
    <template v-else>
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1 mt-5" v-for="manga in mangas">
          <NuxtLink :to="useMangaDetailPagePath(manga.slug)">
            <nuxt-img loading="lazy" class="rounded-xl h-[130px] w-full object-cover" format="webg"
              :src="manga.thumbnail" fil="fill">
            </nuxt-img>
          </NuxtLink>
          <h2 class="text-base line-clamp-1 mt-1 text-black font-semibold">
            {{ manga.name }}
          </h2>
          <p class="text-sm text-zinc-500 line-clamp-1 font-secondary">
            <a class="text-sm font-secondary text-zinc-500 mr-1" v-for="genre in manga.genres">
              {{ genre }}
            </a>
          </p>
        </div>
      </div>
    </template>

  </div>
</template> -->

<script lang="ts" setup>
import { Manga } from "~/types";
import { Swiper, SwiperSlide } from 'swiper/vue';
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath'

const { data: mangas, pending } = useLazyFetch<Manga[]>(`/api/ngon-tinh`);
const swiperBreakPoints = {
  1: {
    slidesPerView: 2,
    spaceBetween: 2,
  },
  320: {
    slidesPerView: 3.4,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 4.4,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 5.4,
    spaceBetween: 20,
  },
  750: {
    slidesPerView: 6.4,
    spaceBetween: 20,
  },
  800: {
    slidesPerView: 7.4,
    spaceBetween: 20,
  },
};
</script>
<template>
  <PulseMangaUpdatedLoading v-if="pending" />
  <div class="px-4" v-else>
    <h2 class=" h-[70px] text-3xl font-bold flex justify-start items-center text-black mb-4">
      # Ngôn Tình Cổ đại
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        class="col-span-1 rounded-[8px] p-13 max-w-[384px] w-full h-[138px] bg-white relative shadow-[0_3px_20px_rgba(0,0,0,10%)]">
        <div class="absolute bottom-[13px] left-[13px]">
          <a>
            <div class="max-w-full w-[105px]">
              <div class="relative pb-[133.3333%]">
                <img class="rounded-2xl visible h-full left-0 absolute top-0 w-full"
                  :src="mangas[mangas.length - 1].thumbnail">
              </div>
            </div>
          </a>
        </div>
        <div class="ml-[118px] p-4">
          <h3 class="text-xl font-bold">
            <a>{{ mangas[mangas.length - 1].name }}</a>
          </h3>
          <div>
            <div class="rating flex items-center">
              <SvgStar />
              <SvgStar />
              <SvgStar />
              <SvgStar />
              <SvgStar />
              <p class="text-xl">4.8
                <span class="text-base font-semibold text-gray-500"> (369)</span>
              </p>
            </div>
            <div class="mt-3">
              <a>
                <p class="w-full text-xl">
                  "Làm thêm nữa nhá"
                </p>
              </a>
            </div>
            <div class="mt-3">
              <a class="mt-3">
                <p class="flex items-center justify-start w-full text-gray-500">
                  <SvgComment class="mr-2" />
                  <span class="name text-base font-semibold">Bang Vo</span>
                  <span class="mx-2 text-xl">•</span>
                  <span class="text-base">21 giờ trước</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <ClientOnly>
        <Swiper :breakpoints="swiperBreakPoints">
          <SwiperSlide v-for=" manga in mangas">
            <div class="duration-200 ease-in-out transition-all">
              <NuxtLink :to="useMangaDetailPagePath(manga.slug)">
                <nuxt-img format="webp" loading="lazy" class="rounded-xl object-cover h-[139px] w-full"
                  :src="manga.thumbnail" fil="fill">
                </nuxt-img>
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
      </ClientOnly>
    </div>
  </div>
</template>