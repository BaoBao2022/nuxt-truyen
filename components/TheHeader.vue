<script lang="ts" setup>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue';
import {MenuIcon} from '@heroicons/vue/solid';
import {MoonIcon, LightBulbIcon} from '@heroicons/vue/outline';
import {useColorMode} from "#imports";
const useColor = useColorMode()

const dark = () => {
  useColor.preference = "light";
};

const light = () => {
  useColor.preference = "dark";
};

</script>

<template>
  <Popover class="relative h-[50px]" v-slot="{ close }">
    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
      <div>
        <PopoverPanel>
          <TheSidebar :close="close"/>
        </PopoverPanel>
      </div>
    </transition>
    <header id="header"
            class="flex items-center w-full h-[50px] absolute ranking-[-10px] z-50 left-1/2 -translate-x-1/2 bg-transparent">
      <div class="mx-auto flex h-full w-full items-center md:max-w-[644px] lg:max-w-[1200px]">
        <PopoverButton class="outline-0 button mx-6 p-1 md:m-0 lg:hidden navbar-toggle rounded-sm">
          <MenuIcon class="h-7 w-7"/>
        </PopoverButton>
        <div class="relative flex h-full w-56 items-center md:w-80 md:px-6 lg:px-0 lg:pl-6">
          <figure class="absolute z-10 text-3xl font-semibold text-white md:text-5xl">
            <LazyNuxtLink to="/" style="font-family: HandelGothic; font-size: 24px">
              <span style="color: #009ddc">M<span style="color: #4aa942">e</span><span
                  style="color: #f47a1f">e</span></span><span style="color: #ee2c74">Truyen</span>
            </LazyNuxtLink>
          </figure>
          <div class="absolute left-10 top-auto z-0">
          </div>
        </div>
        <LazyTheNav/>
        <div class="ml-10 flex h-full flex-1 items-center justify-end md:justify-between lg:ml-0">
          <LazyModalMangaSearch/>
        </div>
      </div>
      <div class="lg:mr-10 mr-5 cursor-pointer text-white" @click="light" v-if="useColor.preference === 'light'">
        <MoonIcon class="h-9 w-9"/>
      </div>
      <div class="lg:mr-10 mr-5 cursor-pointer text-white" @click="dark" v-if="useColor.preference === 'dark'">
        <LightBulbIcon class="h-9 w-9"/>
      </div>
    </header>
  </Popover>
</template>

<style lang="scss" scoped>
.header-content {
  overflow: hidden;
}
</style>