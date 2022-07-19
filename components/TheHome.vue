<script lang="ts" setup>
const devices = useState('devices');

</script>

<template>
  <main class="h-[auto]">
    <LazySectionSpotlight/>
    <LazySharedBannerBar/>

    <section>
      <LazyHomePageMangaUpdated/>

<!--      <LazyVisitedComic/>-->
      <LazyHomePageFavoriteStory/>
      <LazyHomePageCatelog/>
      <LazyHomePageNgonTinh/>
      <LazyHomePageMaybeLove/>
      <LazyHomePageDamMy/>
      <LazyHomePageNewStory/>
      <LazyHomePageRankList/>
    </section>
  </main>
</template>
