<script lang="ts" setup>
import {SourceParams} from "~/contants";
import {useHead, watchEffect, useRoute} from "#imports";
import {MangaDetails} from "~/types";

import {
  ChevronDoubleRightIcon,
  UserIcon,
  RssIcon,
  TagIcon,
  EyeIcon,
} from '@heroicons/vue/solid';

const route = useRoute();
const params = route.params;
const slug = ref<string | readonly string[]>("");

watchEffect(() => {
  slug.value = params.slug;
});

const {
  data: manga,
  pending
} = useFetch<MangaDetails>(`/api/comic?slug=${slug.value}&source=${SourceParams.netTruyen}`);

const comic = ref("");
const {data: month} = useFetch(`/api/top-month?comic=${comic.value}`);

useHead({
  title: manga.value?.title,
  description: manga.value?.author,
})

</script>

<template>
  <NuxtLayout>
    <div v-if="pending">
      <CommonPageLoading/>
    </div>
    <div class="flex h-fit flex-col" v-else>
      <div id="item-detail" class="mx-auto mt-2 w-[95%] grid grid-cols-1 lg:grid-cols-5">
        <article class="col-span-3 manga-detail detail-info">
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
            <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
              <ChevronDoubleRightIcon class="w-3 h-3 initial mr-2 ml-2"/>
              <a
                  href="#"
                  class="itemcrumb active" itemprop="item" itemtype="http://schema.org/Thing">
                <span itemprop="name">
                {{ manga.title }}
              </span>
              </a>
              <meta itemprop="position" content="3">
            </li>
          </ul>
          <h1 class="text-center uppercase font-semibold text-3xl title-detail">
            {{ manga.title }}
          </h1>
          <time class="small">
            {{ manga.updatedAt }}
          </time>
          <div class="flex grid grid-cols-1 lg:grid-cols-4 mt-4">
            <div class="px-2 absolute-center">
              <div class="w-[250px] md:w-[250px] md:min-w-[198px] lg:w-[198px] h-[333px] lg:h-[268px] lg:h-[268px]">
                <figure>
                  <NuxtImg class="h-[333px] lg:h-[268px] lg:h-[268px]" sizes="250px" :srcset="manga.thumbnail"
                           :src="manga.thumbnail"
                           loading="lazy" fil="fill">
                  </NuxtImg>
                </figure>
              </div>
            </div>
            <div class="px-5 col-span-3 mt-10">
              <ul class="list-info pt-4">
                <li class="author grid grid-cols-9 mb-3">
                  <div class="flex col-span-3">
                    <p class="name absolute-center-start">
                      <UserIcon class="h-7 w-7 mr-2"/>
                      Tác giả
                    </p>
                  </div>
                  <p class="col-span-6">
                    <a>
                      {{ manga.author }}
                    </a>
                  </p>
                </li>
                <li class="status grid grid-cols-9 mb-3">
                  <div class="flex col-span-3">
                    <p class="name absolute-center-start">
                      <RssIcon class="h-7 w-7 mr-2"/>
                      Tình trạng
                    </p>
                  </div>
                  <p class="col-span-6">
                    {{ manga.status }}
                  </p>
                </li>
                <li class="kind grid grid-cols-9 mb-3">
                  <div class="flex col-span-3 items-start">
                    <p class="name absolute-center-start">
                      <TagIcon class="h-7 w-7 mr-2"/>
                      Thể loại
                    </p>
                  </div>
                  <p class="col-span-6">
                    <a class="a" v-for="(genre, g) in manga.genres" :key="`genre${g}`">
                      {{ genre.genreTitle }} <span v-if="g !== manga.genres.length - 1">- </span>
                    </a>
                  </p>
                </li>
                <li class="grid grid-cols-9 mb-1">
                  <div class="flex col-span-3">
                    <p class="name absolute-center-start">
                      <EyeIcon class="h-7 w-7 mr-2"/>

                      Lượt xem
                    </p>
                  </div>
                  <p class="col-span-6">
                    {{ manga.view }}
                  </p>
                </li>
              </ul>
              <div class="mt-10" itemscope="" itemtype="http://schema.org/Book">
                <a>
                  <span itemprop="name">{{ manga.title }} </span>
                </a>
                <span itemprop="aggregateRating" itemscope=""
                      itemtype="https://schema.org/AggregateRating"> Xếp hạng: <span itemprop="ratingValue">4.7</span>/5 - <span
                    itemprop="ratingCount">2.380</span> Lượt đánh giá.</span>
              </div>
              <div class="star flex items-center" data-id="62882" data-rating="3.7" data-allowrating="true"
                   style="cursor: pointer;">
                <img
                    src="http://st.nettruyenco.com/Data/Sites/1/skins/comic/images/star-on.png" alt="1" title="bad">&nbsp;<img
                  src="http://st.nettruyenco.com/Data/Sites/1/skins/comic/images/star-on.png" alt="2" title="poor">&nbsp;<img
                  src="http://st.nettruyenco.com/Data/Sites/1/skins/comic/images/star-on.png" alt="3" title="regular">&nbsp;<img
                  src="http://st.nettruyenco.com/Data/Sites/1/skins/comic/images/star-half.png" alt="4" title="good">&nbsp;<img
                  src="http://st.nettruyenco.com/Data/Sites/1/skins/comic/images/star-off.png" alt="5" title="gorgeous"><input
                  type="hidden" name="score" value="3.7">
              </div>
              <LazyMangaDetailFollowButton/>
              <LazyMangaDetailReadButton :slug="slug"/>
            </div>
          </div>

          <LazyMangaDetailReview :review="manga.review"/>
          <LazyMangaChaplist :slug="slug" :chapterList="manga.chapterList"/>
        </article>
        <div>
          <LazyMangaSectionRankList limit="7" :mangas="month"/>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>