<script lang="ts" setup>
import { useSwiper } from 'swiper/vue';
// import {watchEffect} from "vue";

const props = defineProps({
  spotlight: Object,
})
const triggerEffect = useState('triggerEffect', () => false);
const swiper = useSwiper();

</script>

<template>
  <div
    class="aspect-[3/4] 0 absolute-center absolute top-1/2 right-[5%] md:right-[10%] z-10 flex h-[80%] w-[170px] -translate-y-1/2 items-center md:w-[220px] lg:w-[270px]">
    <div class="relative h-[195px] md:h-[250px] lg:h-full w-[90%] overflow-hidden rounded-2xl rounded-md">
      <span class="default-span-figure">
        <nuxt-img :src="spotlight.thumbnail"
          fil="cover" class="absolute inset-0 object-cover object-center default-img">
        </nuxt-img>
      </span>
    </div>
  </div>
</template>