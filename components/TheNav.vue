<script setup>
import { ChevronDownIcon } from '@heroicons/vue/solid';
import { MangaGenresPreview, MangaTypesPreview } from '~/types';
import { onClickOutside } from '@vueuse/core'

const genreTars = ref(null)
const mangaTars = ref(null)

const openGenresPreview = useState('openGenresPreview', () => false);
const openMangaTypes = useState('openMangaTypes', () => false);

onClickOutside(genreTars, (event) => openGenresPreview.value = false)
onClickOutside(mangaTars, (event) => openMangaTypes.value = false)


</script>

<template>
  <nav>
    <ul class="ml-32 hidden h-full w-fit items-center space-x-10 font-secondary text-3xl text-white lg:flex">
      <li class="relative transition-all">
        <button :class="{ 'text-primary': openGenresPreview }" class="flex items-center"
          @click="openGenresPreview = true">
          Thể loại
          <ChevronDownIcon class="h-6 w-6" />
        </button>
        <div v-show="openGenresPreview">
          <ul ref="genreTars"
            class="animate__animated animate__fadeIn animate__faster absolute top-full left-1/2 z-50 flex h-fit w-fit -translate-x-1/2 flex-col flex-nowrap items-center justify-evenly rounded-2xl bg-secondary py-4 transition-all">
            <li class="hover:text-primary" v-for="genre in MangaGenresPreview">
              <NuxtLink :to="genre.href"
                class="absolute-center mx-2 my-2 h-14 whitespace-nowrap px-6 font-primary duration-300">
                {{ genre.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
      <li class="relative transition-all">
        <button class="flex items-center" @click="openMangaTypes = true">
          Truyện tranh
          <ChevronDownIcon class="h-6 w-6" />
        </button>

        <div v-show="openMangaTypes">
          <ul ref="mangaTars"
            class="animate__animated animate__fadeIn animate__faster absolute top-full left-1/2 z-50 flex h-fit w-fit -translate-x-1/2 flex-col flex-nowrap items-center justify-evenly rounded-2xl bg-secondary py-4 transition-all">
            <li class="hover:text-primary" v-for="genre in MangaTypesPreview">
              <NuxtLink :to="genre.href"
                class="absolute-center mx-2 my-2 h-14 whitespace-nowrap px-6 font-primary duration-300">
                {{ genre.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>

      </li>
      <li class="transition-all hover:text-primary"><a class="text-white" href="/browse?view=newComic">Mới cập nhật</a></li>
      <li class="transition-all hover:text-primary"><a class="text-white" href="/browse?view=all">Bảng xếp hạng</a></li>
    </ul>
  </nav>
</template>