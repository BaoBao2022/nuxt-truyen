<script lang="ts" setup>
import {Manga} from "~/types";

const {
  data: mangas,
  pending,
} = await useLazyFetch<Manga[]>(`/api/manga-updated`);
const devices = useState('devices');

</script>

<template>
  <main v-if="!pending">
    <LazySectionSpotlight :spotlights="mangas" v-if="devices.hasMobile"/>
    <LazySectionSwiper v-if="!devices.hasMobile"/>
    <section class="w-[95%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <LazySectionSuggestion :mangas="mangas"/>
        <div>
          <LazyVisitedComic/>
          <LazySectionRankList/>
        </div>
      </div>
    </section>
  </main>
</template>
