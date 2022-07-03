<script lang="ts" setup>

</script>

<template>
  <LazyHomePageSpotlight/>
  <LazyHomePageMangeNewUpdate title="Truyện cập nhật mới"/>
  <section class="w-[90%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <LazyMangaRankingTopAll title="Truyện nổi bật nhất"/>
      <LazyMangaRankingTopMonth title="Truyện nổi bật trong tháng"/>
      <LazyMangaRankingTopWeek title="Truyện nổi bật trong tuần"/>
      <LazyMangaRankingTopDay title="Truyện nổi bật trong ngày"/>
    </div>
  </section>
  <LazyHomePageMangaNew title="Truyện mới"/>
</template>