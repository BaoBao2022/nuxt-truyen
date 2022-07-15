<script setup>
import {HeartIcon} from "@heroicons/vue/solid";
import {BookOpenIcon} from "@heroicons/vue/outline";
</script>

<template>
  <div class="h-[100px] banner-icons py-10">
    <div class="icons grid grid-cols-4">
      <div class="grid grid-cols-1">
        <div class="flex items-center justify-center">
          <div class="icon w-16 h-16 bg-amber-100 rounded-[100%] flex items-center justify-center">
            <img class="w-9 h-9 mb-2" src="~/assets/images/ranking.png">
          </div>
        </div>
        <p class="text-center text-xl mt-2">
          BXH
        </p>
      </div>
      <div class="grid grid-cols-1">
        <div class="flex items-center justify-center">
          <div class="icon w-16 h-16 flex items-center justify-center rounded-[100%] bg-white">
            <img class="w-9 h-9" src="~/assets/images/category.png">
          </div>
        </div>
        <p class="text-center text-xl mt-2">
          Thể loại
        </p>
      </div>

      <div class="grid grid-cols-1">
        <div class="flex items-center justify-center">
          <div class="icon w-16 h-16 rounded-[100%] flex items-center justify-center bg-white">
            <HeartIcon class="w-10 h-10 text-amber-700"/>
          </div>
        </div>
        <p class="text-center text-xl mt-2">
          Theo dõi
        </p>
      </div>

      <div class="grid grid-cols-1">
        <div class="flex items-center justify-center">
          <div class="icon w-16 h-16 bg-amber-100 rounded-[100%] flex items-center justify-center">
            <BookOpenIcon class="w-9 h-9 text-amber-700"/>
          </div>
        </div>
        <p class="text-center text-xl mt-2">
          Lịch xử
        </p>
      </div>
    </div>
  </div>
</template>