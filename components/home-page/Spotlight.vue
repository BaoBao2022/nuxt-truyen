<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper";
import {PropType, ref} from 'vue';
import { Manga } from "~/types";

const props = defineProps({
  spotlights: Array as PropType<Manga[]>
})

const modules = ref([Autoplay, EffectFade]);
const autoPlaySettings = ref({
  delay: 3500,
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
  <Swiper :loop="true" :fadeEffect="{crossFade: true}" effect="fade" :modules="modules" :autoplay="autoPlaySettings"
    class="relative lg:h-[380px] md:h-[250px] h-[200px]">
    <SwiperSlide v-for="spotlight in mangas">
      <div :key="spotlight.slug">
        <figure
          class="deslide-cover lg:h-[480px] md:h-[350px] h-[250px] bg-right-top bg-no-repeat md:h-[300px] lg:h-[480px]"
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


