<script setup>
import {ref} from 'vue'

const open = useState('openNav', () => false)
const scrollTransform = ref(0);
if (typeof document !== 'undefined')
  document.addEventListener('scroll', (e) => {
    scrollTransform.value = window.pageYOffset || document.documentElement.scrollTop;
  });

</script>

<template>
  <div :class="scrollTransform === 0  ? 'bg-gradient-to-b from-black/80 via-black/60' : 'bg-black'"
       class="px-4 md:px-12 lg:px-20 xl:px-28 2xl:px-36 px-4 md:px-12 flex items-center h-24 fixed top w-full z-50 transition duration-500 to-transparent">
    <div class="sm:hidden mr-4">
      <button @click="open = !open">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="w-6 h-6"
             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
        </svg>
      </button>

      <Teleport to="body">
        <div v-if="open" class="modal">
          <LazyTheSidebar/>
        </div>

      </Teleport>
    </div>
    <div class="relative h-[35px] w-[35px] mr-8">
      <NuxtLink to="/">
        <div class="relative flex mx-auto w-[30px] h-[30px] mb-8">
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
      <NuxtLink href="/filter?genres=dam-my">
        <p
            class="hover:text-white transition duration-300 text-gray-300">
          Đam mỹ
        </p>
      </NuxtLink>
      <NuxtLink href="/filter?genres=ngon-tinh">
        <p
            class="hover:text-white transition duration-300 text-gray-300">
          Ngôn tình
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