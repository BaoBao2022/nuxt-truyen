<script lang="ts" setup>
import {keys, MangaDetails} from "~/types";
import {TabGroup, TabList, Tab, TabPanels, TabPanel} from '@headlessui/vue'
import {useFetch} from "#app";
import {watchEffect} from "vue";
import {useStorage} from "@vueuse/core";
import {onMounted} from "vue-demi";

const route = useRoute();
const params = route.params;
const slug = ref(params.slug);

const {
  data: manga,
  pending,
  refresh
} = await useFetch<MangaDetails>('/api/comic', {
  params: {
    slug: slug.value,
  }
});

const backgroundImage = (spotlight) => {
  return {
    backgroundImage: `url(${spotlight.thumbnail})`,
  }
}
const categories = ref({
  'Chi tiết': [] as any,
  'Chapters': [] as any,
})
watchEffect(async () => {
  const cache: any = useStorage(keys.mangaCacheDetail, {
    serializer: {
      read: (v: any) => v ? JSON.parse(v) : null,
      write: (v: any) => JSON.stringify(v),
    }
  });

  cache.value = null
  cache.value = {
    slug: slug,
    ...manga.value,
  }

  slug.value = params.slug
  categories.value['Chi tiết'] = [
    {
      id: 1,
      ...manga.value
    }
  ]
  categories.value['Chapters'] = [
    {
      id: 2,
      ...manga.value.chapterList
    }
  ]
  await refresh();
});
</script>

<template>
  <NuxtLayout>
    <div v-if="pending">
      <CommonPageLoading/>
    </div>
    <div class="relative flex h-fit flex-col" v-else>
      <Head>
        <Title>{{manga.value?.title}}</Title>
        <Meta name="description" content="{{manga.value?.author}}"/>
      </Head>
      <div class="relative aspect-w-16 aspect-h-9 rounded-md">
        <div
            class="z-20 absolute fixed-0 bg-gradient-to-b from-transparent via-black/60 to-black/80 flex items-end bottom-0 w-full">
          <div class="p-4 w-full">
            <h1 class="text-xl font-bold uppercase line-clamp-2 text-white w-[70%] h-[35px]">
              <a class="flex items-end h-[100%]">{{ manga.title }}</a>
            </h1>
            <div class="flex flex-wrap items-center mt-4 text-lg gap-x-8">
              <div class="flex items-center gap-x-2">
                <p class="text-white bg-highlight banner-author">
                  <a class="p-3">{{ manga.author }}</a>
                </p>
              </div>
              <div class="flex items-center gap-x-2">
                <p class="text-white flex items-center">
                  <span class="text-xs mr-1">🔥</span>
                  {{ manga.view }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <figure class="deslide-cover w-full bg-cover bg-center bg-no-repeat blur-none"
                :style="backgroundImage(manga)">
        </figure>
        <div>
          <img
              class="img-position z-10"
              :src="manga.thumbnail" style="object-fit: contain">
        </div>
      </div>
      <div id="item-detail" class="mx-auto mt-4 w-[95%] grid grid-cols-1 lg:grid-cols-7">
        <div>
          <TabGroup>
            <TabList class="flex space-x-1 rounded flex justify-around">
              <Tab
                  v-for="category in Object.keys(categories)"
                  as="template"
                  :key="category"
                  v-slot="{ selected }">
                <button :class="[
              'w-full py-2.5 text-sm font-medium leading-5 w-[100px]',
              selected
                ? 'shadow text-primary border-b-[1px] border-rose-900'
                : 'border-b-[1px] border-gray-600']">
                  {{ category }}
                </button>
              </Tab>
            </TabList>
            <TabPanels class="mt-2 px-3">
              <TabPanel
                  v-for="(cates, cId) in Object.values(categories)" :key="cId">
                <div v-for="cate in cates" :key="cate.id">
                  <div v-if="cate.id === 1">
                    <a class="text-xl flex justify-between mt-4">
                      <div class="status text-primary flex items-center">
                        <span class="text-xs mr-1 ml-1">📅</span> {{ cate.status }}
                      </div>
                      <div class="star flex items-center" data-id="62882" data-rating="3.7" data-allowrating="true"
                           style="cursor: pointer;">
                        ⭐⭐⭐⭐
                      </div>
                    </a>
                    <h4 class="text-base leading-7 text-dark mt-2">
                      <LazyMangaDetailReview :review="cate.review"/>
                    </h4>

                    <div class="flex flex-wrap mt-4">
                      <span class="mr-2">🎓</span>
                      <span
                          class="banner-author text-white bg-highlight mr-3 flex items-center h-[20px]"
                          v-for="genre in manga.genres">
                        <a class="p-3 text-base line-clamp-1">
                          {{ genre.genreTitle }}
                        </a>
                      </span>
                    </div>
                    <LazyMangaDetailReadButton/>
                  </div>
                  <div v-if="cate.id === 2">
                    <LazyMangaChaplist :slug="slug" :chapterList="cate"/>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>