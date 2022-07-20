<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import { ref } from 'vue';

type autoSettingSwiper = {
  delay: number;
  disableOnInteraction: boolean
}
const modules = ref([Autoplay]);
// A ref object that is passed to the Swiper component.
const autoPlaySettings = ref<autoSettingSwiper>({
  delay: 3000,
  disableOnInteraction: false
});

const mangaLocal = [
  {
    id: 1,
    name: 'Lão Đại Xuyên Không Gả Cho Phu Quân Mù',
    thumbnail: '/images/spotlight-7.png',
    slug: 'lao-dai-xuyen-khong-ga-cho-phu-quan-mu-62908',
    updatedAt: '[Cập nhật lúc: 14:43 19/07/2022]',
    view: '795.422',
    author: 'Đang cập nhật',
    status: 'Đang cập nhật',
    follow: '25.727',
    genres: ['Drama', 'Manhua', 'Ngôn Tình', 'Romance', 'Truyện Màu']
  },
  {
    id: 1,
    name: 'Kiều Mỵ Phu Lang, Tại Tuyến Lục Trà',
    thumbnail: '/images/spotlight-1.png',
    slug: 'kieu-my-phu-lang-tai-tuyen-luc-tra-53686',
    updatedAt: '[Cập nhật lúc: 14:43 19/07/2022]',
    view: '2.422.242',
    author: 'Đang cập nhật',
    status: 'Đang cập nhật',
    follow: '38.423',
    genres: ['Drama', 'Manhua', 'Ngôn Tình', 'Romance', 'Truyện Màu']
  },
  {
    id: 4,
    name: 'Cô Vương Quả Nữ',
    thumbnail: '/images/spotlight-5.png',
    slug: 'co-vuong-qua-nu-54444',
    updatedAt: '[Cập nhật lúc: 14:43 19/07/2022]',
    view: '6.763.201',
    author: 'Đang cập nhật',
    status: 'Đang cập nhật',
    follow: '46.578',
    genres: ['Comedy', 'Manhua', 'Ngôn Tình', 'Truyện Màu']
  },
  {
    id: 2,
    name: 'Mau Xuyên Không Rửa Tội Cho Nhân Vật Phản Diện',
    thumbnail: '/images/spotlight-2.png',
    slug: 'mau-xuyen-khong-rua-toi-cho-nhan-vat-phan-dien-45007',
    updatedAt: '[Cập nhật lúc: 14:43 19/07/2022]',
    view: '5.934.249',
    author: 'Đang cập nhật',
    status: 'Đang cập nhật',
    follow: '54.343',
    genres: ['Cổ đại', 'Manhua', 'Ngôn Tình', 'Truyện Màu', 'Xuyên Không']
  },
  {
    id: 3,
    name: 'Manh Sư Tại Thượng',
    thumbnail: '/images/spotlight-3.png',
    slug: 'manh-su-tai-thuong-23169',
    updatedAt: '[Cập nhật lúc: 14:43 19/07/2022]',
    view: '59.158.407',
    author: 'Đang cập nhật',
    status: 'Đang cập nhật',
    follow: '120.228',
    genres: ['Cổ đại', 'Manhua', 'Ngôn Tình', 'Truyện Màu']
  }
]

const backgroundImage = () => {
  return {
    backgroundImage: `url(https://cdn.funtoon.vn/image/resources/1641268437278.1942.png)`,
  }
}

</script>

<template>
  <!--  <SectionSpotlightBannerLoading v-if="pending"/>-->
  <Swiper :loop="true" :modules="modules" :autoplay="autoPlaySettings" class="relative">
    <SwiperSlide v-for="spotlight in mangaLocal">
      <NuxtLink :to="useMangaDetailPagePath(spotlight.slug)">
        <div class="relative aspect-w-16 aspect-h-9 rounded-xl-md">
          <div
            class="z-20 absolute fixed-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 flex items-end bottom-0 w-full">
            <div class="p-4 w-full">
              <h1 class="text-xl font-bold uppercase line-clamp-2 text-white w-[70%] h-[35px]">
                <a class="flex items-end h-[100%]">{{ spotlight.name }}</a>
              </h1>
              <div class="flex flex-wrap items-center mt-4 text-lg gap-x-8">
                <div class="flex items-center gap-x-2">
                  <p class="text-white flex items-center">
                    <span class="text-xs mr-1">
                      <SvgViewSpotLight class="text-white mr-1" />
                    </span>
                    {{ spotlight.view }}
                  </p>
                </div>
                <div class="flex items-center gap-x-2">
                  <div class="flex items-center gap-x-2">
                    <p class="text-white flex items-center">
                      <SvgFollow class="mr-1" />
                      {{ spotlight.follow }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <figure class="w-full bg-cover bg-center bg-no-repeat z-50"
            style="background-image: url(https://cdn.funtoon.vn/image/resources/1641268437278.1942.png)">
          </figure>
          <div>
            <img loading="lazy" class="img-position z-10 object-cover" format="webp" :src="spotlight.thumbnail">
          </div>
        </div>
      </NuxtLink>
    </SwiperSlide>
  </Swiper>
</template>


