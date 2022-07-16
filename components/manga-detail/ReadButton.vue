<script setup>
import useFirstPathChapter from "~/composables/useFirstPathChapter";
import useLastPathChapter from '~/composables/useLastPathChapter';

import {navigateTo} from '#imports';

const props = defineProps({
  slug: String
})

const navigateToManga = async () => {
  const path = await useFirstPathChapter(null, props.slug);
  return navigateTo({
    path: path
  })
}

const navigateLastToManga = async () => {
  const path = await useLastPathChapter(null, props.slug);
  return navigateTo({
    path: path
  })
}
</script>

<template>
  <div class="read-action mt-5">
    <button class="btn bg-primary mr-5 h-[25px] text-base hover:bg-highlight flex items-center" @click="navigateToManga">
      <a>Đọc từ đầu</a>
    </button>
<!--    <a class="btn bg-primary" @click="navigateLastToManga"> Đọc mới nhất</a>-->
  </div>
</template>