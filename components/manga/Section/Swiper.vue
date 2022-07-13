<script setup lang="ts">
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
import {computed, useState} from "#imports";
import {devices} from '~/types';
import {Autoplay, Virtual, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {ref} from "vue";
import {ChevronRightIcon} from '@heroicons/vue/solid'

defineProps({
  mangas: Array as PropType<Manga[]>
})

const modules = ref([Autoplay, Virtual, EffectFade]);
const autoPlaySettings = ref({
  delay: 4500,
  disableOnInteraction: true
});

const device = useState<devices>('devices');
const sliderPerView = computed(() => {
  if (device.value.hasDesktop) {
    return 6;
  }

  return 2;
});

</script>


<template>
  <div class="mt-4 hover:cursor-grab lg:mt-6 px-3">
    <h2 class="flex items-center transition-all hover:text-primary">
      <a class="items-center justify-start font-secondary h-[40px] flex mx-3 page-title custom-title"
         href="/browse?view=newComic">
        Truyện cập nhật mới
        <ChevronRightIcon class="h-8 w-8"/>
      </a>
    </h2>
    <Swiper
        class="items-slide"
        effect="Cards"
        virtual
        :observer="false"
        :slides-per-view="sliderPerView"
        :space-between="20"
        :modules="modules"
        :autoplay="autoPlaySettings">
      <SwiperSlide v-for="manga in mangas" class="border-[1px] border-white">
        <div class="h-[250px] rounded-sm relative">
          <LazyNuxtLink
              :to="useMangaDetailPagePath(manga.slug)">
            <nuxt-img
                class="w-full"
                placeholder="~/assets/images/placeholder.png"
                sizes="190vw sm:170vw md:185vw lg:200vw"
                format="webp"
                loading="lazy"
                :src="manga.thumbnail">
            </nuxt-img>
          </LazyNuxtLink>
        </div>
        <div class="slide-caption">
          <h3 class="text-center">
            <NuxtLink :title="manga.name">
              {{ manga.name }}
            </NuxtLink>
          </h3>
          <div class="flex justify-around">
            <NuxtLink :title="manga.newChapter">
              {{ manga.newChapter }}
            </NuxtLink>
            <span class="time">
            {{ manga.updatedAt }}
          </span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>