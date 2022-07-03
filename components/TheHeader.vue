<script lang="ts" setup>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue';
import {useRoute} from "#imports";

const route = useRoute();
const hasIndexPage = computed(() => {
  return route.name.startsWith("index");
});

</script>

<template>
  <Popover class="relative h-40" v-slot="{close}">
    <!--    <transition-->
    <!--        enter-active-class="transition duration-200 ease-out"-->
    <!--        enter-from-class="translate-y-1 opacity-0"-->
    <!--        enter-to-class="translate-y-0 opacity-100"-->
    <!--        leave-active-class="transition duration-150 ease-in"-->
    <!--        leave-from-class="translate-y-0 opacity-100"-->
    <!--        leave-to-class="translate-y-1 opacity-0">-->
    <PopoverPanel>
      <TheSidebar :close="close"/>
    </PopoverPanel>
    <!--    </transition>-->
    <header
        :class="hasIndexPage ? 'h-40 bg-background' : 'w-full max-w-[1400px] h-40 absolute ranking-[-10px] z-50 left-1/2 -translate-x-1/2 bg-transparent' ">
      <div class="header-content mx-auto flex h-full w-full items-center md:max-w-[644px] lg:max-w-[1200px]">
        <PopoverButton class="outline-0 button mx-6 rounded-full p-4 md:m-0 lg:hidden">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
               class=" text-4xl text-white"
               height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
          </svg>
        </PopoverButton>
        <div class="relative flex h-full w-56 items-center md:w-80 md:px-6 lg:px-0 lg:pl-6">
          <figure class="absolute z-10 text-4xl font-semibold text-white md:text-5xl">
            <NuxtLink to="/" style="font-family: fantasy">
              Next Truyen
            </NuxtLink>
          </figure>
<!--          <div class="absolute left-10 top-auto z-0">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512"-->
<!--                 xml:space="preserve" width="50" height="50"><path style="fill:#88888f" d="M133.818 116.364h34.909v116.364h-34.909z"></path>-->
<!--              <path-->
<!--                  style="fill:#797781" d="M343.273 116.364h34.909v116.364h-34.909z"></path>-->
<!--              <path style="fill:#e02753"-->
<!--                    d="M512 23.273C473.659 36.83 377.594 69.818 256 69.818S38.341 36.83 0 23.273l15.914 93.091C54.255 129.921 134.407 139.636 256 139.636s201.745-9.715 240.086-23.273L512 23.273z"></path>-->
<!--              <path-->
<!--                  style="fill:#c5142c"-->
<!--                  d="M256 69.818v69.818c121.594 0 201.745-9.715 240.086-23.273L512 23.273C473.659 36.83 377.594 69.818 256 69.818z"></path>-->
<!--              <path-->
<!--                  style="fill:#e07188" d="M116.364 267.636h69.818v221.091h-69.818z"></path>-->
<!--              <path style="fill:#e02753"-->
<!--                    d="M325.818 267.636h69.818v221.091h-69.818z"></path>-->
<!--              <path-->
<!--                  style="fill:#e02753"-->
<!--                  d="m494.547 219.093-11.639-32.911C454.173 196.343 391.48 208.456 256 208.456S57.827 196.343 29.092 186.182l-11.639 32.911c10.358 3.662 22.529 6.91 36.451 9.748v50.432h404.191v-50.432c13.922-2.838 26.094-6.085 36.452-9.748z"></path>-->
<!--              <path-->
<!--                  style="fill:#c5142c"-->
<!--                  d="M482.908 186.182C454.173 196.343 391.48 208.456 256 208.456v70.817h202.096v-50.432c13.922-2.838 26.093-6.086 36.451-9.748l-11.639-32.911z"></path>-->
<!--              <path-->
<!--                  style="fill:#88888f" d="M221.091 128h69.818v93.089h-69.818z"></path>-->
<!--              <path style="fill:#797781"-->
<!--                    d="M256 128h34.909v93.089H256z"></path></svg>-->
<!--          </div>-->
        </div>
        <TheNav/>
        <div class="ml-10 flex h-full flex-1 items-center justify-end md:justify-between lg:ml-0">
          <form
              class="undefined ml-16 flex h-[40%] w-fit items-center justify-between rounded-2xl  bg-white shadow-xl shadow-white/20 lg:w-[68%]">
            <button
                class="mx-4 hidden rounded-xl bg-rose-300 px-2 py-1 text-rose-600 transition-all hover:bg-rose-500 hover:text-white/80 md:block">
              <a href="/browse">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                     class="h-8 w-8">
                  <path
                      d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                </svg>
              </a></button>
            <input readonly="" class="hidden w-[80%] bg-transparent md:block" placeholder="Tìm manga...">
            <div class="h-full w-fit rounded-2xl p-4 hover:cursor-pointer hover:opacity-60 lg:text-background">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                   class="h-8 w-8">
                <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"></path>
              </svg>
            </div>
          </form>
          <div class="absolute-center h-full w-40 ">
            <div class="relative">
              <button
                  class="absolute-center h-20 w-20 overflow-hidden rounded-full bg-secondary bg-cover bg-no-repeat text-white hover:bg-white/10">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-16 w-16"
                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Popover>
</template>

<style lang="scss" scoped>
.header-content {
  overflow: hidden;
}
</style>