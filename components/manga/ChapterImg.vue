<script setup lang="ts">
import { useRuntimeConfig } from "#imports";
import { PropType } from "vue";
import { ChapterImg } from "~~/types";

const config = useRuntimeConfig();
const publicAPI = config.public.NUXT_PUBLIC_SERVICE_URL;

defineProps({
  chapters: Array as PropType<ChapterImg[]>,
});

</script>

<template>
  <div class="pt-24 mx-auto w-full lg:w-[60%]">
    <div v-for="(chap, index) in chapters" :key="`page-${index}`" class="relative my-0 h-fit w-full">
      <nuxt-img
          format="webp"
          placeholder
          loading="lazy"
          fil="cover"
          class="h-auto comic-img mx-auto w-auto"
          :src="`${publicAPI}/api/proxy?url=http://www.nettruyenco.com&src=${chap?.imgSrc}`">
        </nuxt-img>
    </div>
  </div>
</template>