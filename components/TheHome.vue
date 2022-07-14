<script lang="ts" setup>
import {Manga} from "~/types";

const comic = ref("");
const {
  data: mangas,
  pending,
} = await useLazyFetch<Manga[]>(`/api/manga-updated`);

const {data: mangasNew} = await useLazyFetch('/api/manga-new');


</script>

<template>
  <div v-if="pending">
    <CommonPageLoading/>
  </div>
  <main v-else>

<!--    <HomePageSpotlight :spotlights="mangas"/>-->
    <MangaSectionSwiper :mangas="mangasNew"/>
    <section class="w-[95%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <MangaSectionSuggestion :mangas="mangas"/>
        <div>
          <LazyVisitedComic/>
          <LazyMangaSectionRankList/>
        </div>
      </div>
    </section>
  </main>
</template>
