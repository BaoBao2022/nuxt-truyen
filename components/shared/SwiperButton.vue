<script setup>
import {useSwiper} from 'swiper/vue';

const swiper = useSwiper();
const props = defineProps({
  className: String,
  type: String,
})

const handleEvent = () => {
  if (props.type === 'next')
    swiper.value.slideNext();
  else
    swiper.value.slidePrev()
}
</script>

<template>
  <div id="ckickckck">

    <button :class="className" class="bg-primary h-[200px] w-[200px] fixed" @click="handleEvent">
      click
    </button>
  </div>
</template>