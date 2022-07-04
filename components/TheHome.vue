<script lang="ts" setup>
import {useFetch, useLazyFetch} from '#imports'

// const [
//   {data: topAll, pending},
//   {data: topDay},
//   {data: topWeek},
//   {data: topMonth},
//   {data: mangaUpdated},
//   {data: newMangas}] = await Promise.all([
//   useFetch('/api/top-all', {
//     initialCache: true,
//     lazy: false
//   }),
//   useFetch('/api/top-day', {
//     initialCache: true,
//     lazy: true
//   }),
//   useFetch('/api/top-week', {
//     initialCache: true,
//     lazy: true
//   }),
//   useFetch('/api/top-month', {
//     initialCache: true,
//     lazy: true
//   }),
//   useFetch('/api/manga-updated', {
//     initialCache: true,
//     lazy: true
//   }),
//   useFetch('/api/manga-new', {
//     initialCache: true,
//     lazy: true
//   })
// ]);

const {data: topAll, pending} = useLazyFetch(() => '/api/top-all', {
  initialCache: true,
  server: true
})
const {data: topDay} = useLazyFetch(() => '/api/top-day', {
  initialCache: false,
  server: true
})
const {data: topWeek} = useLazyFetch(() => '/api/top-week', {
  initialCache: false,
  server: true
})
const {data: topMonth} = useLazyFetch(() => '/api/top-month', {
  initialCache: false,
  server: true
})
const {data: mangaUpdated} = useLazyFetch(() => '/api/manga-updated', {
  initialCache: false,
  server: true
})
const {data: newMangas} = useLazyFetch(() => '/api/manga-new', {
  initialCache: false,
  server: true,
  // transform: (tran) => {
  //   console.log("tran", tran)
  //   // tran.slice(0, 5)
  // }
})

</script>

<template>
  <div v-if="!pending">
    <LazyHomePageSpotlight/>
    <LazyMangaSectionSwiper :mangas="mangaUpdated" title="Truyện cập nhật mới"/>
    <section class="w-[90%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <LazyMangaSectionRankList :mangas="topAll" title="Truyện nổi bật nhất"/>
        <LazyMangaSectionRankList :mangas="topDay" title="Truyện nổi bật trong ngày"/>
        <LazyMangaSectionRankList :mangas="topWeek" title="Truyện nổi bật trong tuần"/>
        <LazyMangaSectionRankList :mangas="topMonth" title="Truyện nổi bật trong tháng"/>
      </div>
    </section>
    <LazyMangaSectionSwiper :mangas="newMangas" title="Truyện mới"/>
  </div>

</template>