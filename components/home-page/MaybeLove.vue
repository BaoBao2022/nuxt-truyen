<script setup>
import {useLazyFetch} from '#imports';
import useMangaDetailPagePath from '~/composables/useMangaDetailPagePath';

const {data: mangas, pending} = useLazyFetch(`/api/recommend-story?genres=manga-112`);
</script>

<template>
  <div class="px-3 mb-4 mt-8">
    <h2 class="flex h-[20px] text-2xl font-semibold flex justify-start items-center text-white">
      🌎 Được đề xuất
    </h2>
    <PulseMaybeLoveLoading v-if="pending"/>
    <template v-else>
      <div class="grid grid-cols-2">
        <div class="col-span-1 odd_margin-left odd_margin-right mt-5" v-for="manga in mangas">
          <NuxtLink :to="useMangaDetailPagePath(manga.slug)">
            <nuxt-img loading="lazy"
                      class="rounded h-[130px] w-full object-cover"
                      format="webg"
                      :src="manga.thumbnail"
                      fil="fill">
            </nuxt-img>
          </NuxtLink>
          <h2 class="text-base line-clamp-1 mt-1 text-white">
            {{ manga.name }}
          </h2>
          <p class="text-sm text-zinc-500 line-clamp-1 font-secondary">
            <a class="text-sm font-secondary text-zinc-500 mr-1" v-for="genre in manga.genres">
              {{ genre }}
            </a>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>