<script lang="ts" setup>
const devices = useState('devices');

</script>

<template>
  <main>
    <LazySectionSpotlight v-if="devices.hasMobile"/>
    <LazySectionSwiper v-if="!devices.hasMobile"/>
    <LazySharedBannerBar/>

    <section class="w-[95%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden">
      <LazyVisitedComic/>
      <LazyHomePageFavoriteStory/>
      <LazyHomePageCatelog/>
      <LazyHomePageMaybeLove/>
      <LazyHomePageNewStory/>
      <LazyHomePageNgonTinh/>
      <LazyHomePageMangaUpdated/>
      <LazyHomePageRankList/>
    </section>
    <!--    <section class="w-[95%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden">-->
    <!--      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">-->
    <!--&lt;!&ndash;        <LazySectionSuggestion/>&ndash;&gt;-->
    <!--        <div>-->
    <!--&lt;!&ndash;          <LazyVisitedComic/>&ndash;&gt;-->
    <!--&lt;!&ndash;          <LazySectionRankList/>&ndash;&gt;-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->
  </main>
</template>
