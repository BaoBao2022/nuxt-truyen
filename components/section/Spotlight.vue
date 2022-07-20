<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import { ref } from 'vue';

type autoSettingSwiper = {
  delay: number;
  disableOnInteraction: boolean
}
const modules = ref([Autoplay]);
// A ref object that is passed to the Swiper component.
const autoPlaySettings = ref<autoSettingSwiper>({
  delay: 3000,
  disableOnInteraction: false
});

const { data: mangas, pending } = await useAsyncData('mangas', () => $fetch('/api/spotlights'))
const backgroundImage = () => {
  return {
    backgroundImage: `url(https://cdn.funtoon.vn/image/resources/1641268437278.1942.png)`,
  }
}

</script>

<template>
  <SectionSpotlightBannerLoading v-if="pending" />
  <Swiper v-else :loop="true" :modules="modules" :autoplay="autoPlaySettings" class="relative">
    <SwiperSlide v-for="spotlight in mangas">
      <NuxtLink :to="useMangaDetailPagePath(spotlight.slug)">
        <div class="relative aspect-w-16 aspect-h-9 rounded-xl-md">
          <div
            class="z-20 absolute fixed-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 flex items-end bottom-0 w-full">
            <div class="p-4 w-full">
              <h1 class="text-xl font-bold uppercase line-clamp-2 text-white w-[70%] h-[35px]">
                <a class="flex items-end h-[100%]">{{ spotlight.name }}</a>
              </h1>
              <div class="flex flex-wrap items-center mt-4 text-lg gap-x-8">
                <div class="flex items-center gap-x-2">
                  <p class="text-white flex items-center">
                    <span class="text-xs mr-1">
                      <SvgViewSpotLight class="text-white mr-1" />
                    </span>
                    {{ spotlight.view }}
                  </p>
                </div>
                <div class="flex items-center gap-x-2">
                  <div class="flex items-center gap-x-2">
                    <p class="text-white flex items-center">
                      <SvgFollow class="mr-1" />
                      {{ spotlight.follow }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figure class="w-full bg-cover bg-center bg-no-repeat z-50"
            style="background-image: url(https://cdn.funtoon.vn/image/resources/1641268437278.1942.png)">
          </figure>
          <div>
            <img loading="lazy" class="img-position z-10 object-cover" format="webp" :src="spotlight.thumbnail">
          </div>
        </div>
      </NuxtLink>
    </SwiperSlide>
  </Swiper>
</template>


