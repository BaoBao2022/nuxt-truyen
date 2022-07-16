<script lang="ts" setup>
import {PropType} from "vue";
import {Chapter} from '~/types';
import {MenuAlt1Icon, PlusSmIcon, MinusSmIcon} from "@heroicons/vue/solid";

defineProps({
  slug: String,
  chapterList: Object as PropType<Chapter[]>
})
const navigateToManga = async (chapterNumber: string, chapterId: string, slug: string) => {
  const path = await useChapter(chapterNumber, chapterId, slug);

  return navigateTo({
    path: path
  })
}
</script>

<template>
  <div class="list-chapter">
    <ul>
      <li class="flex items-center justify-between py-3 grid grid-cols-1 chapter_list-detail"
          v-for="(chap, cI) in chapterList">
        <div v-if="cI >= 0">

          <div class="chapter">
            <a class="text-base" @click="navigateToManga(chap.chapterNumber, chap.chapterId, slug)">
              {{ cI }}. Chapter {{ chap.chapterNumber }}</a>
          </div>
          <div class=" no-wrap small small text-xs text-left text-dark">{{ chap.updatedAt }}</div>
          <div class=" small text-xs text-left text-dark">{{ chap.view }}</div>
        </div>

      </li>
    </ul>
  </div>

</template>