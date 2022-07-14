<script lang="ts" setup>
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';
import {Manga, GENRES_NT} from '~/types';
import {
  ChevronDoubleRightIcon,
} from '@heroicons/vue/solid';
import {ref, computed} from 'vue'
import {useLazyFetch} from "#imports";

const router = useRouter();
const route = useRoute();
const {query} = route;

const chapterQ = ref(query.chapter);
const genresQ = ref(query.genres);
const viewQ = ref(query.view);
const genderQ = ref(query.gender);
const statusQ = ref(query.status);
const comicQ = ref(query.comics);
const params = ref({})

const url = computed(() => {
  let str = '/filter'
  if (genresQ.value) {
    const prefix = str.includes('?') ? '&' : '?';
    str += `${prefix}genres=${genresQ.value}`
    params.value['genres'] = genresQ.value
  }

  if (chapterQ.value) {
    const prefix = str.includes('?') ? '&' : '?';
    str += `${prefix}chapter=${chapterQ.value}`
    params.value['chapter'] = chapterQ.value
  }

  if (viewQ.value) {
    const prefix = str.includes('?') ? '&' : '?';
    str += `${prefix}view=${viewQ.value}`
    params.value['view'] = viewQ.value
  }

  if (statusQ.value) {
    const prefix = str.includes('?') ? '&' : '?';
    str += `${prefix}status=${statusQ.value}`
    params.value['status'] = statusQ.value
  }

  if (genderQ.value) {
    const prefix = str.includes('?') ? '&' : '?';
    str += `${prefix}gender=${genderQ.value}`
    params.value['gender'] = genderQ.value
  }

  if (comicQ.value) {
    const prefix = str.includes('?') ? '&' : '?';
    str += `${prefix}comics=${comicQ.value}`
    params.value['comics'] = comicQ.value
  }

  return str;
});

const selectedChapter = (chap) => {
  chapterQ.value = chap[0].value
  router.replace(url.value);
}

const selectedStatus = (status) => {
  statusQ.value = status[0].value
  router.replace(url.value);
}

const selectedRank = (ranl) => {
  viewQ.value = ranl[0].value
  router.replace(url.value);
}

const selectedGender = (gender) => {
  genderQ.value = gender[0].value
  router.replace(url.value);
}

const selectedGenres = (genre) => {
  genresQ.value = genre[0].value
  router.replace(url.value);
}

const selectComic = (comic) => {
  comicQ.value = comic[0].value
  router.replace(url.value);
}

const {
  data: mangas,
  pending,
  refresh
} = await useLazyFetch<Manga[]>('/api' + url.value, {
  params: params.value
})

watch([route], async () => {
  await refresh();
});

</script>

<template>
  <NuxtLayout>
    <div v-if="pending">
      <CommonPageLoading/>
    </div>
    <section class="w-[95%] mx-auto min-w-[333px] w-max-[1300px] mt-6 overflow-x-hidden pt-24" v-else>
      <ul class="breadcrumb">
        <li>
          <NuxtLink to="/">
              <span>
                Trang chủ
              </span>
          </NuxtLink>
          <meta itemprop="position" content="1">
        </li>
        <li>
          <ChevronDoubleRightIcon class="w-3 h-3 initial mr-2 ml-2"/>
          <NuxtLink
              href="/filter">
            <span itemprop="name">
              Thể loại
            </span>
          </NuxtLink>
          <meta itemprop="position" content="2">
        </li>
      </ul>
      <div class="filter z-10 mx-auto min-h-fit">
        <div class="grid min-h-[100px] w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <LazyFilterByGenres @selectGenres="selectedGenres"/>
          <LazyFilterByComics @selectComic="selectComic"/>
          <LazyFilterByRank @selectRank="selectedRank"/>
          <LazyFilterByStatus @selectStatus="selectedStatus"/>
          <LazyFilterByChapter @selectChapter="selectedChapter"/>
          <LazyFilterByGender @selectGender="selectedGender"/>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div class="w-full pb-4 lg:my-4 col-span-3">
          <ul
              class="w-full overflow-hidden text-white grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 mt-2 items">
            <li class="flex px-3 py-1 w-full inline-grid mb-4 item" v-for="manga in mangas" :key="manga.slug">
              <LazyNuxtLink :to="useMangaDetailPagePath(manga.slug)">
                <figure
                    class="relative h-[200px] md:h-[197px] lg:h-[200px] lg:w-full overflow-hidden rounded-sm">
                  <nuxt-img fil="fill"
                            sizes="159px md:159px lg:159px"
                            format="webp"
                            loading="lazy"
                            :src="manga.thumbnail"
                            class="aspect-w-3 aspect-h-4 absolute object-cover object-center"
                            placeholder="../assets/images/placeholder.png">
                  </nuxt-img>
                </figure>
              </LazyNuxtLink>
              <figcaption class="flex w-full flex-col justify-center mt-4">
                <h3
                    class="mb-3 font-secondary text-2xl font-semibold transition-all line-clamp-1 hover:cursor-pointer hover:text-primary md:text-3xl chap-title">
                  <a>
                    {{ manga.name }}
                  </a>
                </h3>
                <div class="flex align-center place-content-between mb-2 cursor-pointer chapter"
                     v-for="chapSug in manga.chapSuggests">
                  <a @click="navigateToManga(chapSug.chapNumber, chapSug.chapId, manga.slug)"
                     :data-id="chapSug.chapNumber" :title="`Chapter ${chapSug.chapId}`"
                     class="text-xl font-normal chap-title">Chapter {{ chapSug.chapId }}</a>
                  <div class="flex">
                    <h4 class="text-lg chap-title chapter">
                      <i class="time">
                        {{ chapSug.updatedAt }}
                      </i>
                    </h4>
                  </div>
                </div>
              </figcaption>
            </li>
            <li
                class="flex w-full items-center justify-center rounded-xl py-4 px-4 transition-all hover:cursor-pointer hover:bg-highlight">
              <button class="lg:text-3xl">
                <NuxtLink to="/filter?comics=api-112&view=all">Xem thêm</NuxtLink>
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                   stroke="currentColor" aria-hidden="true" class="h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </li>
          </ul>
        </div>
        <LazyFilterListGenres/>
      </div>
    </section>
  </NuxtLayout>
</template>