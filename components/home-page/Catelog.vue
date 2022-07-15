<script setup>
</script>

<template>
  <div class="px-3 mb-4 mt-8">
    <h2 class="flex h-[40px] text-2xl font-semibold flex justify-start items-center text-white">
      Phân loại
    </h2>
    <div class="grid grid-cols-2">
      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=mao-hiem">
        <img loading="lazy"
             class="rounded-xl h-[80px] w-full object-cover"
             src="~/assets/images/mao-hiem.png"
             fil="fill">
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=fantasy-105">
        <img loading="lazy"
             class="rounded-xl h-[80px] w-full object-cover"
             src="~/assets/images/huyen-huyen.png"
             fil="fill">
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=dam-my">
        <img loading="lazy"
             class="rounded-xl h-[80px] w-full object-cover"
             src="~/assets/images/dam-my.png"
             fil="fill">
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=comic">
        <img loading="lazy"
             class="rounded-xl h-[80px] w-full object-cover"
             src="~/assets/images/tong-tai.png"
             fil="fill">
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=ngon-tinh">
        <img loading="lazy"
             class="rounded-xl h-[80px] w-full object-cover"
             src="~/assets/images/nu-cuong.png"
             fil="fill">
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=school-life">

        <img loading="lazy"
             class="rounded-xl h-[80px] w-full object-cover"
             src="~/assets/images/truong-hoc.png"
             fil="fill">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>