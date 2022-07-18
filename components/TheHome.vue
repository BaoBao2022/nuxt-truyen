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
      <LazyHomePageCatelog/>
      <LazyHomePageNgonTinh/>
      <LazyHomePageMaybeLove/>
      <LazyHomePageDamMy/>
      <LazyHomePageNewStory/>
      <LazyHomePageMangaUpdated/>
      <LazyHomePageRankList/>
    </section>
  </main>
</template>
