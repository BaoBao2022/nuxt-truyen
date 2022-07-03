<script setup lang="ts">
import {useRuntimeConfig} from "#imports";

const config = useRuntimeConfig();
const publicAPI = config.PUBLIC_API || 'http://baobaoapp.herokuapp.com';

defineProps({
  chapters: Array,
});

</script>

<template>
  <div class="pt-24 mx-auto w-full lg:w-[60%]">
    <div v-for="(chap, index) in chapters"
         :id="`page-${index}`"
         class="relative my-0 h-fit w-full">
      <img alt="chapter-img" class="h-auto comic-img mx-auto w-auto"
           :src="`${publicAPI}/api/proxy?url=http://www.nettruyenco.com&src=${chap.imgSrc}`">
    </div>
  </div>
</template>