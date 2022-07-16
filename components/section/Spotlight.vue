<script lang="ts" setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, EffectFade} from "swiper";
import {PropType, ref} from 'vue';
import {Manga} from "~/types";

const {
  data: mangas,
  pending,
} = useLazyFetch<Manga[]>(`/api/spotlights`);
const modules = ref([Autoplay]);
const autoPlaySettings = ref({
  delay: 3522200,
  disableOnInteraction: false
});

const backgroundImage = (spotlight) => {
  return {
    backgroundImage: `url(${spotlight.thumbnail})`,
  }
}

</script>

<template>
  <SectionSpotlightBannerLoading v-if="pending"/>
  <template v-else>
    <Swiper :loop="true" :modules="modules" :autoplay="autoPlaySettings"
            class="relative">
      <SwiperSlide v-for="spotlight in mangas">
        <NuxtLink :to="useMangaDetailPagePath(spotlight.slug)" class="relative">
          <div class="z-20 top-[138px] absolute fixed-0 bg-gradient-to-b from-transparent via-black/60 to-black/80 flex items-end">
            <div class="p-4 w-full h-[82px]">
              <h1 class="text-xl font-bold uppercase line-clamp-1 text-white">
                {{ spotlight.name }}
              </h1>
              <div class="flex flex-wrap items-center mt-4 text-lg gap-x-8">
                <div class="flex items-center gap-x-2">
                  <SvgSmile/>
                  <p class="text-white">87%</p>
                </div>
                <div class="flex items-center gap-x-2">
                  <SvgFollow/>
                  <p class="text-white">{{ spotlight.view }}</p></div>
                <div class="flex line-clamp-1 items-center space-x-2 w-[100%]">
                  <span class="text-white" v-for="genre in spotlight.genres">{{ genre }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="relative aspect-w-16 aspect-h-9 rounded-md h-[220px]">
            <figure class="deslide-cover w-full bg-cover bg-center bg-no-repeat blur-none"
                    :style="backgroundImage(spotlight)">
            </figure>
            <div>
              <span>
                <img
                    class="img-position z-10"
                    :src="spotlight.thumbnail" style="object-fit: contain">
              </span>
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </template>

</template>


