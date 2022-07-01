<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination} from "swiper";

import {ref} from 'vue';


const modules = ref([Pagination]);
const mangas = ref([
  {
    title: "Kekkon Yubiwa Monogatari",
    thumbnail: "https://kyotomanga.live/_next/image?url=https%3A%2F%2Fst.nettruyenco.com%2Fdata%2Fcomics%2F158%2Fkekkon-yubiwa-monogatari.jpg&w=1200&q=75",
    chapter: "54"
  },
  {
    title: "Nhất Niệm Vĩnh Hằng",
    thumbnail: "https://kyotomanga.live/_next/image?url=https%3A%2F%2Fst.nettruyenco.com%2Fdata%2Fcomics%2F194%2Fnhat-niem-vinh-hang.jpg&w=1200&q=75",
    chapter: "32.4"
  },
  {
    title: "Nhất Niệm Vĩnh Hằng",
    thumbnail: "https://kyotomanga.live/_next/image?url=https%3A%2F%2Fst.nettruyenco.com%2Fdata%2Fcomics%2F194%2Fnhat-niem-vinh-hang.jpg&w=1200&q=75",
    chapter: "32.4"
  },
  {
    title: "Nhất Niệm Vĩnh Hằng",
    thumbnail: "https://kyotomanga.live/_next/image?url=https%3A%2F%2Fst.nettruyenco.com%2Fdata%2Fcomics%2F194%2Fnhat-niem-vinh-hang.jpg&w=1200&q=75",
    chapter: "32.4"
  },
  {
    title: "Nhất Niệm Vĩnh Hằng",
    thumbnail: "https://kyotomanga.live/_next/image?url=https%3A%2F%2Fst.nettruyenco.com%2Fdata%2Fcomics%2F194%2Fnhat-niem-vinh-hang.jpg&w=1200&q=75",
    chapter: "32.4"
  }
]);

</script>

<template>
  <section class="w-[90%] mx-auto w-max-[1300px] mt-6 overflow-x-hidden">
    <h2 class="mt-4 flex select-none items-center font-secondary text-3xl text-white hover:cursor-pointer md:text-4xl lg:text-5xl">
      <div class="flex items-center transition-all hover:text-primary"><a href="/browse?view=newComic">Mới cập nhật</a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
             aria-hidden="true" class="h-8 w-8 lg:h-10 lg:w-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </h2>
    <div class="mt-4 hover:cursor-grab lg:mt-6">
      <div class="swiper swiper-initialized swiper-horizontal swiper-ios section-swiper">
        <Swiper slides-per-view="auto"
                :pagination="true"
                :space-between="20"
                :modules="modules" style="transform: translate3d(0px, 0px, 0px); padding-bottom: 50px">
          <SwiperSlide v-for="manga in mangas">
            <div class="aspect-h-4 aspect-w-3 rounded-xl">
              <a href="/manga/details/vo-luyen-dinh-phong-17696?src=nt">
              <span
                  style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; inset: 0;"><img
                  alt="manga-thumbnail z-50" sizes="100vw"
                  :srcset="manga.thumbnail"
                  :src="manga.thumbnail"
                  decoding="async" data-nimg="fill" class="absolute inset-0 rounded-xl object-cover object-center"
                  style="position: absolute; inset: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">
              </span>
              </a>
              <span
                  class="absolute top-2 left-2 h-fit w-fit rounded-xl bg-white bg-opacity-40 px-4 py-2 text-base backdrop-blur-md md:text-xl lg:text-3xl">
                Chapter {{ manga.chapter }}
              </span>
            </div>
            <a href="/manga/details/vo-luyen-dinh-phong-17696?src=nt"><h2
                class="my-2 select-none text-xl text-white transition-all line-clamp-1 hover:text-primary md:text-2xl">
              {{ manga.title }}
            </h2>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

  </section>
</template>

<style scoped lang="scss">
.swiper-slide {
  width: 30%
}
</style>