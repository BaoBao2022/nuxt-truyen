<script setup lang="ts">
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
import {computed, useState} from "#imports";
import {devices} from '~/types';
import {Autoplay, Virtual, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {ref} from "vue";
import {ChevronRightIcon} from '@heroicons/vue/solid'
import {ClockIcon} from '@heroicons/vue/outline'

defineProps({
  mangas: Array as PropType<Manga[]>
})

const modules = ref([Autoplay, Virtual, EffectFade]);
const autoPlaySettings = ref({
  delay: 4503330,
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
      <NuxtLink class="items-center justify-start font-secondary h-[40px] flex mx-3 page-title custom-title"
         to="/filter?view=newComic">
        Truyện cập nhật mới
        <ChevronRightIcon class="h-8 w-8"/>
      </NuxtLink>
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
      <SwiperSlide v-for="manga in mangas" class="item h-[250px]">
        <div class="h-[250px] rounded-sm relative">
          <LazyNuxtLink
              :to="useMangaDetailPagePath(manga.slug)">
            <nuxt-img
                class="w-full"
                placeholder="../assets/images/placeholder.png"
                sizes="190vw sm:170vw md:185vw lg:200vw"
                format="webp"
                loading="lazy"
                :src="manga.thumbnail">
            </nuxt-img>
          </LazyNuxtLink>
        </div>
        <div class="slide-caption"></div>
        <div class="slide-description">
          <h3 class="text-center">
            <NuxtLink :title="manga.name">
              {{ manga.name }}
            </NuxtLink>
          </h3>
          <div class="flex justify-around">
            <NuxtLink :title="manga.newChapter">
              {{ manga.newChapter }}
            </NuxtLink>
            <span class="time flex items-center">
              <ClockIcon class="h-5 w-5 mr-2 mb-1" />
            {{ manga.updatedAt }}
          </span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>