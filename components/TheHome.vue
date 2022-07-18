<script lang="ts" setup>
const devices = useState('devices');

</script>

<template>
  <main>
    <LazySectionSpotlight/>
    <LazySharedBannerBar/>

    <section class="px-3">
      <LazyVisitedComic/>
      <LazyHomePageFavoriteStory/>
      <LazyHomePageCatelog/>
      <LazyHomePageMaybeLove/>
      <LazyHomePageDamMy/>
      <LazyHomePageNgonTinh/>
      <LazyHomePageNewStory/>
      <LazyHomePageMangaUpdated/>
      <LazyHomePageRankList/>
    </section>
  </main>
</template>
