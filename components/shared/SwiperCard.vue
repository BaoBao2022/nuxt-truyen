<script lang="ts" setup>
import {useSwiper} from 'swiper/vue';

defineProps({
  spotlight: Object,
})

</script>

<template>
  <div
      class="aspect-[3/4] 0 absolute-center absolute top-1/2 right-[5%] md:right-[10%] z-10 flex h-[80%] w-[170px] -translate-y-1/2 items-center md:w-[220px] lg:w-[270px] px-3 mt-10">
    <div class="relative h-[195px] md:h-[270px] lg:h-full w-[90%] overflow-hidden">
      <span class="duration-500 transform hover:scale-90 transition-all default-span-figure w-full">
        <nuxt-img
            format="webp"
            sizes="100px sm:100px md:100px lg:100px"
            loading="lazy"
            :src="spotlight?.thumbnail"
            fil="cover"
            class="absolute inset-0 object-cover object-center w-full">
        </nuxt-img>
      </span>
      <div slot="container-end" class="swiper-navigation absolute right-0 bottom-full mb-4 flex space-x-4"><button type="button" class="transition duration-300 p-2 rounded-full swiper-button-prev flex items-center justify-center hover:bg-white hover:text-black border-solid border-2 border-white gap-x-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg></button><button type="button" class="transition duration-300 p-2 rounded-full swiper-button-next flex items-center justify-center hover:bg-white hover:text-black border-solid border-2 border-white gap-x-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg></button></div>
    </div>
  </div>
</template>