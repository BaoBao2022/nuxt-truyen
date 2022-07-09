<script lang="ts" setup>
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
import {Manga} from '~~/types';
import {ChevronRightIcon} from "@heroicons/vue/solid";

const comic = ref("");
const {
  data: mangas,
  pending,
} = await useAsyncData<Manga[]>('new-mangas', () => $fetch(`/api/manga-new?comic=${comic.value}`));
console.log("mangas", mangas.value);
const navigateToManga = async (chapterNumber: string, chapterId: string, slug: string) => {
  const path = await useChapter(chapterNumber, chapterId, slug);

  return navigateTo({
    path: path
  })
}
</script>

<template>
  <div v-if="pending">
    <CommonSearchLoading/>
  </div>
  <div class="w-full rounded-xl pb-4 lg:my-4 col-span-3" v-if="!pending">
    <h2
        class="items-center	justify-start whitespace-nowrap font-secondary text-1xl h-[40px] flex page-title px-3 custom-title">
      Gợi ý cho bạn
      <ChevronRightIcon class="h-8 w-8"/>
    </h2>
    <ul class="w-full overflow-hidden text-white grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
      <li class="flex px-3 py-1 w-full inline-grid mb-4" v-for="manga in mangas" :key="manga.slug">
        <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
          <figure
              class="image relative h-[200px] md:h-[197px] lg:h-[200px] lg:w-[158px] overflow-hidden rounded-sm">
                        <span class="default-span-figure">
                            <nuxt-img fil="fill" sizes="159px md:159px lg:159px" format="webp" loading="lazy"
                                      :src="manga.thumbnail"
                                      class="aspect-w-3 aspect-h-4 absolute object-cover object-center default-img">
                            </nuxt-img>
                        </span>
          </figure>
        </LazyNuxtLink>
        <div class="flex w-full flex-col justify-center mt-4">
          <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
            <h3
                class="mb-3 font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl chap-title">
              {{ manga.name }}
            </h3>
          </LazyNuxtLink>
          <div class="flex align-center place-content-between mb-2 cursor-pointer" v-for="chapSug in manga.chapSuggests">
            <a @click="navigateToManga(chapSug.chapNumber, chapSug.chapId, manga.slug)" :data-id="chapSug.chapNumber" :title="`Chapter ${chapSug.chapId}`" class="text-xl font-normal chap-title">Chapter {{ chapSug.chapId }}</a>
            <div class="flex">
              <!-- <EyeIcon class="h-6 w-5 mr-2" style="margin-top: 1px" /> -->
              <h4 class="text-lg chap-title"> {{ chapSug.updatedAt }}</h4>
            </div>
          </div>
        </div>
      </li>
      <li
          class="flex w-full items-center justify-center rounded-xl py-4 px-4 transition-all hover:cursor-pointer hover:bg-highlight">
        <button class="lg:text-3xl">
          <a href="#">Xem thêm</a>
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
             stroke="currentColor" aria-hidden="true" class="h-8 w-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </li>
    </ul>
  </div>
</template>