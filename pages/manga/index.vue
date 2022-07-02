<script lang="ts" setup>
// import {useRoute} from "#imports";
import {SourceParams} from "~/contants";

const route = useRoute();
const {slug} = route.query;

const url = `/api/comic?slug=${slug}&source=${SourceParams.netTruyen}`;
const {data: comic} = useLazyFetch(url);
</script>

<template>
  <NuxtLayout>
    <div class="flex h-fit flex-col" style="height: auto">
      <div class="absolute inset-0 z-0 h-[35%] w-full lg:h-[45%] ">
        <figure class="deslide-cover"><span
            style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
            alt="comic-banner"
            src="https://kyotomanga.live/_next/image?url=https%3A%2F%2Fst.nettruyenco.com%2Fdata%2Fcomics%2F131%2Fbao-boi-cua-lao-dai-da-xuyen-khong-tro-v-5719.jpg&w=3840&q=75"
            decoding="async" data-nimg="fill"
            class=" count={10} object-fit absolute h-full w-full bg-cover bg-top bg-no-repeat object-cover blur"
            sizes="100vw"
            srcset="https://kyotomanga.live/_next/image?url=https%3A%2F%2Fst.nettruyenco.com%2Fdata%2Fcomics%2F131%2Fbao-boi-cua-lao-dai-da-xuyen-khong-tro-v-5719.jpg&w=3840&q=75"
            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"></span>
        </figure>
      </div>
      <div class="z-10 mx-auto w-[85%] pt-32">
        <section class="h-fit w-full">
          <div class="flex h-full w-full flex-col items-center overflow-x-hidden md:flex-row md:items-start">
            <div class="mt-4 w-[50%] md:w-[250px] md:min-w-[250px]">
              <figure class="aspect-w-3 aspect-h-5 relative rounded-2xl">
                <span
                    style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
                  <img alt="manga-thumbnail" sizes="100vw"
                       :srcset="comic.data.thumbnail"
                       :src="comic.data.thumbnail"
                       decoding="async" data-nimg="fill" class="absolute inset-0 rounded-2xl object-cover object-center"
                       style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">
                </span>
              </figure>
            </div>
            <div class="flex h-full w-full flex-col justify-center p-4 text-white md:min-h-[430px] lg:ml-4">
              <div class="w-full space-y-4 text-center md:ml-2 md:text-left lg:w-[80%]">
                <h1 class="font-secondary  font-bold leading-none text-[6.5vw] md:text-[5.5vw] lg:text-[3.5vw]">
                  {{ comic.data.title }}
                </h1>
                <h2 class="text-[3vw] md:min-h-[28px] md:text-[2vw] lg:text-[1.2vw]"></h2>
                <h3 class="text-center text-[3vw] md:text-left md:text-[2vw] lg:text-[1.1vw]">
                  {{ comic.data.author }}
                </h3>
                <h4 class="flex items-center justify-center gap-4 md:justify-start">
            <span class="block h-3 w-3 rounded-full bg-green-500 ">
            </span>
                  {{ comic.data.status }}
                </h4>
              </div>
              <div class="mt-4 flex flex-col-reverse gap-2 md:flex-col">
                <ul class="my-4 flex flex-wrap items-center gap-4">
                  <h3 class="px-2 py-2">Thể loại:</h3>
                  <li class="rounded-xl bg-highlight px-4 py-2" v-for="genre in comic.data.genres">
                    <a href="/browse?genres=mystery">{{ genre.genreTitle }}</a>
                  </li>
                </ul>
                <div class="flex h-[150px] w-full flex-col items-center gap-6 md:flex-row md:items-start">
                  <a :href="`/manga/read/${slug}/${comic.data.chapterList[0].chapterNumber}/${comic.data.chapterList[0].chapterId}`">
                    <button
                        class="pulse-effect-primary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-primary transition-all hover:scale-[110%]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                           stroke="currentColor" aria-hidden="true" class="h-8 w-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                      Đọc ngay
                    </button>
                  </a>
                  <a href="/manga/read/nhat-niem-vinh-hang-20674/63.5/872343">
                    <button
                        class="pulse-effect-secondary absolute-center h-[50px] w-[150px] gap-3 rounded-2xl bg-white text-gray-800 transition-all hover:scale-[110%]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                           class="h-8 w-8 text-primary">
                        <path fill-rule="evenodd"
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              clip-rule="evenodd"></path>
                      </svg>
                      Chap mới nhất
                    </button>
                  </a>
                  <button
                      class="shine-effect absolute-center bg-hight-light h-[50px] w-[50px] rounded-xl transition-all hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                         stroke="currentColor" aria-hidden="true" class=" h-8 w-8">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LazyMangaReview :review="comic.data.review"/>
        <LazyMangaChaplist :chapterList="comic.data.chapterList"/>
      </div>
    </div>
  </NuxtLayout>
</template>