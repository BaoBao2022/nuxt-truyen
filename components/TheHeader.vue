<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

</script>

<template>
  <Popover class="relative h-[70px]" v-slot="{ close }">
    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
      <div>
        <PopoverPanel>
          <TheSidebar :close="close" />
        </PopoverPanel>
      </div>
    </transition>
    <header class="w-full max-w-[1400px] h-[70px] absolute ranking-[-10px] z-50 left-1/2 -translate-x-1/2 bg-transparent">
      <div class="mx-auto flex h-full w-full items-center md:max-w-[644px] lg:max-w-[1200px]">
        <PopoverButton class="outline-0 button mx-6 rounded-full p-4 md:m-0 lg:hidden">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20"
            class=" text-4xl text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </PopoverButton>
        <div class="relative flex h-full w-56 items-center md:w-80 md:px-6 lg:px-0 lg:pl-6">
          <figure class="absolute z-10 text-3xl font-semibold text-white md:text-5xl">
            <LazyNuxtLink to="/" style="font-family: cursive">
              Next Truyen
            </LazyNuxtLink>
          </figure>
          <div class="absolute left-10 top-auto z-0">

          </div>
        </div>
        <LazyTheNav />
        <div class="ml-10 flex h-full flex-1 items-center justify-end md:justify-between lg:ml-0">
          <LazyModalMangaSearch />
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