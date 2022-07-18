<script lang="ts" setup>
import {Manga} from "~/types";
import {Swiper, SwiperSlide} from 'swiper/vue';
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath'

const {data: mangas, pending} = useLazyFetch<Manga[]>(`/api/follow-story?genres=comedy-99`);
</script>

<template>
  <div class="visited-comics px-3 mb-4">
    <h2 class="flex h-[40px] text-2xl font-semibold flex justify-start items-center text-white">
      <SvgFollow class="mr-2"/>
      Được yêu thích
    </h2>
    <PulseFavoriteStoryLoading v-if="pending"/>
    <template v-else>
      <div class="box dark-box">

        <Swiper
            class="h-[145px]"
            :pagination="true"
            :slides-per-view="3"
            :space-between="14">

<!--          <div-->
<!--              className="absolute-center absolute bottom-1 right-10 z-50 flex h-fit w-fit flex-col space-y-4 lg:bottom-10">-->
<!--            <SharedSwiperButton-->
<!--                type="prev"-->
<!--                className="transition-all absolute-center z-[300] md:h-16 md:w-16 w-14 h-14 rounded-2xl text-white bg-highlight hover:bg-primary"-->
<!--                styleIcon="h-10 w-10"-->
<!--            />-->
<!--            <SharedSwiperButton-->
<!--                type="next"-->
<!--                className="transition-all absolute-center z-[300] md:h-16 md:w-16 w-14 h-14 rounded-2xl text-white bg-highlight hover:bg-primary"-->
<!--                styleIcon="h-10 w-10"-->
<!--            />-->
<!--          </div>-->

          <SwiperSlide v-for="manga in mangas">
            <div class="duration-200 ease-in-out transition-all">
              <NuxtLink :to="useMangaDetailPagePath(manga.slug)">
                <nuxt-img
                    format="webp"
                    loading="lazy"
                    class="rounded object-cover h-[150px] w-full"
                    :src="manga.thumbnail"
                    fil="fill">
                </nuxt-img>
              </NuxtLink>
              <h2 class="text-base line-clamp-1 mt-1 text-white">
                {{ manga.name }}
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </template>
  </div>
</template>

<style lang="scss">
.swiper-pagination-bullet-active {
  background-color: #f43f5e !important;
}

.swiper-pagination-horizontal {
  bottom: -5px !important;
}
</style>