<script lang="ts" setup>

</script>

<template>
  <main class="h-[auto] bg-white">
    <LazySectionSpotlight />
    <LazySharedBannerBar />

    <section>
      <LazyHomePageMangaUpdated />
      <!--      <LazyVisitedComic/>-->
      <LazyHomePageXuyenKhong />
      <LazyHomePageCatelog class="mt-10" />
      <LazyHomePageNewStory class="mt-10" />
      <LazyHomePageMaybeLove />
      <LazyHomePageNgonTinh />
      <LazyHomePageDamMy />
      <LazyHomePageFavoriteStory />
      <LazyHomePageRankList />
    </section>
  </main>
</template>
