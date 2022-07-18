<script lang="ts" setup>
const devices = useState('devices');

</script>

<template>
  <main class="h-[auto]">
    <LazySectionSpotlight/>
    <LazySharedBannerBar/>

    <section class="px-3">
      <LazyVisitedComic/>
      <LazyHomePageFavoriteStory/>
      <LazyHomePageMangaUpdated/>
      <LazyHomePageCatelog/>
      <LazyHomePageNgonTinh/>
      <LazyHomePageMaybeLove/>
      <LazyHomePageDamMy/>
      <LazyHomePageNewStory/>
      <LazyHomePageRankList/>
    </section>
  </main>
</template>
