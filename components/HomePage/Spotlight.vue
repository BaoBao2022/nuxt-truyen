<script lang="ts" setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, EffectFade} from "swiper";
import {computed, ref} from 'vue';
import {navigateTo, useState} from "#imports";
import useFirstPathChapter from "~/composables/useFirstPathChapter";
import useMangaPagePath from '~/composables/useMangaPagePath';

const modules = ref([Autoplay, EffectFade]);
const autoPlaySettings = ref({
  delay: 2000,
  disableOnInteraction: false
});

const backgroundImage = (spotlight) => {
  return {
    backgroundImage: `url(${spotlight.thumbnail})`,
  }
}
const {data: spotlightD} = await useFetch('/api/spotlights');
const spotlights = computed(() => {
  return spotlightD.value.filter(spotlight => spotlight.review !== '')
});

const navigateToManga = async (spotlight) => {
  const path = await useFirstPathChapter(spotlight, '');
  return navigateTo({
    path: path
  })
}
</script>

<template>
  <Swiper
      :modules="modules"
      :autoplay="autoPlaySettings">
    <SwiperSlide v-for="spotlight in spotlights">
      <div class="cursor-pointer">
        <figure
            class="deslide-cover h-[250px] w-full bg-cover bg-center bg-no-repeat blur md:h-[350px] lg:h-[450px]"
            :style="backgroundImage(spotlight)"></figure>
        <div
            class="aspect-[3/4] 0 absolute-center absolute top-1/2 right-[5%] md:right-[10%] z-10 flex h-[80%] w-[150px] -translate-y-1/2 items-center md:w-[200px] lg:w-[250px]">
          <div class="relative h-full w-[90%] overflow-hidden rounded-2xl magictime vanishIn">
            <span
                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; inset: 0;">
            <img alt="image-preview" sizes="100vw"
                 :srcset="spotlight.thumbnail"
                 :src="spotlight.thumbnail"
                 decoding="async" data-nimg="fill" class="absolute inset-0 object-cover object-center"
                 style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">
            </span>
          </div>
        </div>
        <div
            class="absolute top-12 left-5 z-40 flex h-[70%] w-[50%] flex-col space-x-4 space-y-4 font-secondary text-white md:left-[5%] md:w-[55%] md:py-4 lg:space-y-6">
          <NuxtLink :to="useMangaDetailPagePath(spotlight.slug)">

            <h3 class="mx-4 mt-6 text-xl md:text-4xl">
              {{ spotlight.newChapter }}
            </h3>
          </NuxtLink>

          <NuxtLink :to="useMangaDetailPagePath(spotlight.slug)">
            <h1 class="text-3xl transition-all line-clamp-1 hover:text-primary md:min-h-[30px] md:text-6xl">
              {{ spotlight.name }}
            </h1>
          </NuxtLink>
          <NuxtLink :to="useMangaDetailPagePath(spotlight.slug)">
            <h5 class="text-sm line-clamp-3 md:min-h-[60px] md:text-2xl">
              {{ spotlight.review ? spotlight.review : '' }}
            </h5>
          </NuxtLink>
          <ul class="hidden space-x-4 text-lg md:flex">
            <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
              Action
            </li>
            <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
              Fantasy
            </li>
            <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
              Manga
            </li>
            <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
              Shounen
            </li>
            <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
              Supernatural
            </li>
          </ul>
          <div class="flex space-x-6 text-xl md:text-2xl lg:pt-6">
            <button
                @click="navigateToManga(spotlight)"
                class="absolute-center rounded-xl bg-primary py-3 px-5 transition-all hover:scale-110 md:w-[100px]">
              Đọc ngay
            </button>
            <!--            <a :href="`/manga?slug=${spotlight.slug}`">-->
            <NuxtLink :to="useMangaDetailPagePath(spotlight.slug)">
              <button
                  class="absolute-center rounded-xl bg-white py-3 px-5 text-gray-800 transition-all hover:scale-110 md:w-[100px]">
                Chi tiết
              </button>
            </NuxtLink>
            <!--            </a>-->
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>