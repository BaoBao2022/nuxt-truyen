<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper";
import { ref } from 'vue';
import { Manga } from "~/types";

import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/pagination";

const { data: spotlights, pending } = useLazyFetch<Manga[]>('/api/spotlights');
console.log("spotlights", spotlights.value);

const modules = ref([Autoplay, EffectFade]);
const autoPlaySettings = ref({
  delay: 50000,
  disableOnInteraction: false
});
const backgroundImage = (spotlight) => {
  return {
    backgroundImage: `url(${spotlight.thumbnail})`,
  }
}

</script>

<template>
  <div v-if="!pending">
    <Swiper :modules="modules" :autoplay="autoPlaySettings" effect="fade">
      <SwiperSlide v-for="spotlight in spotlights" :key="spotlight.slug">
        <div class="cursor-pointer">
          <figure class="deslide-cover h-[250px] w-full bg-cover bg-center bg-no-repeat blur md:h-[350px] lg:h-[450px]"
            :style="backgroundImage(spotlight)">
          </figure>
          <div
            class="absolute top-12 left-5 z-40 flex h-[70%] w-[50%] flex-col space-x-4 space-y-4 font-secondary text-white md:left-[5%] md:w-[55%] md:py-4 lg:space-y-6">
            <LazySharedSwiperCardContent :spotlight="spotlight" />
            <LazySharedSwiperCardButton :spotlight="spotlight" />
          </div>
          <LazySharedSwiperCard :spotlight="spotlight" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>

</template>