<script setup>
import {ref} from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import {SelectorIcon} from '@heroicons/vue/solid'

import {CHAPTER_SORT} from '~/types';
const selected = ref(CHAPTER_SORT[1])

const emits = defineEmits(['selectChapter']);
watch([selected], (value) => {
  emits('selectChapter', value);
});

</script>

<template>
  <div class="flex py-1 mt-2 grid relative items-center mr-3 w-[180px]">
    <h2 class="my-2 font-secondary custom-title lg:text-3xl text-center">(4) Số chương</h2>
    <Listbox v-model="selected">
      <ListboxButton
          class="btn bg-deep-black flex items-center border-white text-white flex justify-between w-[180px] rounded-[0px]"
          style="border-radius: 0">
        {{selected.label}}
        <SelectorIcon class="h-5 w-5" aria-hidden="true"/>
      </ListboxButton>
      <ListboxOptions
          class="w-full absolute z-10 bg-deep-black text-white cursor-pointer lg:h-[300px] overflow-scroll"
          style="top: 75px; height: 300px; overflow: scroll">
        <ListboxOption class="py-2 px-5 hover:bg-highlight" v-for="view in CHAPTER_SORT" :key="view"
                       :value="view">
          {{ view.label }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>