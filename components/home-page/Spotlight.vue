<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper";
import { ref } from 'vue';
import { Manga } from "~/types";

import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/pagination";

const { data: spotlights, pending } = useLazyFetch<Manga[]>('/api/spotlights');
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

</script>

<template>
  <div v-if="!pending" class="relative">
    <!-- <div class="absolute top-5 left-5 z-10">
      <img src="~/assets/images/h5_boy.png" alt="">
    </div> -->
    <Swiper :modules="modules" :autoplay="autoPlaySettings" effect="fade">
      <SwiperSlide v-for="spotlight in spotlights" :key="spotlight.slug">
        <div class="cursor-pointer">
          <figure
            class="deslide-cover h-[200px] w-full bg-cover bg-center bg-no-repeat blur md:h-[300px] lg:h-[480px]"
            :style="backgroundImage(spotlight)">
          </figure>
          <div
            class="absolute top-12 left-5 z-40 flex h-[60%] w-[50%] flex-col space-x-4 space-y-4 font-secondary text-white md:left-[5%] md:w-[55%] md:py-4 lg:space-y-6">
            <LazySharedSwiperCardContent :spotlight="spotlight" />
            <LazySharedSwiperCardButton :spotlight="spotlight" />
          </div>
          <LazySharedSwiperCard :spotlight="spotlight" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>

</template>