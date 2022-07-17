<script lang="ts" setup>
import useFirstPathChapter from "~/composables/useFirstPathChapter";
import {navigateTo, useRoute, ref} from '#imports';

const route = useRoute();
const params = route.params;
const slug = ref(params.slug);


const navigateToManga = async () => {
  const path = await useFirstPathChapter(null, slug.value);
  return  navigateTo({
    path: path
  })
}
</script>

<template>
  <div class="read-action mt-5">
    <button class="btn bg-primary mr-5 h-[25px] text-base hover:bg-highlight flex items-center"
            @click="navigateToManga">
      <a>Đọc từ đầu</a>
    </button>
    <!--    <a class="btn bg-primary" @click="navigateLastToManga"> Đọc mới nhất</a>-->
  </div>
</template>