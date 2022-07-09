<script setup>
import {DocumentIcon, ChevronRightIcon, ChevronLeftIcon} from '@heroicons/vue/solid'

const moreReview = ref(false);
defineProps({
  review: String
})
</script>

<template>
  <div class="detail-content px-5">
    <h3 class="list-title uppercase flex items-center">
      <DocumentIcon class="h-6 w-6 mr-3"/>
      Nội dung
    </h3>
    <p class="relative" :class="{'shortened' : !moreReview }">
      {{ review }}
    </p>

    <a v-if="!moreReview" class="morelink flex items-center" @click="moreReview = true">
      Xem thêm
      <ChevronRightIcon class="h-5 w-5"/>
    </a>

    <a v-if="moreReview" class="morelink flex items-center" @click="moreReview = false">
      <ChevronLeftIcon class="h-5 w-5"/>
      Thu gọn
    </a>
  </div>
</template>