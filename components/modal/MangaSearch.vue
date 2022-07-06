<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { SearchIcon, UserIcon } from '@heroicons/vue/solid';
import { XIcon, EmojiSadIcon } from '@heroicons/vue/outline';
import { useDebounce } from '@vueuse/core';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from '@headlessui/vue'
import { useRuntimeConfig, useState } from "#imports";

const config = useRuntimeConfig();
const refInput = ref('');
const debounced = useDebounce(refInput, 300)
const shouldShow = ref(false);

const open = () => {
  shouldShow.value = true;
};
const close = () => {
  shouldShow.value = false;
}
const searchData = ref({});
const hasResult = ref(true);
const loading = ref(false);
const clearInput = () => {
  refInput.value = '';
  searchData.value = {};
}

watch([refInput], async () => {
  try {
    hasResult.value = true;
    loading.value = true;

    const mangas = await $fetch(`${config.public.NUXT_PUBLIC_SERVICE_URL}/api/nt/search`, {
      params: {
        q: debounced.value
      }
    });

    searchData.value = mangas;
    loading.value = false
  } catch (e) {
    hasResult.value = false;
    loading.value = false
  }
})

</script>

<template>
  <form @click="open"
    class="ml-16 flex h-[40%] w-fit items-center justify-between rounded-2xl lg:w-[68%]">
    <button
      class="mx-4 hidden rounded-xl bg-rose-300 px-2 py-1 text-rose-600 transition-all hover:bg-rose-500 hover:text-white/80 md:block">
    </button>
    <input class="hidden w-[80%] bg-transparent md:block" placeholder="Tìm truyện...">
    <div class="h-full w-fit rounded-2xl p-4 hover:cursor-pointer hover:opacity-60 text-background">
      <SearchIcon class="w-8 h-8 text-white" />
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
  <TransitionRoot appear :show="shouldShow" as="template">
    <Dialog as="div" @close="close" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-100" />
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel class="fixed top-[10%] left-0 right-0 overflow-y-auto">
              <div class="flex min-h-full items-center justify-center p-4 text-center">
                <div
                  class="max-h-[70vh] w-[85%] transform overflow-x-hidden overflow-y-scroll rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all md:w-[75%] lg:max-h-[85vh] opacity-100 scale-100">
                  <div class="flex items-center justify-between">
                    <h3 class="my-4 mx-2 font-secondary text-4xl leading-6 text-white md:text-6xl">
                      Tìm Truyện
                    </h3>
                    <button @click="close" class="button rounded-full p-4 text-white md:mr-6">
                      <XIcon class="h-8 w-8" />
                    </button>
                  </div>

                  <div class="my-10 flex h-[60px] items-center rounded-xl bg-secondary py-4 text-white">
                    <SearchIcon class="h-10 w-10 ml-4" />
                    <input autofocus type="text" class="w-full bg-transparent p-4" @keyup="search" @change="search"
                      v-model="refInput">
                    <button v-if="refInput.length > 0" @click="clearInput"
                      class="absolute-center m-4 h-10 w-10 rounded-lg bg-primary text-white hover:opacity-60 md:h-14 md:w-14 md:rounded-xl">
                      <XIcon class="h-10 w-10" />
                    </button>
                  </div>
                  <div v-if="!hasResult && !loading && refInput.length > 0"
                    class="absolute-center mx-auto my-4 w-3/4 rounded-xl bg-secondary py-4 text-white">
                    <p class="mr-4 whitespace-nowrap text-base md:text-2xl">
                      Truyện bạn cần tìm chưa có!</p>
                    <EmojiSadIcon class="h-10 w-10" />
                  </div>
                  <LazyCommonSearchLoading v-if="loading" class-name="h-20 w-20" />
                  <LazyModalSearchResult @closeSearchModal="close" :searchData="searchData" v-if="hasResult" />
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>