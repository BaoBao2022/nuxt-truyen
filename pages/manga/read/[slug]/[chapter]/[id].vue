<script lang="ts" setup>

import {ref, useAsyncData, useRoute} from "#imports";
import {isClient, set, useStorage} from "@vueuse/core";
import {keys} from "~/types";
import {MANGA_PATH_NAME, MANGA_PATH_READ_NAME} from "~/contants";

const route = useRoute();
const {params} = route;

const {slug, chapter, id} = params;
const realSlug = slug.slice(0, slug.lastIndexOf('-'));

const chapterID = ref(id);
const chapterNumber = ref(chapter);

const {
  pending,
  data: chapters,
  refresh,
} = await useAsyncData('read-manga', () => $fetch(`/api/chapters?slug=${realSlug}&chapter=${chapterNumber.value}&id=${chapterID}`));
console.log("chapters", chapters.value)

const router = useRouter();
const mangaStorage = useStorage(keys.MANGA_DETAIL, {
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
  let index = mangaStorage.value.chapterList.findIndex((chapter) => chapter.chapterNumber === params.chapter);

  if (action === 'next') {
    if (!mangaStorage.value.chapterList[--index]) return;

    const nextChapNumber = mangaStorage.value.chapterList[index].chapterNumber;
    const nextChapId = mangaStorage.value.chapterList[index].chapterId;

    chapterID.value = nextChapId;
    chapterNumber.value = nextChapNumber;

    router.replace(
        `/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${params.slug}/${nextChapNumber}/${nextChapId}`,
    );
  }

  if (action === 'prev') {
    if (!mangaStorage.value.chapterList[++index]) return;

    const prevChapNumber =
        mangaStorage.value.chapterList[index].chapterNumber;
    const prevChapId = mangaStorage.value.chapterList[index].chapterId;

    chapterID.value = prevChapId
    chapterNumber.value = prevChapNumber

    router.replace(
        `/${MANGA_PATH_NAME}/${MANGA_PATH_READ_NAME}/${params.slug}/${prevChapNumber}/${prevChapId}`,
    );
  }

  refresh();
  scrollToTop()
};

</script>

<template>
  <div class="flex h-fit min-h-screen flex-col bg-black">
    <div class="relative flex h-fit flex-1 text-white">
      <div class="h-fit min-h-screen w-full bg-black">
        <div class="fixed top-0 left-0 z-[999] h-[60px] w-full">
          <div class="flex h-full w-full items-center justify-between text-lg md:text-2xl bg-black">
            <div class="flex h-full w-fit items-center justify-evenly gap-4 px-4 md:space-x-4">
              <NuxtLink to="/manga?slug=vo-luyen-dinh-phong-17696" class="flex">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                       stroke="currentColor" aria-hidden="true" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18">
                    </path>
                  </svg>
                </button>
              </NuxtLink>
              <h1 class="fond-bold h-fit w-[25%] capitalize line-clamp-1 md:w-[30%]">{{
                  chapters.data[0].title
                }}</h1>
              <button
                  class="h-[60%] w-fit max-w-[80px] whitespace-nowrap rounded-xl bg-highlight p-2 text-base line-clamp-1 md:text-lg">
                Chapter: {{ chapter }}
              </button>
              <div class="absolute-center h-full w-fit gap-4 md:mx-6">
                <button data-id="prev" class="rounded-lg bg-highlight p-4 md:p-4" @click="handleChapter('prev')">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                       stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18">
                    </path>
                  </svg>
                </button>
                <button data-id="next" class="rounded-lg bg-highlight p-4 md:p-4" @click="handleChapter('next')">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                       stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex h-full w-fit items-center pr-2 md:gap-10 md:px-4">
              <!--                  <button class="hidden items-center justify-center md:flex">-->
              <!--                    <button class="absolute-center relative w-full rounded-xl p-4 gap-2 transition-all bg-highlight">-->
              <!--                      Nguồn: <span>NT</span>-->
              <!--                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"-->
              <!--                           stroke="currentColor" aria-hidden="true"-->
              <!--                           class="animate__rotateIn animate__animated animate__faster h-8 w-8">-->
              <!--                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>-->
              <!--                      </svg>-->
              <!--                    </button>-->
              <!--                  </button>-->
              <button class="rounded-lg bg-highlight p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" aria-hidden="true" class="h-8 w-8">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <LazyMangaChapterImg :chapters="chapters.data"/>
        <div class="h-[200px] w-full overflow-hidden py-4">
          <div class="mx-auto flex h-full w-full flex-col space-y-4 md:w-1/2">
            <div class="flex h-full w-full gap-4 ">
              <button data-id="prev"
                      class="absolute-center z-[700] h-full w-[20%] border-2 border-dashed border-white/40 px-2 text-white/40 transition-all hover:border-white hover:text-white md:gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" aria-hidden="true" class="inline h-8 w-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Chapter trước
              </button>
              <button data-id="next"
                      class="absolute-center h-full w-[80%] gap-2 border-2 border-dashed border-white/40 text-white/40 transition-all hover:border-white hover:text-white">
                Chapter kế tiếp
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                     stroke="currentColor" aria-hidden="true" class="inline-block h-8 w-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
            <h1 class="py-4 px-2 text-center text-white/75">Mẹo: Bạn có thể double tap/click vào 2 cạnh của màn
              hình
              để chuyển chap ở bất cứ vị trí nào ở chế độ dọc!</h1></div>
        </div>
      </div>
    </div>
  </div>

</template>