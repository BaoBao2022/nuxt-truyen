<script lang="ts" setup>
import {MANGA_PATH_NAME, MANGA_PATH_READ_NAME} from "~/contants";
import {ref, useAsyncData, useHead, useRoute} from "#imports";
import {isClient, set, useStorage} from "@vueuse/core";
import {CogIcon} from '@heroicons/vue/outline';
import {keys} from "~/types";

import {
  ArrowLeftIcon,
  ArrowNarrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/vue/solid';

const route = useRoute();
const router = useRouter();
const {params} = route;
const {slug, chapter, id} = params;
const chapterID = ref(id);
const realSlug = slug.slice(0, slug.lastIndexOf('-'));
const chapterNumber = ref(chapter);

const {
  pending,
  data: chapters,
  refresh,
} = await useAsyncData('read-manga', () => $fetch(`/api/chapters?slug=${realSlug}&chapter=${chapterNumber.value}&id=${chapterID}`));

const manStorage = useStorage(keys.MANGA_DETAIL, {
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
  let stt = manStorage.value.chapterList.findIndex((chapter) => chapter.chapterNumber === params.chapter);

  if (action === 'next') {
    if (!manStorage.value.chapterList[--stt]) return;

    const nextChapNumber = manStorage.value.chapterList[stt].chapterNumber;
    const nextChapId = manStorage.value.chapterList[stt].chapterId;

    chapterID.value = nextChapId;
    chapterNumber.value = nextChapNumber;

    router.replace(
        `/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${params.slug}/${nextChapNumber}/${nextChapId}`,
    );
  }

  if (action === 'prev') {
    if (!manStorage.value.chapterList[++stt]) return;

    const prevChapNumber =
        manStorage.value.chapterList[stt].chapterNumber;
    const prevChapId = manStorage.value.chapterList[stt].chapterId;

    chapterID.value = prevChapId
    chapterNumber.value = prevChapNumber

    router.replace(
        `/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${params.slug}/${prevChapNumber}/${prevChapId}`,
    );
  }

  await refresh();
  scrollToTop()
};

const handleNextProcess = () => {

}

console.log("manStorage", manStorage.value)

useHead({
  title: `${manStorage.value.title} | Chapter ${chapterNumber.value}`,
  description: manStorage.value.review,
})

</script>

<template>
  <div class="flex h-fit min-h-screen flex-col bg-black">
    <div class="relative flex h-fit flex-1 text-white">
      <div class="h-fit min-h-screen w-full bg-black">
        <div class="fixed top-0 left-0 z-[999] h-[60px] w-full">
          <div class="flex h-full w-full items-center justify-between text-lg md:text-2xl bg-black">
            <div class="flex h-full w-fit items-center justify-evenly gap-4 px-4 md:space-x-4">
              <NuxtLink :to="`/${MANGA_PATH_NAME}?slug=${slug}`" class="flex">
                <button>
                  <ArrowNarrowLeftIcon class="h-8 w-8"/>
                </button>
              </NuxtLink>
              <h1 class="fond-bold h-fit w-[25%] capitalize line-clamp-1 md:w-[30%]">{{ manStorage.title }}</h1>
              <button
                  class="h-[60%] w-fit max-w-[80px] whitespace-nowrap rounded-xl bg-highlight p-2 text-base line-clamp-1 md:text-lg">
                Chapter: {{ chapter }}
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