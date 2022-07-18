<script setup>
</script>

<template>
  <div class="px-3 mb-4 mt-8">
    <h2 class="flex h-[20px] text-2xl font-semibold flex justify-start items-center text-white">
      ⚡ Phân loại
    </h2>
    <div class="grid grid-cols-2">
      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=mao-hiem">
          <nuxt-img loading="lazy"
                    format="webp"
                    class="rounded w-full"
                    src="/mao-hiem.png"
                    fil="fill">
          </nuxt-img>
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=fantasy-105">
          <nuxt-img loading="lazy"
                    format="webp"
                    class="rounded"
                    src="/huyen-huyen.png"
                    fil="fill">
          </nuxt-img>
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=dam-my">
          <nuxt-img loading="lazy"
                    class="rounded"
                    format="webp"
                    src="/dam-my.png"
                    fil="fill">
          </nuxt-img>
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=comic">
          <nuxt-img loading="lazy"
                    format="webp"
                    class="rounded"
                    src="/tong-tai.png"
                    fil="fill">
          </nuxt-img>
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=ngon-tinh">
          <nuxt-img loading="lazy"
                    format="webp"
                    class="rounded"
                    src="/nu-cuong.png"
                    fil="cover">
          </nuxt-img>
        </NuxtLink>
      </div>

      <div class="col-span-1 odd_margin-left odd_margin-right mt-5">
        <NuxtLink to="/filter?genres=school-life">
          <nuxt-img loading="lazy"
                    class="rounded"
                    format="webp"
                    src="/truong-hoc.png"
                    fil="cover">
          </nuxt-img>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>