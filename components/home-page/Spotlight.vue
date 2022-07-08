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
  delay: 2500,
  disableOnInteraction: false
});
const backgroundImage = (spotlight) => {
  return {
    backgroundImage: `url(${spotlight.thumbnail})`,
  }
}

</script>

<template>
  <Swiper v-if="!pending" :modules="modules" :autoplay="autoPlaySettings" effect="fade"
    class="relative lg:h-[480px] md:h-[350px] h-[250px]">
    <SwiperSlide v-for="spotlight in spotlights">
      <div :key="spotlight.slug">
        <figure
          class="deslide-cover lg:h-[480px] md:h-[350px] h-[250px] w-full bg-cover bg-center bg-no-repeat md:h-[300px] lg:h-[480px]"
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
</template>