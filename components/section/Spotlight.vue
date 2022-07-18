<script lang="ts" setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, EffectFade} from "swiper";
import {PropType, ref} from 'vue';
import {Manga} from "~/types";
import {randomColors} from '~/serveless/utils';
import {TailwindColors} from '~/contants';

const {
  data: mangas,
  pending,
} = useLazyFetch<Manga[]>(`/api/spotlights`);
const modules = ref([Autoplay]);
const autoPlaySettings = ref({
  delay: 3500,
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
    <Swiper
        :loop="true"
        :modules="modules"
        :autoplay="autoPlaySettings"
        class="relative">
      <SwiperSlide v-for="spotlight in mangas">
        <div class="relative aspect-w-16 aspect-h-9 rounded-xl-md">
          <div
              class="z-20 absolute fixed-0 bg-gradient-to-b from-transparent via-black/60 to-black/80 flex items-end bottom-0 w-full">
            <div class="p-4 w-full">
              <h1 class="text-xl font-bold uppercase line-clamp-2 text-white w-[70%] h-[35px]">
                <a class="flex items-end h-[100%]">{{ spotlight.name }}</a>
              </h1>
              <div class="flex flex-wrap items-center mt-4 text-lg gap-x-8">
                <div class="flex items-center gap-x-2">
                  <p class="text-white flex items-center">
                    <span class="text-xs mr-1">
                      <SvgSmile/>
                    </span>
                    {{ spotlight.view }}
                  </p>
                </div>
                <div class="flex items-center gap-x-2">
                  <div class="flex items-center gap-x-2">
                    <p class="text-white bg-highlight banner-author">
                      <a class="p-3">{{ spotlight.author }}</a>
                    </p>
                  </div>
                </div>
                <div class="flex line-clamp-1 items-center space-x-2 w-[100%]">
                  <span class="text-white" v-for="(genre, genI) in spotlight.genres"
                        :style="{'color': randomColors(TailwindColors, genI )}">{{ genre }} </span>
                </div>
              </div>
            </div>
          </div>
          <figure class="deslide-cover w-full bg-cover bg-center bg-no-repeat blur-none"
                  :style="backgroundImage(spotlight)">
          </figure>
          <div>
            <img
                class="img-position z-10"
                :src="spotlight.thumbnail" style="object-fit: contain">
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </template>
</template>


