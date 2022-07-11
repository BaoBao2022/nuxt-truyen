<script setup>
import {ChevronDownIcon} from '@heroicons/vue/solid';
import {MangaGenresPreview, MangaTypesPreview} from '~/types';
import {onClickOutside} from '@vueuse/core'

const genreTars = ref(null)
const rankTars = ref(null)

const openGenresPreview = useState('openGenresPreview', () => false);
const openRanking = useState('openRanking', () => false);

onClickOutside(genreTars, (event) => openGenresPreview.value = false)
onClickOutside(rankTars, (event) => openRanking.value = false)


</script>

<template>
  <nav>
    <ul class="ml-32 hidden h-full w-fit items-center space-x-10 font-secondary text-3xl text-white lg:flex">
      <li class="relative transition-all">
        <button :class="{ 'text-primary': openGenresPreview }" class="flex items-center"
                @click="openGenresPreview = !openGenresPreview">
          Thể loại
          <ChevronDownIcon class="h-6 w-6"/>
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
        <button :class="{ 'text-primary': openRanking }" class="flex items-center"
                @click="openRanking = !openRanking">
          Bảng xếp hạng
          <ChevronDownIcon class="h-6 w-6"/>
        </button>
        <div v-show="openRanking">
          <ul ref="rankTars"
              class="absolute top-full left-1/2 z-50 -translate-x-1/2 bg-secondary py-4 transition-all w-[350px]">

            <div class="grid grid-cols-2 cursor-pointer w-full">

              <div>
                <li class="hover:text-primary flex">
                  <a class="absolute-center mx-2 my-2 h-14 whitespace-nowrap px-6 duration-300">
                    Top All
                  </a>
                </li>
                <li class="hover:text-primary flex">
                  <a class="absolute-center mx-2 my-2 h-14 whitespace-nowrap px-6 font-primary duration-300">
                    Top Tháng
                  </a>
                </li>
                <li class="hover:text-primary flex">
                  <a class="absolute-center mx-2 my-2 h-14 whitespace-nowrap px-6 font-primary duration-300">
                    Top Tuần
                  </a>
                </li>
                <li class="hover:text-primary flex">
                  <a class="absolute-center mx-2 my-2 h-14 whitespace-nowrap px-6 font-primary duration-300">
                    Top Ngày
                  </a>
                </li>
              </div>
              <div>
                <li class="hover:text-primary flex">
                  <a class="absolute-center mx-2 my-2 h-14 whitespace-nowrap px-6 font-primary duration-300">
                    Yêu thích
                  </a>
                </li>
                <li class="hover:text-primary flex">
                  <a class="absolute-center mx-2 my-2 h-14 whitespace-nowrap px-6 font-primary duration-300">
                    Truyện full
                  </a>
                </li>
                <li class="hover:text-primary flex">
                  <a class="absolute-center mx-2 my-2 h-14 whitespace-nowrap px-6 font-primary duration-300">
                    Mới cập nhật
                  </a>
                </li>
                <li class="hover:text-primary flex">
                  <a class="absolute-center mx-2 my-2 h-14 whitespace-nowrap px-6 font-primary duration-300">
                    Truyện mới
                  </a>
                </li>
              </div>

            </div>


          </ul>

        </div>
      </li>
      <li class="transition-all hover:text-primary"><a class="text-white" href="#">Con trai</a></li>
      <li class="transition-all hover:text-primary"><a class="text-white" href="#">Con gái</a></li>
    </ul>
  </nav>
</template>