<script setup lang="ts">

defineProps({
  chapter: String
});

</script>

<template>
  <div class="slideUpReturn magictime fixed top-0 left-0 z-[999] h-[60px] w-full bg-[#141313]">
    <div class="flex h-full w-full items-center justify-between text-lg md:text-2xl">
      <div class="flex h-full w-fit items-center justify-evenly gap-4 px-4 md:space-x-4">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
               stroke="currentColor" aria-hidden="true" class="h-8 w-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
          </svg>
        </button>
        <h1 class="fond-bold h-fit w-[25%] capitalize line-clamp-1 md:w-[30%] ">Kiếm Nghịch Thương Khung</h1>
        <button
            class="h-[60%] w-fit max-w-[80px] whitespace-nowrap rounded-xl bg-highlight p-2 text-base line-clamp-1 md:text-lg">
          Chapter: {{ chapter }}
        </button>
        <div class="absolute-center h-full w-fit gap-4 md:mx-6">
          <button data-id="prev" class="rounded-lg bg-highlight p-4 md:p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" aria-hidden="true" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18">
              </path>
            </svg>
          </button>
          <button data-id="next" class="rounded-lg bg-highlight p-4 md:p-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                 stroke="currentColor" aria-hidden="true" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex h-full w-fit items-center pr-2 md:gap-10 md:px-4">
        <!--                  <button class="hidden items-center justify-center md:flex">-->
        <!--                    <button class="absolute-center relative w-full rounded-xl p-4 gap-2 transition-all bg-highlight">-->
        <!--                      Nguồn: <span>NT</span>-->
        <!--                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"-->
        <!--                           stroke="currentColor" aria-hidden="true"-->
        <!--                           class="animate__rotateIn animate__animated animate__faster h-8 w-8">-->
        <!--                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>-->
        <!--                      </svg>-->
        <!--                    </button>-->
        <!--                  </button>-->
        <button class="rounded-lg bg-highlight p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
               stroke="currentColor" aria-hidden="true" class="h-8 w-8">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>