<script lang="ts" setup>
import {useFetch} from "#imports";

const {data: homeProps} = useFetch('/api/home-props');
console.log("homeProps", homeProps.value)
</script>

<template>
  <LazyHomePageSpotlight/>
  <LazyHomePageMangeNewUpdate title="Cập nhật mới" :mangas="homeProps.newManga "/>
  <section class="w-[90%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <LazyHomePageMangaFeatured title="Truyện nổi bật nhất" :mangas="homeProps.newMangaUpdated"/>
      <LazyHomePageMangaFeatured title="Truyện top tháng" :mangas="homeProps.topMonthManga"/>
      <LazyHomePageMangaFeatured title="Truyện top tuần" :mangas="homeProps.topWeekManga"/>
      <LazyHomePageMangaFeatured title="Truyện top ngày" :mangas="homeProps.topDayManga"/>
    </div>
  </section>
  <LazyHomePageMangeNewUpdate title="Truyện mới" :mangas="homeProps.newManga "/>
</template>

<style lang="scss">
.deslide-cover:before {
  z-index: 1;
  background: linear-gradient(90deg, #202125, rgba(32, 33, 37, .6) 40%, rgba(32, 33, 37, 0) 60%, rgba(32, 33, 37, 0) 80%, #202125);
}

.deslide-cover:after {
  background: linear-gradient(0deg, #202125, rgba(32, 33, 37, 0) 50%, #202125);
  z-index: 2;
}

.deslide-cover:after, .deslide-cover:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>