<script setup>
import {ref} from 'vue'

const scrollTransform = ref(0);
if (typeof document !== 'undefined')
  document.addEventListener('scroll', (e) => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    scrollTransform.value = st;
  });

</script>

<template>
  <div :class="scrollTransform === 0  ? 'bg-gradient-to-b from-black/80 via-black/60' : 'bg-black'"
       class="px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-36 px-4 md:px-12 flex items-center h-24 fixed top w-full z-50 transition duration-500 to-transparent">
    <div class="sm:hidden mr-4">
      <button class="">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-6 h-6"
             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
        </svg>
      </button>
    </div>
    <div class="relative h-[35px] w-[35px] mr-8">
      <NuxtLink to="/">
        <div class="relative flex mx-auto h-24 w-24 mb-8 !w-full !h-full">
          <div style="opacity: 1;">
          <span class="span-position">
            <img
                class="img-position"
                alt="logo"
                src="~/assets/images/logo-banner.png"
                sizes="100vw">
        </span>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div class="hidden sm:flex items-center space-x-6 font-semibold text-typography-secondary">
      <NuxtLink class="hover:text-white transition duration-300 text-primary-300" to="/filter?gerens=anime">
        <p class="hover:text-white transition duration-300 text-gray-300">
          Anime
        </p>
      </NuxtLink>
      <NuxtLink to="/filter?comics=manga-112">
        <p
            class="hover:text-white transition duration-300 text-gray-300">
          Manga
        </p>
      </NuxtLink>
      <NuxtLink href="/filter?view=month">
        <p
            class="hover:text-white transition duration-300 text-gray-300">
          Bảng xấp hạng
        </p>
      </NuxtLink>
      <NuxtLink href="/filter?gender=1">
        <p
            class="hover:text-white transition duration-300 text-gray-300">
          Truyện con gái
        </p>
      </NuxtLink>
      <NuxtLink href="/filter?gender=2">
        <p
            class="hover:text-white transition duration-300 text-gray-300">
          Truyện con trai
        </p>
      </NuxtLink>
    </div>
    <div class="flex items-center space-x-4 ml-auto">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="w-6 h-6" height="1em"
           width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
      </svg>
      <NuxtLink href="/">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
             class="text-gray-300 w-7 h-7 font-semibold hover:text-primary-300 transition duration-300" height="1em"
             width="1em"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
        </svg>
      </NuxtLink>
      <div class="flex items-center space-x-2">
        <NuxtLink href="/">
          <button
              type="button"
              class="text-gray-300 transition duration-300 text-base flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-opacity-80 hover:bg-primary-500 bg-primary-500">
            <p>
              Đăng nhập
            </p>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>