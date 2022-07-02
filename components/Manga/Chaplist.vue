<script lang="ts" setup>

const props = defineProps({
  chapterList: {
    type: Array,
  }
})
</script>

<template>
  <section class="h-fit w-full">
    <h2 class="mt-4 flex select-none items-center font-secondary text-3xl text-white hover:cursor-pointer md:text-4xl lg:text-5xl">
      <div class="flex items-center transition-all hover:text-primary">Danh sách chương</div>
    </h2>
    <div class="my-6 flex h-fit w-full flex-col overflow-x-hidden rounded-xl bg-highlight">
      <div class="z-40 my-4 flex min-h-[40px] w-full items-center gap-4 text-white md:my-2">
        <div
            class="mx-4 flex h-[32px] w-[50%] items-center justify-center rounded-xl bg-[#5f5f5f] px-2 hover:bg-white/25 md:w-[30%] lg:w-[20%]">
          <input placeholder="Đi đến chương..." type="number" min="0" class="w-full bg-transparent p-2 transition-all"
                 value="">
          <button class="px-4 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" aria-hidden="true" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
          </button>
        </div>
        <div class="relative">
          <button id="headlessui-listbox-button-3" type="button" aria-haspopup="true" aria-expanded="false">
            <div class="mr-2 flex items-center gap-1 text-lg md:text-2xl"><span>Nguồn: NT</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                   stroke="currentColor" aria-hidden="true"
                   class="animate__animated animate__faster animate__rotateIn h-8 w-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div class="animate__fadeIn animate__animated m-2 overflow-hidden text-white" style="height: 600px; overflow: scroll">
        <button class="w-full my-1" v-for="(chap, index) in chapterList">
          <a class="bg-deep-black flex h-[30px] items-center justify-between rounded-lg"
             href="/manga/read/tham-tu-conan-4638/1096/868641">
            <div class="flex w-[30%] min-w-max items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                   class="mx-4 h-4 w-4">
                <path fill-rule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clip-rule="evenodd">
                </path>
              </svg>
              <span class="inline-block  overflow-hidden text-left text-lg font-bold line-clamp-1 hover:text-white max-w-[200px]">Chapter {{ index }}</span>
            </div>
            <div class="flex items-center px-4">
              <span class="whitespace-nowrap text-lg font-extralight text-gray-300">{{ chap.updatedAt }}</span>
            </div>
          </a>
        </button>
      </div>

      <!--      -->
      <!--      <div data-test-id="virtuoso-scroller" data-virtuoso-scroller="true" tabindex="0"-->
      <!--           style="height: auto; outline: none; overflow-y: auto; position: relative;">-->
      <!--        <div data-viewport-type="element" style="width: 100%; height: 100%; position: absolute; ranking: 0px;">-->
      <!--          <div data-test-id="virtuoso-item-list"-->
      <!--               style="box-sizing: border-box;  margin-ranking: 0px;">-->
      <!--            <div data-index="8" data-known-size="30" data-item-index="8" style="overflow-anchor: none;">-->
      <!--              <div class="animate__fadeIn animate__animated m-2 overflow-hidden text-white">-->
      <!--                <button class="h-full w-full"><a-->
      <!--                    class="bg-deep-black flex h-[30px] items-center justify-between rounded-lg"-->
      <!--                    href="/api/read/tham-tu-conan-4638/1088/832906">-->
      <!--                  <div class="flex w-[30%] min-w-max items-center">-->
      <!--                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"-->
      <!--                         class="mx-4 h-4 w-4">-->
      <!--                      <path fill-rule="evenodd"-->
      <!--                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"-->
      <!--                            clip-rule="evenodd"></path>-->
      <!--                    </svg>-->
      <!--                    <span-->
      <!--                        class="inline-block  overflow-hidden text-left text-lg font-bold line-clamp-1 hover:text-white max-w-[200px]">Chapter 1088</span>-->
      <!--                  </div>-->
      <!--                  <div class="flex items-center px-4"><span-->
      <!--                      class="whitespace-nowrap text-lg font-extralight text-gray-300">19:17 14/03</span></div>-->
      <!--                </a></button>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--            <div data-index="9" data-known-size="30" data-item-index="9" style="overflow-anchor: none;">-->
      <!--              <div class="animate__fadeIn animate__animated m-2 overflow-hidden text-white">-->
      <!--                <button class="h-full w-full"><a-->
      <!--                    class="bg-deep-black flex h-[30px] items-center justify-between rounded-lg"-->
      <!--                    href="/api/read/tham-tu-conan-4638/1087/821857">-->
      <!--                  <div class="flex w-[30%] min-w-max items-center">-->
      <!--                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"-->
      <!--                         class="mx-4 h-4 w-4">-->
      <!--                      <path fill-rule="evenodd"-->
      <!--                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"-->
      <!--                            clip-rule="evenodd"></path>-->
      <!--                    </svg>-->
      <!--                    <span-->
      <!--                        class="inline-block  overflow-hidden text-left text-lg font-bold line-clamp-1 hover:text-white max-w-[200px]">Chapter 1087</span>-->
      <!--                  </div>-->
      <!--                  <div class="flex items-center px-4"><span-->
      <!--                      class="whitespace-nowrap text-lg font-extralight text-gray-300">12:12 08/02</span></div>-->
      <!--                </a></button>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

    </div>
  </section>
</template>