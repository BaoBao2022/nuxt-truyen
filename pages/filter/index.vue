<script lang="ts" setup>
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
import {Manga, GENRES_NT} from '~/types';
import {
  ChevronDoubleRightIcon,
} from '@heroicons/vue/solid';
import {ref, computed} from 'vue'
import {useFetch} from "#app";

const router = useRouter();
const route = useRoute();
const {query} = route;

const chapter = ref(50);
const genres = ref('manhue');

const view = ref('month');
const gender = ref(1);

const status = ref('ongoing');

const url = computed(() => {
  return `/api/filter`;
});

const selectedChapter = (chap) => {
  chapter.value = chap[0].value
  router.replace(`/filter?genres=${genres.value}&view=${view.value}&chapter=${chapter.value}&gender=${gender.value}&status=${status.value}`);
}

const selectedStatus = (status) => {
  status.value = status[0].value
  router.replace(`/filter?genres=${genres.value}&view=${view.value}&chapter=${chapter.value}&gender=${gender.value}&status=${status.value}`);
}

const selectedRank = (ranl) => {
  view.value = ranl[0].value
  router.replace(`/filter?genres=${genres.value}&view=${view.value}&chapter=${chapter.value}&gender=${gender.value}&status=${status.value}`);
}

const selectedGender = (gender) => {
  gender.value = gender[0].value
  router.replace(`/filter?genres=${genres.value}&view=${view.value}&chapter=${chapter.value}&gender=${gender.value}&status=${status.value}`);
}

const selectedGenres = (genre) => {
  genres.value = genre[0].value
  router.replace(`/filter?genres=${genres.value}&view=${view.value}&chapter=${chapter.value}&gender=${gender.value}&status=${status.value}`);
}

const {
  data: mangas,
  pending,
  refresh
} = await useFetch<Manga[]>(`/filter?genres=${genres.value}&view=${view.value}&chapter=${chapter.value}&gender=${gender.value}&status=${status.value}`, {
  params: {
    genres: genres.value,
    view: view.value,
    status: status.value,
    gender: gender.value,
    chapter: chapter.value
  }
})

watch([route], async () => {
  console.log("route", genres.value)
  await refresh();
});

</script>

<template>
  <NuxtLayout>
    <div v-if="pending">
      <CommonSearchLoading/>
    </div>
    <section class="w-[90%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden" v-else>
      <ul class="breadcrumb" itemscope="" itemtype="http://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
          <NuxtLink to="/" href="" class="itemcrumb" itemprop="item"
                    itemtype="http://schema.org/Thing">
              <span itemprop="name">
                Trang chủ
              </span>
          </NuxtLink>
          <meta itemprop="position" content="1">
        </li>
        <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
          <ChevronDoubleRightIcon class="w-3 h-3 initial mr-2 ml-2"/>
          <a
              href="#" class="itemcrumb" itemprop="item"
              itemtype="http://schema.org/Thing"><span itemprop="name">Thể loại</span></a>
          <meta itemprop="position" content="2">
        </li>
      </ul>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div class="w-full pb-4 lg:my-4 col-span-3">
          <div class="filter flex">
            <LazyFilterByGenres @selectGenres="selectedGenres"/>
            <LazyFilterByRank @selectRank="selectedRank"/>
            <LazyFilterByStatus @selectStatus="selectedStatus"/>
            <LazyFilterByChapter @selectChapter="selectedChapter"/>
            <LazyFilterByGender @selectGender="selectedGender"/>
          </div>
          <ul
              class="w-full overflow-hidden text-white grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-2">
            <li class="flex px-3 py-1 w-full inline-grid mb-4" v-for="manga in mangas" :key="manga.slug">
              <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
                <figure
                    class="image relative h-[200px] md:h-[197px] lg:h-[200px] lg:w-full overflow-hidden rounded-sm">
                        <nuxt-img fil="fill" 
                        sizes="159px md:159px lg:159px" 
                        format="webp" 
                        loading="lazy"
                        :src="manga.thumbnail"
                        class="aspect-w-3 aspect-h-4 absolute object-cover object-center default-img" 
                        placeholder>
                        </nuxt-img>
                </figure>
              </LazyNuxtLink>
              <div class="flex w-full flex-col justify-center mt-4">
                <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
                  <h3
                      class="mb-3 font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl chap-title">
                    {{ manga.name }}
                  </h3>
                </LazyNuxtLink>
                <div class="flex align-center place-content-between mb-2 cursor-pointer"
                     v-for="chapSug in manga.chapSuggests">
                  <a @click="navigateToManga(chapSug.chapNumber, chapSug.chapId, manga.slug)"
                     :data-id="chapSug.chapNumber" :title="`Chapter ${chapSug.chapId}`"
                     class="text-xl font-normal chap-title">Chapter {{ chapSug.chapId }}</a>
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
                <a href="/browse?comics=api-112&amp;view=all">Xem thêm</a>
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                   stroke="currentColor" aria-hidden="true" class="h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </li>
          </ul>
        </div>
        <div class="genres dark-box col-span-1 lg:my-4">
          <b class="page-title uppercase font-medium font-semibold">
            Thể loại
          </b>
          <ul class="grid grid-cols-2 cursor-pointer">
            <li>
              <a>
                Tất cả thể loại
              </a>
            </li>
            <li v-for="genre in GENRES_NT" :key="genre.id">
              <a class="genre_list-title">{{ genre.label }}</a>
            </li>
          </ul>
          tat ca the loai
        </div>
      </div>
    </section>
  </NuxtLayout>

</template>