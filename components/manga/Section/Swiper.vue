<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination} from "swiper";
import {ref} from 'vue';
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
import {computed, useState} from "#imports";
import {devices} from '~/types';
import {ChevronRightIcon} from "@heroicons/vue/solid";

defineProps({
  title: String,
  mangas: Array
});

const modules = ref([Pagination]);
const device = useState<devices>('devices');

const sliderPerView = computed(() => {
  if (device.value.hasDesktop) {
    return 7;
  }

  return 3;
});

</script>

<template>
  <section class="w-[90%] mx-auto w-max-[1300px] mt-6 overflow-x-hidden">
    <h2 class="mt-4 flex select-none items-center font-secondary text-3xl text-white hover:cursor-pointer md:text-4xl lg:text-5xl">
      <div class="flex items-center transition-all hover:text-primary">
        <a href="/browse?view=newComic">
          {{ title }}
        </a>
        <ChevronRightIcon class="h-8 w-8"/>
      </div>
    </h2>
    <div class="mt-4 hover:cursor-grab lg:mt-6">
      <div class="swiper swiper-initialized swiper-horizontal swiper-ios section-swiper">
        <Swiper :slides-per-view="sliderPerView"
                :pagination="true"
                :space-between="20"
                :modules="modules"
                style="transform: translate3d(0px, 0px, 0px); padding-bottom: 50px">
          <SwiperSlide v-for="manga in mangas">
            <div class="aspect-h-4 aspect-w-3 rounded-xl">
              <NuxtLink :to="useMangaDetailPagePath(manga.slug)">
                <span class="default-span-figure">
                <img
                    alt="manga-thumbnail z-50"
                    sizes="100vw"
                    :srcset="manga.thumbnail"
                    :src="manga.thumbnail"
                    decoding="async" data-nimg="fill"
                    class="absolute inset-0 rounded-xl object-cover object-center default-img">
                </span>
              </NuxtLink>
              <span
                  class="absolute top-2 left-2 h-fit w-fit rounded-xl bg-white bg-opacity-40 px-4 py-2 text-base backdrop-blur-md md:text-xl lg:text-3xl">
                {{ manga.newChapter }}
              </span>
            </div>
            <NuxtLink :to="useMangaDetailPagePath(manga.slug)">
              <h2 class="my-2 select-none text-xl text-white transition-all line-clamp-1 hover:text-primary md:text-2xl">
                {{ manga.name }}
              </h2>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>