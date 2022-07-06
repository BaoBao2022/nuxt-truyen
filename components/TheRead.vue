<script lang="ts" setup>
import {MANGA_PATH_NAME, MANGA_PATH_READ_NAME} from "~/contants";
import {ref, useHead, useLazyAsyncData, useLazyFetch, useRoute} from "#imports";
import {isClient, set, useStorage} from "@vueuse/core";
import {CogIcon} from '@heroicons/vue/outline';
import {keys} from "~/types";
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';

import {
  ArrowLeftIcon,
  ArrowNarrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/vue/solid';

const route = useRoute();
const router = useRouter();

const params = route.params;

const chapterID = ref(params.id);
const chapterNumber = ref(params.chapter);
const realSlug = params.slug.slice(0, params.slug.lastIndexOf('-'));

const {
  pending,
  data: chapters,
  refresh,
} = useFetch(`/api/chapters?slug=${realSlug}&chapter=${chapterNumber.value}&id=${chapterID.value}`);

const manga = useStorage(keys.MANGA_DETAIL, {
  serializer: {
    read: (v: any) => v ? JSON.parse(v) : null,
    write: (v: any) => JSON.stringify(v),
  }
});

const scrollToTop = () => {
  if (isClient) {
    window.scrollTo(0, 0);
  }
}

const handleChapter = async (action: string) => {
  let stt = manga.value.chapterList.findIndex((chapter) => chapter.chapterNumber === params.chapter);

  if (action === 'next') {
    if (!manga.value.chapterList[--stt]) return;

    const [cNum, cID] = [
      manga.value.chapterList[stt].chapterNumber,
      manga.value.chapterList[stt].chapterId
    ]

    chapterID.value = cID;
    chapterNumber.value = cNum;

    router.replace(
        `/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${params.slug}/${cNum}/${cID}`,
    );
  }

  if (action === 'prev') {
    if (!manga.value.chapterList[++stt]) return;

    const [cNum, cID] = [
      manga.value.chapterList[stt].chapterNumber,
      manga.value.chapterList[stt].chapterId
    ];

    chapterNumber.value = cNum
    chapterID.value = cID

    router.replace(
        `/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${params.slug}/${cNum}/${cID}`,
    );
  }

  await refresh();
  scrollToTop()
};

const handleNextProcess = () => {

}

useHead({
  title: `${manga.value?.title} | Chapter ${chapterNumber.value}`,
  description: manga.value?.review,
})

</script>

<template>
<div v-if="pending">
		<CommonSearchLoading />
	</div>
  <div class="flex h-fit min-h-screen flex-col bg-black" v-else>
    <div class="relative flex h-fit flex-1 text-white">
      <div class="h-fit min-h-screen w-full bg-black">
        <div class="fixed top-0 left-0 z-[999] h-[60px] w-full">
          <div class="flex h-full w-full items-center justify-between text-lg md:text-2xl bg-black">
            <div class="flex h-full w-fit items-center justify-evenly gap-4 px-4 md:space-x-4">
              <LazyNuxtLink :to="useMangaDetailPagePath(params.slug)" class="flex">
                <button>
                  <ArrowNarrowLeftIcon class="h-8 w-8"/>
                </button>
              </LazyNuxtLink>
              <client-only>
                <h1 class="fond-bold h-fit w-[25%] capitalize line-clamp-1 md:w-[30%]">{{ manga.title }}</h1>
              </client-only>
              <button
                  class="h-[60%] w-fit max-w-[80px] whitespace-nowrap rounded-xl bg-highlight p-2 text-base line-clamp-1 md:text-lg">
                Chapter: {{ chapterNumber }}
              </button>
              <div class="absolute-center h-full w-fit gap-4 md:mx-6">
                <button data-id="prev" class="rounded-lg bg-highlight p-4 md:p-4" @click="handleChapter('prev')">
                  <ArrowLeftIcon class="h-6 w-6"/>
                </button>
                <button data-id="next" class="rounded-lg bg-highlight p-4 md:p-4" @click="handleChapter('next')">
                  <ArrowRightIcon class="w-6 h-6"/>
                </button>
              </div>
            </div>
            <div class="flex h-full w-fit items-center pr-2 md:gap-10 md:px-4">
              <button class="rounded-lg bg-highlight p-2">
                <CogIcon class="h8 w-8"/>
              </button>
            </div>
          </div>
        </div>
        <LazyMangaChapterImg :chapters="chapters.data"/>
        <LazyMangaReadMangaFooter @nextProcess="handleNextProcess"/>
      </div>
    </div>
  </div>

</template>