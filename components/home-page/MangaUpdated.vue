<script lang="ts" setup>
import {Manga} from "~/types";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Grid} from "swiper";
import {ChevronDoubleRightIcon} from "@heroicons/vue/solid";
import "swiper/css/grid";

const {
  data: mangas,
  pending,
} = await useLazyFetch<Manga[]>(`/api/manga-updated?genres=manga-112`);
const swiperBreakPoints = {
  1: {
    slidesPerView: 2,
    spaceBetween: 2,
  },
  320: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  750: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  800: {
    slidesPerView: 6,
    spaceBetween: 20,
  },
};
</script>

<template>
  <div class="mb-4">
    <PulseMangaUpdatedLoading v-if="pending"/>
    <div class="px-4" v-else>
      <div>
        <a href="/xu-huong">
<!--          <img class="w-full" src="https://weeboo.vn/icons/widgets/trend/img-header.svg" alt="trend">-->
          <SvgBannerTrending />
        </a>
      </div>
      <div class="gxFbOF">
        <swiper
            :modules="[Grid]"
            :grid="{
                  rows: 3,
                  fill: 'row'
                }"
            :slides-per-view="1.3"
            :space-between="14">
          <swiper-slide v-for="manga in mangas" class="h-[130px]">
            <div class="duration-200 ease-in-out transition-all kesnlQ">
              <NuxtLink
                  class="flex items-center"
                  :to="useMangaDetailPagePath(manga.slug)">
                <img
                    loading="lazy"
                    class="rounded-xl w-[75px] h-[100px] object-cover"
                    :src="manga.thumbnail"
                    fil="fill">
                <div class="trendItem__Info-sc-1vc74my-1 hzqRqV">
                  <h3 class="trendItem__Name-sc-1vc74my-3 bTGYsm text-xl font-semibold">
                    <NuxtLink :to="useMangaDetailPagePath(manga.slug)">
                      {{ manga.name }}
                    </NuxtLink>
                  </h3>
                  <p class="trendItem__ChapCount-sc-1vc74my-4 jbgrIv">
                    {{ manga.newChapter }}
                  </p>
                  <div class="trendItem__ViewReview-sc-1vc74my-5 hhWiSs">
                    <div class="trendItem__ComicView-sc-1vc74my-6 iUoBCq">
                      <SvgViewChapter/>
                      <span>{{ manga.view }}</span>
                    </div>
                    <!--                        <div class="trendItem__ComicReview-sc-1vc74my-7 iCEPso"><img-->
                    <!--                            src="/icons/widgets/trend/icon-star.svg" alt="review"><span>5</span><span-->
                    <!--                            class="reviewCount">(&lt;!&ndash; &ndash;&gt;1.3K&lt;!&ndash; &ndash;&gt;)</span></div>-->
                  </div>
                </div>

              </NuxtLink>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="trend__Footer-qgyx2j-3 jQjUBg">
        <div class="trend__LinkToAll-qgyx2j-4 iABAfw">
          <a href="/xu-huong">
            <span>Xem tất cả</span>
            <ChevronDoubleRightIcon class="h-5 w-5 text-gray-custom ml-2"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@media only screen and (min-width: 375px) {
  .swiper-slide {
    margin-right: 0 !important;
    margin-top: 0 !important;
  }
}

.hzqRqV {
  width: calc(100% - 102px);
  margin: 0px 10px 0px 15px;
}

.bTGYsm {
  margin: 0px 0px 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
}

.bTGYsm a {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: rgb(38, 42, 65);
}

.jbgrIv {
  margin: 0px 0px 10px;
  font-size: 13px;
  line-height: 17px;
  color: rgb(138, 138, 143);
}

.hhWiSs {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.iUoBCq {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 15px;
}

.iCEPso {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.iUoBCq span {
  font-size: 13px;
  line-height: 18px;
  color: rgb(138, 138, 143);
}


.kesnlQ {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgb(255, 244, 238);
  cursor: pointer;
}

.GWlZw {
  padding: 0 13px;
  margin: 0 0 30px;
}

.gxFbOF {
  padding: 0 13px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 10%) 0 3px 20px;
}

.jQjUBg {
  border-radius: 0px 0px 8px 8px;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 20px;
}

.iABAfw a {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 11px;
  background: rgb(250, 250, 250);
  border-radius: 0 0 8px 8px;
}

.iABAfw span {
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  color: rgb(138, 138, 143);
}
</style>