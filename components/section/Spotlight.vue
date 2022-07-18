<script lang="ts" setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, EffectFade} from "swiper";
import {PropType, ref} from 'vue';
import {Manga} from "~/types";
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';

const {
  data: mangas,
  pending,
} = useLazyFetch<Manga[]>(`/api/spotlights?genres=manga-112`);
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
        <NuxtLink :to="useMangaDetailPagePath(spotlight.slug)" class="relative">
          <div
              class="z-999 bottom-0 absolute fixed-0 bg-gradient-to-b from-transparent via-black/60 to-black/80 flex items-end">
            <div class="p-4 w-full h-[82px]">
              <h1 class="text-xl font-bold uppercase line-clamp-1 text-white">
                {{ spotlight.name }}
              </h1>
              <div class="flex flex-wrap items-center mt-4 text-lg gap-x-8">
                <div class="flex items-center gap-x-2">
                  <SvgSmile/>
                  <p class="text-white">{{ spotlight.view }}</p>
                </div>
                <div class="flex items-center gap-x-2">
                  <div class="flex items-center gap-x-2">
                    <p class="text-white bg-highlight banner-author">
                      <a class="p-3">{{ spotlight.author }}</a>
                    </p>
                  </div>
                </div>
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
            <div class="via-black/60">
              <span>
                <nuxt-img
                    format="webp"
                    fil="cover"
                    class="img-position z-10"
                    :src="spotlight.thumbnail" style="object-fit: contain">
                </nuxt-img>
              </span>
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </template>
</template>


