<script lang="ts" setup>
import {PropType} from "vue";
import {Chapter} from '~/types';
import {MenuAlt1Icon, PlusSmIcon, MinusSmIcon} from "@heroicons/vue/solid";

defineProps({
  slug: String,
  chapterList: Array as PropType<Chapter[]>
})
const viewMore = ref(false);
const navigateToManga = async (chapterNumber: string, chapterId: string, slug: string) => {
  const path = await useChapter(chapterNumber, chapterId, slug);

  return navigateTo({
    path: path
  })
}

</script>

<template>
  <div class="list-chapter px-5">
    <h2 class="list-title flex items-center ">
      <MenuAlt1Icon class="h-6 w-6 mr-3"/>
      Danh sách chương
    </h2>
    <div class="row heading flex items-center justify-between">
      <div class="col-xs-5 no-wrap">Số chương</div>
      <div class="col-xs-4 no-wrap text-center">Cập nhật</div>
      <div class="col-xs-3 no-wrap text-center">Xem</div>
    </div>
    <nav class="relative" :class="{'shortened-chaplist': !viewMore}">
      <ul>
        <li class="flex items-center justify-between" v-for="(chap, cI) in chapterList" :key="`chap_${chap.chapterId}`">
          <div class="col-xs-5 chapter">
            <a @click="navigateToManga(chap.chapterNumber, chap.chapterId, slug)"
               data-id="875108">Chapter {{ chap.chapterNumber }}</a>
          </div>
          <div class="col-xs-4 text-center no-wrap small">{{ chap.updatedAt }}</div>
          <div class="col-xs-3 text-center small">{{ chap.view }}</div>
        </li>
      </ul>
      <a v-if="!viewMore" @click="viewMore = true" class="view-more flex items-center justify-center">
        <PlusSmIcon class="h-6 w-6"/>
        Xem thêm
      </a>
      <a v-if="viewMore" @click="viewMore = false" class="view-more flex items-center justify-center">
        <MinusSmIcon class="h-6 w-6"/>
        Thu gọn
      </a>
    </nav>
  </div>

</template>