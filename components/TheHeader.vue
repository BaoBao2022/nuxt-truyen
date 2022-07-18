<script setup>
import {ref} from 'vue'
import {ArrowSmLeftIcon} from '@heroicons/vue/solid'

const route = useRoute();
const scrollTransform = ref(0);
if (typeof document !== 'undefined')
  document.addEventListener('scroll', (e) => {
    scrollTransform.value = window.pageYOffset || document.documentElement.scrollTop;
  });

</script>

<template>
  <div :class="scrollTransform === 0  ? 'bg-gradient-to-b from-black/80 via-black/60' : 'bg-black/70'"
       class="max-w-[450px] md:max-w-[750px] px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-36 px-4 md:px-12 flex items-center h-24 fixed top w-full z-50 transition duration-500 to-transparent">
    <div class="mr-4">
      <NuxtLink class="flex items-center" to="/" v-if="route.name !== 'index'">
        <ArrowSmLeftIcon class="h-8 w-8"/>
      </NuxtLink>
    </div>
    <div class="flex items-center space-x-4 ml-auto">
      <NuxtLink href="/">
        <LazyModalMangaSearch/>
      </NuxtLink>
      <div class="flex items-center space-x-2">
        <NuxtLink href="/">
          <button
              type="button"
              class="text-gray-300 transition duration-300 text-base flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-opacity-80 hover:bg-primary-500 bg-primary">
            <p>
              Đăng nhập
            </p>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>