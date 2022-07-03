<script lang="ts" setup>
defineProps({
  searchData: Object
});

</script>

<template>
  <div class="min-h-fit w-full">
    <ul class="h-fit w-full space-y-5">
      <div class="lazyload-wrapper" v-for="manga in searchData.data">
        <li class="h-fit overflow-x-hidden bg-secondary py-4">
          <NuxtLink class="flex h-full space-x-2" :to="useMangaPagePath(manga.slug)">
            <figure class="aspect-w-3 relative mt-4 ml-4 h-[120px] w-[90px] min-w-[85px] overflow-hidden rounded-xl">
            <span
                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0;">
              <img
                  alt="img-preview"
                  :src="manga.thumbnail"
                  decoding="async" data-nimg="fill" class="absolute inset-0 object-cover object-center" sizes="100vw"
                  :srcset="manga.thumbnail"
                  style="position: absolute; inset: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">
            </span>
            </figure>
            <div class="flex h-full flex-1 flex-col space-y-4 text-white transition-all hover:text-primary">
              <h2
                  class="mx-4 mt-4 w-full overflow-hidden font-secondary text-2xl line-clamp-1 md:text-4xl">
                {{ manga.name }}
              </h2>
              <h4 class="mx-4 text-base line-clamp-1 md:text-2xl">{{ manga.newChapter }}</h4>
              <ul class="flex h-[50%] flex-wrap">
                <li class="absolute-center m-2 h-[40%] w-[75px] rounded-xl bg-background text-[60%]  md:w-fit md:text-xl"
                    :style="{'color': '#'+(Math.random()*0xFFFFFF<<0).toString(16)}"
                    v-for="genre in manga.genres">
                  <span class="p-4">{{ genre }} {{ colorRandom }}</span>
                </li>
              </ul>
            </div>

          </NuxtLink>
        </li>
      </div>
    </ul>
  </div>
</template>