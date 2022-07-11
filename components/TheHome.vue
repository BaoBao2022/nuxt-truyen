<script lang="ts" setup>

const comic = ref("");
const {data: month, pending} = useLazyFetch(`/api/top-month?comic=${comic.value}`);
</script>

<template>
  <main v-if="!pending">
    <HomePageSpotlight :spotlights="month"/>
<!--    	<MangaSectionSwiper />-->
    <section class="w-[95%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <MangaSectionSuggestion/>
        <!--			<MangaSectionTabRanking />-->
        <LazyMangaSectionRankList :mangas="month"/>
      </div>
    </section>
  </main>
</template>
