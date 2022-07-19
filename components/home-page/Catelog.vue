<script setup>
</script>

<template>
  <div class="px-4 mb-4 mt-4">
    <h2 class="flex h-[20px] text-2xl font-semibold flex justify-start items-center text-white">
      ⚡ Phân loại
    </h2>
    <div class="grid grid-cols-2">
      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=mao-hiem">
          <img loading="lazy"
               format="webp"
               quantity="100"
               class="rounded-xl w-full"
               src="~/assets/images/mao-hiem.png"
               fil="fill">
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=fantasy-105">
          <img loading="lazy"
               quantity="100"
               format="webp"
               class="rounded-xl"
               src="~/assets/images/huyen-huyen.png"
               fil="fill">
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=dam-my">
          <img loading="lazy"
               class="rounded-xl"
               quantity="100"
               format="webp"
               src="~/assets/images/dam-my.png"
               fil="fill">
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=comic">
          <img loading="lazy"
               quantity="100"
               format="webp"
               class="rounded-xl"
               src="~/assets/images/tong-tai.png"
               fil="fill">
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=ngon-tinh">
          <img loading="lazy"
               quantity="100"
               format="webp"
               class="rounded-xl"
               src="~/assets/images/nu-cuong.png"
               fil="cover">
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=school-life">
          <img loading="lazy"
               quantity="100"
               class="rounded-xl"
               format="webp"
               src="~/assets/images/truong-hoc.png"
               fil="cover">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>