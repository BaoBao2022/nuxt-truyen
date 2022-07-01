<template>
  <Swiper :modules="modules" :autoplay="autoPlaySettings">
    <SwiperSlide v-for="spotlight in spotlights">
      <div class="cursor-pointer">
        <figure class="deslide-cover h-[250px] w-full bg-cover bg-center bg-no-repeat blur md:h-[350px] lg:h-[450px]"
                :style="bgCover(spotlight)"></figure>
        <div
            class="aspect-[3/4] 0 absolute-center absolute top-1/2 right-[5%] md:right-[10%] z-10 flex h-[80%] w-[150px] -translate-y-1/2 items-center md:w-[200px] lg:w-[250px]">
          <div class="relative h-full w-[90%] overflow-hidden rounded-2xl magictime vanishIn"><span
              style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; inset: 0;">
            <img alt="image-preview" sizes="100vw"
                 :srcset="spotlight.thumbnail"
                 :src="spotlight.thumbnail"
                 decoding="async" data-nimg="fill" class="absolute inset-0 object-cover object-center"
                 style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"></span>
          </div>
        </div>
        <div
            class="absolute top-12 left-5 z-40 flex h-[70%] w-[50%] flex-col space-x-4 space-y-4 font-secondary text-white md:left-[5%] md:w-[55%] md:py-4 lg:space-y-6">
          <h3 class="mx-4 mt-6 text-xl md:text-4xl">Chapter {{ spotlight.chapter }}</h3>
          <h1 class="text-3xl transition-all line-clamp-1 hover:text-primary md:min-h-[30px] md:text-6xl">
            {{ spotlight.title }}
          </h1><h5 class="text-sm line-clamp-3 md:min-h-[60px] md:text-2xl">
          {{ spotlight.content }}
        </h5>
          <ul class="hidden space-x-4 text-lg md:flex">
            <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
              Action
            </li>
            <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
              Fantasy
            </li>
            <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
              Manga
            </li>
            <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
              Shounen
            </li>
            <li class="flex w-fit max-w-[100px] items-center whitespace-nowrap rounded-xl border-[1px] border-white py-2 px-4 line-clamp-1">
              Supernatural
            </li>
          </ul>
          <div class="flex space-x-6 text-xl md:text-2xl lg:pt-6">
            <button data-id="chu-thuat-hoi-chien-18986"
                    class="absolute-center rounded-xl bg-primary py-3 px-5 transition-all hover:scale-110 md:w-[100px]">
              Đọc ngay
            </button>
            <a href="/manga/details/chu-thuat-hoi-chien-18986?src=nt">
              <button
                  class="absolute-center rounded-xl bg-white py-3 px-5 text-gray-800 transition-all hover:scale-110 md:w-[100px]">
                Chi tiết
              </button>
            </a>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay} from "swiper";
import {ref} from 'vue';

const modules = ref([Autoplay]);
const autoPlaySettings = ref({
  delay: 2500,
  disableOnInteraction: false
});

const bgCover = (spotlight) => {
  return {
    backgroundImage: `url(${spotlight.thumbnail})`,
  }
}

const spotlights = ref([
  {
    thumbnail: "https://kyotomanga.live/_next/image?url=https%3A%2F%2Fst.nettruyenco.com%2Fdata%2Fcomics%2F94%2Fkich-truong-cua-takemichi.jpg&w=1200&q=75",
    chapter: "240",
    title: "Kích trường của Takemichi",
    content: "Mairimashita! Iruma-kun là câu chuyện kể về cậu bé Suzuki Iruma, người đã bị bố mẹ mình kí khế ước bán cho ác ma để đổi lấy tiền tài và bình an. Cậu bé Iruma đáng thương từ lúc mới biết đi (1 tuổi) đã phải ra xã hội lăn lộn, buôn ba khắp nơi với hai vị phụ huynh tưng tửng cho đến ngày một Ác Ma đến rước cậu đến Ma giới theo khế ước. Tưởng chừng như sắp vào bụng quỷ thì vị Ác Ma già nua này đã khóc lóc yêu cầu cậu làm cháu trai ông ta, với bản tính lương thiện và tốt bụng đến cả bản thân mình cũng phải kinh ngạc, cậu bất đắc dĩ đã đồng ý lời đề nghị đó và nhập học trường Ác Ma theo ý ông ta. Chuyện gì sẽ xảy ra tiếp theo, mời các bạn theo dõi cuộc sống học đường đầy bất thường của Iruma-kun."
  },
  {
    thumbnail: "https://kyotomanga.live/_next/image?url=https%3A%2F%2Fst.nettruyenco.com%2Fdata%2Fcomics%2F42%2Fchu-thuat-hoi-chien.jpg&w=1200&q=75",
    chapter: "120",
    title: "Kích trường của Takemichi",
    content: "Mairimashita! Iruma-kun là câu chuyện kể về cậu bé Suzuki Iruma, người đã bị bố mẹ mình kí khế ước bán cho ác ma để đổi lấy tiền tài và bình an. Cậu bé Iruma đáng thương từ lúc mới biết đi (1 tuổi) đã phải ra xã hội lăn lộn, buôn ba khắp nơi với hai vị phụ huynh tưng tửng cho đến ngày một Ác Ma đến rước cậu đến Ma giới theo khế ước. Tưởng chừng như sắp vào bụng quỷ thì vị Ác Ma già nua này đã khóc lóc yêu cầu cậu làm cháu trai ông ta, với bản tính lương thiện và tốt bụng đến cả bản thân mình cũng phải kinh ngạc, cậu bất đắc dĩ đã đồng ý lời đề nghị đó và nhập học trường Ác Ma theo ý ông ta. Chuyện gì sẽ xảy ra tiếp theo, mời các bạn theo dõi cuộc sống học đường đầy bất thường của Iruma-kun."
  }
]);
</script>