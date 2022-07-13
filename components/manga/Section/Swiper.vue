<script setup lang="ts">
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
// import {Autoplay, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {ChevronRightIcon} from '@heroicons/vue/solid'
import {ClockIcon} from '@heroicons/vue/outline'

defineProps({
  mangas: Array as PropType<Manga[]>
})

// const modules = ref([EffectFade]);
// const autoPlaySettings = ref({
//   delay: 2500,
//   disableOnInteraction: false,
//   pauseOnMouseEnter: true,
// });

const swiperBreakPoints = {
  1: {
    slidesPerView: 2,
    spaceBetween: 2,
  },
  320: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  1300: {
    slidesPerView: 7,
    spaceBetween: 20,
  },
};

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
    <ClientOnly>
      <Swiper
          :breakpoints="swiperBreakPoints"
          class="items-slide">
        <SwiperSlide v-for="manga in mangas" class="h-[250px]">
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
              <ClockIcon class="h-5 w-5 mr-2 mb-1"/>
            {{ manga.updatedAt }}
          </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </div>
</template>