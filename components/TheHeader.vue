<script lang="ts" setup>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue';
import {SearchIcon, UserIcon} from '@heroicons/vue/solid';
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
            <NuxtLink to="/" style="font-family: cursive">
              Next Truyen
            </NuxtLink>
          </figure>
          <div class="absolute left-10 top-auto z-0">

          </div>
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
              <SearchIcon class="w-8 h-8"/>
            </div>
          </form>
          <div class="absolute-center h-full w-40 ">
            <div class="relative">
              <button
                  class="absolute-center h-20 w-20 overflow-hidden rounded-full bg-secondary bg-cover bg-no-repeat text-white hover:bg-white/10">
                <UserIcon class="w-12 h-12" />
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