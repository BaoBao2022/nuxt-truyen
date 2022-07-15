<script setup lang="ts">
import {Autoplay, EffectCoverflow} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';

const props = defineProps({
  mangas: Array as PropType<Manga[]>
})

const modules = ref([EffectCoverflow]);
const autoPlaySettings = ref({
  delay: 3500,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
});

const mangaActive = ref<Manga>({});
const activeIndexChange = (slide) => {
  mangaActive.value = props.mangas[slide.realIndex];
}
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
    slidesPerView: 3,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
  1300: {
    slidesPerView: 8,
    spaceBetween: 20,
  },
};

const backgroundImage = (spotlight) => {
  return {
    backgroundImage: `url(${spotlight.thumbnail})`,
  }
}

</script>

<template>
  <div>
    <div class="group relative w-full md:h-[350px] xl:h-[400px] 2xl:h-[450px] overflow-hidden">
      <div class="w-full h-0" v-if="mangaActive && mangaActive.thumbnail">
        <figure
            class="deslide-cover lg:h-[480px] md:h-[350px] h-[250px] bg-center bg-no-repeat"
            :style="backgroundImage(mangaActive)">
        </figure>
        <LazySharedSwiperCard :spotlight="mangaActive"/>
      </div>

      <div class="absolute inset-0 flex flex-col justify-center px-4 banner__overlay md:px-12"></div>
      <div
          class="mt-2 absolute left-4 md:left-12 lg:left-20 xl:left-28 2xl:left-36 top-1/2 -translate-y-1/2 w-full md:w-[45%] z-10"
          style="opacity: 1;">
        <h1
            class="text-2xl font-bold uppercase md:text-4xl sm:line-clamp-3 md:line-clamp-4 line-clamp-1">
          {{ mangaActive.name }}
        </h1>
        <div class="flex flex-wrap items-center mt-4 text-lg gap-x-8">
          <div class="flex items-center gap-x-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                 class="w-6 h-6 text-green-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
            </svg>
            <p>88%</p>
          </div>
          <div class="flex items-center gap-x-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                 class="w-6 h-6 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
            </svg>
            <p>{{ mangaActive.view }}</p></div>
          <div class="flex line-clamp-1 items-center space-x-2">
            <span v-for="genre in mangaActive.genres">{{ genre }}</span>
          </div>
        </div>
        <div class="m-h-[100px] prose !max-w-full hidden text-base md:block text-gray-200 md:line-clamp-5 lg:line-clamp-6">
          {{ mangaActive.review }}
          <br>
          <br>
          Author: {{ mangaActive.author ? mangaActive.author : 'N/a' }}
        </div>
          <LazySharedSwiperCardButton :spotlight="mangaActive"/>
      </div>
      <div class="absolute bottom-0 w-full h-16 banner__overlay--down"></div>
    </div>
    <div class="w-full px-4 md:px-12 mt-4">
      <div
          class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events !overflow-visible">
        <ClientOnly>
          <Swiper
              @activeIndexChange="activeIndexChange"
              :autoplay="autoPlaySettings"
              :modules="modules"
              :effect="'coverflow'"
              :coverflowEffect="{
                rotate: 10,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }"
              :loop="true"
              :centered-slides="true"
              :centered-slides-bounds="true"
              :breakpoints="swiperBreakPoints">
            <SwiperSlide v-slot="{ isActive }" v-for="manga in mangas" class="rounded-xl">
              <div class="duration-700 ease-in-out transform hover:scale-105 transition-all w-full h-[270px]"
                   :style="isActive ? {'opacity': '1'} : {'opacity': '0.2', 'transform': 'none'}">
                <div class="relative aspect-w-9 aspect-h-16">
                  <div>
                    <span class="span-position">
                    <nuxt-img
                        format="webp"
                        loading="lazy"
                        :src="manga.thumbnail"
                        class="img-position" 
                        style="object-fit: contain">
                    </nuxt-img>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
        <div slot="container-end" class="swiper-navigation absolute right-0 bottom-full mb-4 flex space-x-4">
          <button type="button"
                  class="transition duration-300 p-2 rounded-full swiper-button-prev flex items-center justify-center hover:bg-white hover:text-black border-solid border-2 border-white gap-x-2">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                 stroke-linejoin="round" class="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button type="button"
                  class="transition duration-300 p-2 rounded-full swiper-button-next flex items-center justify-center hover:bg-white hover:text-black border-solid border-2 border-white gap-x-2">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                 stroke-linejoin="round" class="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>