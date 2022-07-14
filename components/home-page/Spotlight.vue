<script lang="ts" setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, EffectFade} from "swiper";
import {PropType, ref} from 'vue';
import {Manga} from "~/types";

const props = defineProps({
  spotlights: Array as PropType<Manga[]>
})

const modules = ref([Autoplay]);
const autoPlaySettings = ref({
  delay: 33333333,
  disableOnInteraction: false
});

const backgroundImage = (spotlight) => {
  return {
    backgroundImage: `url(${spotlight.thumbnail})`,
  }
}

const mangas = props.spotlights.filter(spotlight => spotlight.review !== '');

</script>

<template>
  <Swiper :loop="true" :modules="modules" :autoplay="autoPlaySettings"
          class="relative">
    <SwiperSlide v-for="spotlight in mangas">
      <NuxtLink :to="useMangaDetailPagePath(spotlight.slug)">
        <div class="relative aspect-w-16 aspect-h-9 rounded-md">
          <figure class="deslide-cover w-full bg-cover bg-center bg-no-repeat blur-none"
                  :style="backgroundImage(spotlight)">
          </figure>

          <div style="opacity: 1;">
            <span>
              <img
                  class="img-position"
                  alt="ONE PIECE"
                  :src="spotlight.thumbnail" style="object-fit: contain">
            </span>
          </div>
          <div class="absolute fixed-0 bg-gradient-to-b from-transparent via-black/60 to-black/80 flex items-end">
            <div class="p-4"><h1 class="text-xl font-bold uppercase line-clamp-1 text-white">
              {{ spotlight.name }}
            </h1>
              <div class="flex flex-wrap items-center mt-4 text-lg gap-x-8">
                <div class="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                       class="w-6 h-6 text-green-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
                  </svg>
                  <p class="text-white">87%</p>
                </div>
                <div class="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                       class="w-6 h-6 text-red-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
                  </svg>
                  <p class="text-white">{{ spotlight.view }}</p></div>
                <div class="flex line-clamp-1 items-center space-x-2">
                  <span class="text-white" v-for="genre in spotlight.genres.slice(0, 3)">{{ genre }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>

      <!--      <div :key="spotlight.slug">-->
      <!--        <figure-->
      <!--          class="deslide-cover lg:h-[480px] md:h-[350px] h-[250px] bg-right-top bg-no-repeat md:h-[300px] lg:h-[480px]"-->
      <!--          :style="backgroundImage(spotlight)">-->
      <!--        </figure>-->
      <!--        <div-->
      <!--          class="absolute top-12 left-5 z-40 flex h-[60%] w-[50%] flex-col space-x-4 space-y-4 font-secondary text-white md:left-[5%] md:w-[55%] md:py-4 lg:space-y-6">-->
      <!--          <LazySharedSwiperCardContent :spotlight="spotlight" />-->
      <!--          <LazySharedSwiperCardButton :spotlight="spotlight" />-->
      <!--        </div>-->
      <!--        <LazySharedSwiperCard :spotlight="spotlight" />-->
      <!--      </div>-->
    </SwiperSlide>
  </Swiper>
</template>


<!--<template>-->
<!--  <swiper-->
<!--      :slidesPerView="6"-->
<!--      :centeredSlides="true"-->
<!--      :slidesPerGroupSkip="1"-->
<!--      :grabCursor="true"-->
<!--      :keyboard="{-->
<!--      enabled: true,-->
<!--    }"-->
<!--      :breakpoints="{-->
<!--      '769': {-->
<!--        slidesPerView: 6,-->
<!--        slidesPerGroup: 5,-->
<!--      },-->
<!--    }"-->
<!--      :scrollbar="true"-->
<!--      :navigation="true"-->
<!--      :pagination="{-->
<!--      clickable: true,-->
<!--    }"-->
<!--      :modules="modules"-->
<!--      class="mySwiper"-->
<!--  >-->
<!--    <swiper-slide-->
<!--    ><img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"-->
<!--    /></swiper-slide>-->
<!--    <swiper-slide-->
<!--    ><img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"-->
<!--    /></swiper-slide>-->
<!--    <swiper-slide-->
<!--    ><img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"-->
<!--    /></swiper-slide>  <swiper-slide-->
<!--  ><img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"-->
<!--  /></swiper-slide>  <swiper-slide-->
<!--  ><img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"-->
<!--  /></swiper-slide>  <swiper-slide-->
<!--  ><img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"-->
<!--  /></swiper-slide>  <swiper-slide-->
<!--  ><img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg"-->
<!--  /></swiper-slide>-->


<!--    <swiper-slide-->
<!--    ><img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg"-->
<!--    /></swiper-slide>-->
<!--    <swiper-slide-->
<!--    ><img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg"-->
<!--    /></swiper-slide>-->
<!--    <swiper-slide-->
<!--    ><img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg"-->
<!--    /></swiper-slide>-->
<!--    <swiper-slide-->
<!--    ><img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg"-->
<!--    /></swiper-slide>-->
<!--    <swiper-slide-->
<!--    ><img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg"-->
<!--    /></swiper-slide>-->
<!--    <swiper-slide-->
<!--    ><img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg"-->
<!--    /></swiper-slide>-->
<!--    <swiper-slide-->
<!--    ><img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg"-->
<!--    /></swiper-slide>-->
<!--    <swiper-slide-->
<!--    ><img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg"-->
<!--    /></swiper-slide>-->
<!--  </swiper>-->
<!--</template>-->
<!--<script>-->
<!--// Import Swiper Vue.js components-->
<!--import {Swiper, SwiperSlide} from "swiper/vue";-->

<!--// Import Swiper styles-->
<!--import "swiper/css";-->

<!--import "swiper/css/scrollbar";-->
<!--import "swiper/css/navigation";-->
<!--import "swiper/css/pagination";-->

<!--// import "./style.css";-->

<!--// import required modules-->
<!--import {Keyboard, Scrollbar, Navigation, Pagination} from "swiper";-->

<!--export default {-->
<!--  components: {-->
<!--    Swiper,-->
<!--    SwiperSlide,-->
<!--  },-->
<!--  setup() {-->
<!--    return {-->
<!--      modules: [Keyboard, Scrollbar, Navigation, Pagination],-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->


